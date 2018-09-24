const router = require('express').Router();
const nodemailer = require('nodemailer');
const config = require('../config/config.json');

router.post('/', (req, res) => {
  if (!req.body.name || !req.body.phone || !req.body.street || !req.body.house || !req.body.comment) {
    res.json({error: 'Specify the data'});
    return res.status(400);
  }

  const transporter = nodemailer.createTransport(config.mail.smtp);
  const text = `phone: ${req.body.phone},
  street: ${req.body.street},
  house: ${req.body.house},
  comment: ${req.body.comment}`;

  const mailOptions = {
    from: `"${req.body.name}"`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text
  };
  transporter.sendMail(mailOptions, (error, info) => {
     if (error) {
      res.json('error');
      return res.status(400);
    }
    res.json('success');
  });
});

module.exports = router;
