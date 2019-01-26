const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var http = require('http')
const formidable = require('formidable');
const fs = require('fs');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 8080;
const cloudinaryStorage = require("multer-storage-cloudinary");
// const formidableMiddleware = require('express-formidable');
require('dotenv').config();
const cloudinary = require('cloudinary');
const multer  = require('multer')
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"]
});

const parser = multer({ storage: storage });
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(publicPath));

app.post('/fileupload', parser.single("image"), (req, res) => {
  console.log(req.file) // to see what is returned to you
  const image = {};
  image.url = req.file.url;
  image.id = req.file.public_id;

  Image.create(image) // save image information in database
    .then(newImage => res.json(newImage))
    .catch(err => console.log(err));
});



app.listen(port, () =>{
  console.log(`Running on port: ${port}`);
})
