const db = require('../models');
const Permission  = db.permission;
// const Sequelize = require('sequelize');

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


exports.getAllPermissions = async () => {
    try {
        const permissionData = await Permission.findAll();
        return permissionData;
    } catch (error) {
        throw new Error("Error fetching permissions"+error.message);
    }
}

exports.addPermission = async (permission_name)=>{

    try {

        const findPermissionByName = await Permission.findOne({
            where: {
                permission_name: permission_name
            }
        });
        if(findPermissionByName != null){
            return false;
        }
        await Permission.create(permission_name);
        return true;
    } catch (error) {
        throw new Error("Error adding permission"+error.message);
    }
}

exports.updatePermission = async (permissionDetails)=>{

    try {

        const findPermissionById = await Admin.findOne({
            where: {
                id: permissionDetails.id
            }
        });
        if(findPermissionById == null){
            return false;
        }

        await Permission.update({
            permission_name: permissionDetails.permission_name,
        },{
            where: {
                id: permissionDetails.id
            }
        })
        return true;
    } catch (error) {
        throw new Error("Error updating permission"+error.message);
    }
}
exports.deletePermission = async (id)=>{

    try {

        const findPermissionById = await Permission.findOne({
            where: {
                id: id
            }
        });
        if(findPermissionById == null){
            return false;
        }
        // await Admin.destroy({
        //     where: {
        //         id: id
        //     }
        // })
        await Permission.update({
            is_active: false
        },{
            where: {
                id: id
            }
        })
        return true;
    } catch (error) {
        throw new Error("Error deleting permission"+error.message);
    }
}