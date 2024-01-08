const db = require('../models');
const Admin  = db.admin;
// const Sequelize = require('sequelize');

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;


exports.addAdmin = async (adminDetails)=>{

    try {

        const findAdminByEmail = await Admin.findOne({
            where: {
                email: adminDetails.email
            }
        });
        const findAdminByPhone = await Admin.findOne({
            where: {
                phone_number: adminDetails.phone_number
            }
        });
        if(findAdminByEmail != null || findAdminByPhone != null){
            return false;
        }
        await Admin.create(adminDetails)
        return true;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}

exports.updateAdmin = async (adminDetails)=>{

    try {

        const findAdminById = await Admin.findOne({
            where: {
                id: adminDetails.id
            }
        });
        if(findAdminById == null){
            return false;
        }

        await Admin.update({
            id: adminDetails.id,
            first_name: adminDetails.first_name,
            last_name: adminDetails.last_name,
            phone_number: adminDetails.phone_number,
            password: adminDetails.password,
            admin_permissions: adminDetails.admin_permissions,
            is_active: adminDetails.is_active
        },{
            where: {
                email: adminDetails.email
            }
        })
        return true;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}
exports.deleteAdmin = async (id)=>{

    try {

        const findAdminById = await Admin.findOne({
            where: {
                id: id
            }
        });
        if(findAdminById == null){
            return false;
        }
        // await Admin.destroy({
        //     where: {
        //         id: id
        //     }
        // })
        await Admin.update({
            is_active: false
        },{
            where: {
                id: id
            }
        })
        return true;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}