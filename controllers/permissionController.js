
const permissionService = require('../services/permissionService');
const {buildResponce} = require('../helpers/buildResponce');
// const { permission } = require('../models');

exports.getAllPermissions = async (req, res) => {
    try {
        const data = await permissionService.getAllPermissions();
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Permission Data Found!",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Permission Data Not Found!",
                    data: ''
                })
        }
        return data;
    } catch (error) {
        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }
}

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
        const { permission_id, permission_name } = req.body;
        const permissionDetails = {permission_id:permission_id, permission_name:permission_name};
        
        const data = await permissionService.updatePermission(permissionDetails);
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