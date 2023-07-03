"use strict"
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
import pool from "./database/index";

pool.query('SELECT * FROM product', (err: any, res: any) => {
    if (err) {
        console.log(err);
        // res.status(500).json({message: 'error'})
    } else {
        console.log(res.rows);
    }
});


console.log('************8', pool);

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
