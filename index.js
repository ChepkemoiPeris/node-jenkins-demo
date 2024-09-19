const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { 
  res.send('Hello, Jenkins!, We are doing first demo on node');
});

app.listen(port, () => { 
  console.log("adding content")
  console.log(`Server running on port ${port}`);
});
