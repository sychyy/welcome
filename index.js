const express = require('express');
const app = express();
const port = 3000; // Port untuk pengembangan lokal

// Menangani permintaan ke /welcome
app.get('/welcome', (req, res) => {
    const background = req.query.background || 'https://cdn.popcat.xyz/welcome-bg.png';
    const text1 = req.query.text1 || 'Zero Two';
    const text2 = req.query.text2 || 'Welcome To Pop Cat Community';
    const text3 = req.query.text3 || 'Member 219';
    const avatar = req.query.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png';

    // Membentuk URL Popcat dengan parameter yang diterima
    const popcatUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(background)}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}&avatar=${encodeURIComponent(avatar)}`;

    // Redirect ke URL Popcat dengan parameter yang diterima
    res.redirect(popcatUrl);
});
