import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Rate limiting을 위한 간단한 메모리 저장소
const requestCounts = new Map();

export async function POST(request) {
  try {
    // 간단한 Rate Limiting (IP당 시간당 5번)
    const clientIP =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('x-real-ip') ||
      '127.0.0.1';

    const now = Date.now();
    const hourAgo = now - 60 * 60 * 1000;

    if (!requestCounts.has(clientIP)) {
      requestCounts.set(clientIP, []);
    }

    const userRequests = requestCounts
      .get(clientIP)
      .filter((time) => time > hourAgo);

    if (userRequests.length >= 5) {
      return NextResponse.json(
        { error: '너무 많은 요청입니다. 잠시 후 다시 시도해주세요.' },
        { status: 429 }
      );
    }

    userRequests.push(now);
    requestCounts.set(clientIP, userRequests);

    // 요청 본문 파싱
    const body = await request.json();
    const { name, phone, address, service } = body;

    // 데이터 검증
    if (!name || !phone || !address || !service) {
      return NextResponse.json(
        { error: '필수 정보가 누락되었습니다.' },
        { status: 400 }
      );
    }

    // 데이터 길이 제한
    if (name.length > 100 || phone.length > 50 || address.length > 500) {
      return NextResponse.json(
        { error: '입력 데이터가 너무 깁니다.' },
        { status: 400 }
      );
    }

    // 전화번호 형식 검증
    const phoneRegex = /^[0-9\-\+\s\(\)]+$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: '올바른 전화번호 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // Gmail SMTP 설정
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // 이메일 전송
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `🏠 새로운 청소 서비스 견적 요청 - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            새로운 견적 요청
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 이름:</strong> ${name}</p>
            <p><strong>📞 전화번호:</strong> ${phone}</p>
            <p><strong>📍 주소:</strong> ${address}</p>
            <p><strong>🧹 서비스:</strong> ${service}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            접수 시간: ${new Date().toLocaleString('en-AU', {
              timeZone: 'Australia/Sydney',
            })}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: '견적 요청이 성공적으로 전송되었습니다!',
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: '이메일 전송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}

// OPTIONS 메서드 처리 (CORS)
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
