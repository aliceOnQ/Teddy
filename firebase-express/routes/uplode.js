const express = require('express');
const router = express.Router();
const firebaseAdmin = require('../connection/firebase');

router.post('/image', upload.single('file'), function (req, res) {
  res.send({
    imgUrl: 'https://israynotarray.com/'
  });
});


module.exports = router;
