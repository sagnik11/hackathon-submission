const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

console.log(`PORT environment variable: ${process.env.PORT}`);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
