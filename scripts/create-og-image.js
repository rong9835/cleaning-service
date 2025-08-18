const sharp = require('sharp');
const path = require('path');

async function createOGImage() {
  const logoPath = path.join(__dirname, '../public/logo/logo.png');
  const outputPath = path.join(__dirname, '../public/og-image.png');
  
  try {
    // 1200x630 크기의 카톡/OG용 이미지 생성
    await sharp(logoPath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 } // 흰색 배경
      })
      .png({ quality: 90 })
      .toFile(outputPath);
    
    console.log('✅ Open Graph 이미지가 생성되었습니다!');
    console.log(`📁 저장 위치: ${outputPath}`);
    console.log('📐 크기: 1200x630 (카톡 최적화)');
    
  } catch (error) {
    console.error('❌ Open Graph 이미지 생성 중 오류:', error);
  }
}

createOGImage();