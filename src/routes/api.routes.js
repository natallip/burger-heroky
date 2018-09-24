const path = require('path');
const router = require('express').Router();

router.use('/send-order', require('../api/sendOrder.js'));

router.use('/', (req, res, next) => {
  const url = path.join('api', req.url);
  const message = `${req.method} ${url} route is not served.`;
  next({ status: 404, message: message });
});

module.exports = router;
