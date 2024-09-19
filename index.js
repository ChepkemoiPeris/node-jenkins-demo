const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
  res.send('Hello, Jenkins!');
});

app.listen(port, () => {
  console.log('change number one and two');
  console.log('push for the second time');
  console.log('push for the third time');
  console.log(`Server running on port ${port}`);
});
