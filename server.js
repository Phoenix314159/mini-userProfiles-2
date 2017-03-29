const express = require('express');
const bodyParser = require('body-parser');
const data = require('./data');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js');
const app = express();
let corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret }));
app.use(express.static(__dirname + '/public'));




app.get('/users', data.getData);

app.listen(3000, () => {
    console.log("listening on port 3000");
});

