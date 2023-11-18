const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let current_datetime = new Date();
  res.send(`Current date and time: ${current_datetime}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

