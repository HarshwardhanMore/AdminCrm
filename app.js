const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');
const multer = require('multer');
const path = require('path');

const app = express();

// const allowedOrigins = [
//     "http://localhost:4200"
//   ];
// app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Upload File

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Save files in the 'uploads' directory
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });
// ----------------------------------------------------------------

app.use('/uploads', express.static('uploads'));



app.use(require('./routes')(upload));

db.sequelize.sync().then(()=>{
    console.log('Models Sync Successfully')
}).catch((err)=>{  
    console.log('Unable to sync model', err)
});


module.exports = app;



