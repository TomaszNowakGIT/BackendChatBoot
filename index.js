const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = process.env.PORT || 5000;



app.listen(PORT)

app.use(bodyParser.json());

require('./routes/dialogFlowRoutes')(app)




