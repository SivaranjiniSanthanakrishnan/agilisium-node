const express = require("express");
const mongo = require('./shared/connect');
const productRouter = require('./routes/products');
const registerRouter = require('./routes/register');
const authorizeModule = require('./modules/authorize');
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
dotenv.config();
mongo.connect();

app.use('/register', registerRouter); 
app.use(authorizeModule.AuthenticateUser);
app.use('/product', productRouter);

app.listen(process.env.PORT);

// localhost:3001/product/get
// npm i dotenv