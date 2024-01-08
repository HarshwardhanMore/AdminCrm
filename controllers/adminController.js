
const adminService = require('../services/adminService');
const {buildResponce} = require('../helpers/buildResponce');



exports.addAdmin = async (req, res) => {

    try {
        const adminDetails = req.body;
        const data = await adminService.addAdmin(adminDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Admin added successfully",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to add admin details, please try again",
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