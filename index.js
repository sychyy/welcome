const express = require('express');
const server = express();

server.get('/welcome', (req, res) => {
  const background = req.query.background || 'https://cdn.popcat.xyz/welcome-bg.png';
  const text1 = req.query.text1 || 'Zero Two';
  const text2 = req.query.text2 || 'Welcome To Pop Cat Community';
  const text3 = req.query.text3 || 'Member 219';
  const avatar = req.query.avatar || 'https://cdn.discordapp.com/embed/avatars/0.png';

  const popcatUrl = `https://api.popcat.xyz/welcomecard?background=${encodeURIComponent(background)}&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}&text3=${encodeURIComponent(text3)}&avatar=${encodeURIComponent(avatar)}`;

  // Redirect to Popcat API with the generated URL
  res.redirect(popcatUrl);
});

module.exports = server;  // This is required for Vercel's serverless function
