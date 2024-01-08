const express = require('express');
const router = express.Router();
const permissionController = require('../controllers/permissionController')


module.exports = (upload)=>{

    router.post('/addPermission', permissionController.addPermission);
    router.post('/updatePermission', permissionController.updatePermission);
    router.post('/deletePermission', permissionController.deletePermission);

    return router;
}


