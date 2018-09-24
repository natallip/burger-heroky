const path = require('path');
const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('./mongoose.config');
const cors = require('cors');
const app = express();
const publicDir = 'public';

app
  // .disable('x-powered-by')
  .use(morgan('dev'))
  .use(cors())
  .use(favicon(path.join(process.cwd(), './public', 'favicon.ico')))
  .use(express.static(path.join(process.cwd(), publicDir)))
  .use(bodyParser.json({ type: 'text/plain' }))
  .use(bodyParser.urlencoded({ extended: false }))

module.exports = app;
