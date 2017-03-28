const express = require('express');
const bodyParser = require('body-parser');
const middleWare = require('./middleware.js');
const app = express();
const data = require('./data');
const cors = require('cors');

app.use(bodyParser.json());
app.use(middleWare.addHeaders);


app.get('/users', data.getData);

app.listen(3000, () => {
    console.log("listening on port 3000");
});

