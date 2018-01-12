const express = require('express');
const app = express();

app.get('/hello', (req, res) => res.send('Hello World'));
app.get('/block', (req, res) => {
  for (i = 0; i < 500000; i++) {
    console.log('Loop ' + i);
  }
  res.send(`Looped ${i} times before responding`);
});

app.listen(3000, () => console.log('Listening on port 3000!!'));
