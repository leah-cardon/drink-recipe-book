const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../src/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!')
});

app.listen(port, () => {
  console.log(`Example app listening at localhost:${port}`);
});

module.exports = app;