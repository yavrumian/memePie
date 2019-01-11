const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const publicPath = path.join(__dirname, '../public');
const port = PROCESS.ENV.port || 8080

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(publicPath));




app.listen(port, () =>{
  console.log(`Running on port: ${port}`);
})
