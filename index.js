const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Jenkins!');
});

app.listen(port, () => {
  console.log(`Hello jenkis..This is running`); 
  console.log(`Hello test number two here..`); 
  console.log(`Server running on port ${port}`);
});
