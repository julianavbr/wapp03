const express = require('express');
const app = express();
app.listen(8000, function() {
  console.log('listening on 3000')
})
app.get('/', function(req, res) {
  res.send('Hello World')
})
// console.log('May Node be with you')
