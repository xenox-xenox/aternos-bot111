const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Aternos Bot is Running!');
});

setInterval(() => {
  console.log("Pinging Aternos...");
  fetch('https://aternos.org/go/')
    .then(res => console.log("Pinged Successfully:", res.status))
    .catch(err => console.log("Ping Error:", err));
}, 5 * 60 * 1000);

app.listen(3000, () => {
  console.log('Bot is running on port 3000');
});