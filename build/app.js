"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const index_1 = __importDefault(require("./database/index"));
index_1.default.query('SELECT * FROM product', (err, res) => {
    if (err) {
        console.log(err);
        // res.status(500).json({message: 'error'})
    }
    else {
        console.log(res.rows);
    }
});
console.log('************8', index_1.default);
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});
app.post("/", (req, res) => {
    res.status(200).json({ message: `success` });
});
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
