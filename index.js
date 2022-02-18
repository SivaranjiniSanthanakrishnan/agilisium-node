const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongo = require('./shared/connect');
const productRouter = require('./routes/products');
const registerRouter = require('./routes/register');
const authorizeModule = require('./modules/authorize');

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
mongo.connect();

app.use('/register', registerRouter); 
app.use(authorizeModule.AuthenticateUser);
app.use('/product', productRouter);



app.listen(3002);

// localhost:3001/product/get
// npm i dotenv
// CORS: Cross Origin Resource Sharing