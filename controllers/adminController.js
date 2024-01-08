
const adminService = require('../services/adminService');
const {buildResponce} = require('../helpers/buildResponce');
const { admin } = require('../models');


exports.getAllAdmins = async (req, res) => {
    try {
        const data = await adminService.getAllAdmins();
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Admins Data Found!",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Admins Data Not Found!",
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


exports.addAdmin = async (req, res) => {

    try {
        const { first_name, last_name, email, phone_number, password, admin_permissions} = req.body;
        const { file_name } = req.file || "";

        const adminDetails = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone_number: phone_number,
            password: password,
            admin_permissions: admin_permissions,
            image: `uploads/${file_name}`,
            is_active: true,
        }
        const data = await adminService.addAdmin(adminDetails);
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

exports.updateAdmin = async (req, res) => {

    try {
        const { id, first_name, last_name, email, phone_number, password, admin_permissions, is_active } = req.body;
        
        const adminDetails = {
            id: id,
            first_name: first_name, 
            last_name: last_name, 
            email: email, 
            phone_number: phone_number, 
            password: password, 
            admin_permissions: admin_permissions, 
            is_active: is_active
        }

        const data = await adminService.updateAdmin(adminDetails);
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Admin updated successfully! ",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Admin does not exists!",
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
exports.deleteAdmin = async (req, res) => {

    try {
        const { id } = req.body;
        
        const data = await adminService.deleteAdmin(id);
        if (data != false) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Admin deleted successfully! ",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Admin does not exists!",
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