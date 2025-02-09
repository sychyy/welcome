const express = require('express');
const axios = require('axios');
const app = express();

// Menangani permintaan ke /welcome
app.get('/welcome', async (req, res) => {
    const background = req.query.background || 'https://files.catbox.moe/lh40j5.png';
    const text1 = req.query.text1 || 'Sycze';
    const text2 = req.query.text2 || 'Welcome To Sycze-Team';
    const text3 = req.query.text3 || 'Member 1986';
    const avatar = req.query.avatar || 'https://files.catbox.moe/316j0f.jpg';

    // Membentuk URL Popcat dengan parameter yang diterima
    const popcatUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(background)}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}&avatar=${encodeURIComponent(avatar)}`;

    try {
        // Memanggil API Popcat untuk mendapatkan hasil gambar
        const response = await axios.get(popcatUrl, { responseType: 'arraybuffer' });

        // Set header untuk menampilkan gambar sebagai response
        res.set('Content-Type', 'image/png');
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching Popcat API:', error);
        res.status(500).send('An error occurred while fetching the Popcat welcome card');
    }
});

// Menjalankan server pada port 3000 untuk pengembangan lokal
module.exports = app;
