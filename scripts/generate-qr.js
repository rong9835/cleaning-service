const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function generateQRCode() {
  const url = 'https://jayannacleaningservice.com.au';
  const outputPath = path.join(__dirname, '../public/qr-code.png');
  
  try {
    // QR 코드 생성 옵션
    const options = {
      type: 'png',
      quality: 0.92,
      margin: 1,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      },
      width: 512  // 512x512 픽셀
    };
    
    // QR 코드 생성 및 저장
    await QRCode.toFile(outputPath, url, options);
    console.log('✅ QR 코드가 성공적으로 생성되었습니다!');
    console.log(`📁 저장 위치: ${outputPath}`);
    console.log(`🔗 URL: ${url}`);
    
  } catch (error) {
    console.error('❌ QR 코드 생성 중 오류가 발생했습니다:', error);
  }
}

generateQRCode();