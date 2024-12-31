const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, GitHub Actions som oy jes pg igfg!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
// res.send('Updated GitHub Actions!');
