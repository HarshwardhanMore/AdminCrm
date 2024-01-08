const router = require('express').Router();


module.exports = (upload) =>{

    router.use('/admin', require('./admin')(upload));

    return router;
}

// module.exports = router

