const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')


module.exports = (upload)=>{

    router.post('/addAdmin', upload.single('image'), adminController.addAdmin);
    router.post('/updateAdmin', adminController.updateAdmin);
    router.post('/deleteAdmin', adminController.deleteAdmin);

    return router;
}


