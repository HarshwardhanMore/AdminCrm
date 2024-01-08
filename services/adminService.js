const db = require('../models');

const Admin  = db.admin;

exports.addAdmin = async (adminDetails)=>{

    try {
    const newAdmin =  await Admin.create(adminDetails)
    return newAdmin;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}