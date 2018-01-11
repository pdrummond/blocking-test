const express = require('express');
const app = express();

app.get('/one', (req, res) => res.send('Boom! /one'));
app.get('/two', (req, res) => {
  for (i = 0; i < 999999999; i++) {
    console.log('Loop ' + i);
  }
  res.send('Boom! /two');
});

app.listen(3000, () => console.log('BLOCKING TEST app listening on port 3000!'));
