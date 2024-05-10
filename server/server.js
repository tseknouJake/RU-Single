const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

app.listen(5050, () => {
  console.log('Server is running on port 5050');
})
