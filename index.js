const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins!');
});

app.listen(port, () => {
  console.log(`Hello jenkis..This is running`);
  console.log(`change number one`);
  console.log(`Server running on port ${port}`);
});
