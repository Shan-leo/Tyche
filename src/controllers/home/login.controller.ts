import {errResponse} from "../../helpers/controller.helper";
import db from "../../database/db";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const generateToken = (data: any) => {
    return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: '12h'});
};
exports.login = async (req: any, res: any) => {
    res.send('login');
};
