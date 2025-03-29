const Jimp = require('jimp');
const path = require('path');

async function generateFavicons() {
  try {
    // Create base favicon image
    const baseImage = await new Jimp(512, 512, '#FFFFFF');
    
    // Add a blue vending machine icon (simplified representation)
    const iconColor = Jimp.cssColorToHex('#3B82F6'); // Blue-500
    for (let y = 128; y < 384; y++) {
      for (let x = 156; x < 356; x++) {
        baseImage.setPixelColor(iconColor, x, y);
      }
    }

    // Generate different sizes
    const sizes = {
      'favicon-16x16.png': 16,
      'favicon-32x32.png': 32,
      'apple-touch-icon.png': 180,
      'android-chrome-192x192.png': 192,
      'android-chrome-512x512.png': 512
    };

    for (const [filename, size] of Object.entries(sizes)) {
      const resized = baseImage.clone().resize(size, size);
      await resized.writeAsync(path.join(__dirname, '../public', filename));
    }

    // Create favicon.ico (16x16)
    const favicon = baseImage.clone().resize(16, 16);
    await favicon.writeAsync(path.join(__dirname, '../public/favicon.ico'));

    // Create OG Image (1200x630)
    const ogImage = new Jimp(1200, 630, '#FFFFFF');
    const logo = baseImage.clone().resize(200, 200);
    ogImage.composite(logo, 50, 215);
    
    // Add text background
    const textBg = new Jimp(800, 200, '#3B82F6');
    ogImage.composite(textBg, 300, 215);
    
    await ogImage.writeAsync(path.join(__dirname, '../public/og-image.jpg'));
    
    // Create Twitter Image (similar to OG image but different dimensions)
    const twitterImage = new Jimp(1200, 600, '#FFFFFF');
    const twitterLogo = baseImage.clone().resize(180, 180);
    twitterImage.composite(twitterLogo, 50, 210);
    
    const twitterTextBg = new Jimp(800, 180, '#3B82F6');
    twitterImage.composite(twitterTextBg, 300, 210);
    
    await twitterImage.writeAsync(path.join(__dirname, '../public/twitter-image.jpg'));

    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateFavicons();