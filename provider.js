const express = require('express');
const app = express();
const port = 8081;

app.get('/user/:id', (req, res) => {
  res.json({
    id: req.params.id,
    name: 'John Doe',
    email: 'john.doe@example.com'
  });
});

app.listen(port, () => {
  console.log(`Provider running on http://localhost:${port}`);
});