const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController')


router.post('/addAdmin', adminController.addAdmin);
// router.post('/updateAdmin', adminController.updateAdmin);
// router.post('/deleteAdmin', adminController.deleteAdmin);

module.exports = router


