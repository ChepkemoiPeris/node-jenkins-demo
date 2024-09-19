const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
  console.log('Received a number one');
});

app.listen(port, () => {
  console.log('change number one');
  console.log('push for the second time');
  console.log(`Server running on port ${port}`);
});
