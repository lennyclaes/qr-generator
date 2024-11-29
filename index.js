const fs = require('fs');
const { AwesomeQR } = require('awesome-qr');

async function init() {
    const buffer = await new AwesomeQR({
        text: 'https://www.enquetesmaken.com/s/udawz9j',
        size: 500
    }).draw();

    fs.writeFileSync('qrcode.png', buffer);
}

init();