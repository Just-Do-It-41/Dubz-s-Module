const express = require('express');

const app = express();
const PORT = 3003;
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '..', '/client', 'dist')));

app.use('/api/', router);

app.listen(PORT, () => {
  console.log('listening at localhost:' + PORT + "!");
});
