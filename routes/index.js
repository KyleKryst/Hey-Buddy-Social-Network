const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('<h1>404 Error: <br> This page does not exist</h1>')
});

module.exports = router;
