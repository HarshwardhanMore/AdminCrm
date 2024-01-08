const router = require('express').Router();


module.exports = (upload) =>{

    router.use('/user', require('./contact'));
    router.use('/user', require('./userEnquiry'));
    router.use('/user', require('./enterpriseEnquiry'));
    router.use('/user', require('./newsletter'));
    router.use('/admin', require('./admin')(upload));

    return router;
}

// module.exports = router

