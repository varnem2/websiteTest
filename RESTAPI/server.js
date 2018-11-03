const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 8000;

require('./app/routes')
app.listen(port, () => {
    console.log('We are live on port ' + port);
});