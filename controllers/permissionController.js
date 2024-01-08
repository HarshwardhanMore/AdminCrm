
const permissionService = require('../services/permissionService');
const {buildResponce} = require('../helpers/buildResponce');
// const { permission } = require('../models');



exports.addPermission = async (req, res) => {

    try {
        const { permission_name } = req.body;
        
        
        const data = await permissionService.addPermission(permission_name);
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Admin added successfully! ",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Admin already exists!",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}

exports.updatePermission = async (req, res) => {

    try {
        const { permission_name } = req.body;
        
        const data = await permissionService.updateAdmin(permission_name);
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Permission updated successfully! ",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Permission does not exists!",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}
exports.deletePermission = async (req, res) => {

    try {
        const { id } = req.body;
        
        const data = await permissionService.deletePermission(id);
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Permission deleted successfully! ",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Permission does not exists!",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}