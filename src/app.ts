"use strict"
import db from "./database/db";

require('dotenv').config();


const express = require("express");
const app = express();
const PORT = process.env.PORT;
const Router = express.Router();


app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

// const data = db.raw('SELECT * FROM product').then((data: any) => {
//     console.log('*********', data.rows);
//
// }).catch((err: any) => console.log(err));


app.use(`/`, require('./routes/home.routes'))
app.use(`/admin`, require('./routes/admin.routes'))
app.use(`/products`, require('./routes/products.routes'))


app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    }
);

export {Router};