const router = require('express').Router();


module.exports = (upload) =>{

    router.use('/admin', require('./admin')(upload));
    router.use('/admin/permission', require('./permission'));

    return router;
}

// module.exports = router

