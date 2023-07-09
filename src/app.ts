"use strict"
import db from "./database/db";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

db.select('*').from('product').then((data: any) => {
    console.log(data);
}).catch((err: any) => console.log(err));

db.raw('SELECT * FROM product').then((data: any) => {
        console.log('*********', data.rows);
    }
).catch((err: any) => console.log(err));


app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);


app.get("/", (req: any, res: any) => {
    res.status(200).json({message: "Hello World!"});
});

app.post("/", (req: any, res: any) => {

        res.status(200).json({message: `success`});
    }
);


app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    }
);
