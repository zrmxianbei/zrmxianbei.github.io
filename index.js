const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const data = {
    message: 'Hello, this is your data!',
    items: [1, 2, 3, 4, 5]
  };
  res.json(data);
});

