const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')


module.exports = (upload)=>{

    router.post('/', adminController.getAllAdmins);
    router.post('/addAdmin', upload.single('file'), adminController.addAdmin);
    router.post('/updateAdmin/:id', adminController.updateAdmin);
    router.post('/deleteAdmin/:id', adminController.deleteAdmin);

    return router;
}


