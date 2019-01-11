const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, '../public');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));




app.listen(8080, () =>{
  console.log('working');
})
