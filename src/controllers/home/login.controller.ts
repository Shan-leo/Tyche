import {errResponse} from "../../helpers/controller.helper";
import pool from "../../database/knexfile";

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const generateToken = (data: any) => {
    return jwt.sign(data, process.env.TOKEN_SECRET, {expiresIn: '12h'});
};
const login = async (req: any, res: any) => {

    if (String(req.body.username) === '' || String(req.body.password) === '') {
        errResponse(res, 'Username or password is empty.', 400);
    }

    try {
        const data = pool.query('SELECT * FROM product', (err: any, res: any) => {
            if (err) {
                console.log(err);
                res.status(500).json({message: 'error'})
            } else {
                console.log(res.rows);
            }
        });

        if (data) {
            bcrypt.compare(req.body.password, data.password, (err: any, result: any) => {
                    if (result) {
                        res.status(200).send({
                            message: 'Login success',
                            token: generateToken({id: data.id, username: data.username}),
                        });
                    } else {
                        errResponse(res, 'Username or password is wrong.', 400);

                    }
                }
            );

        } else {
            errResponse(res, 'Username or password is wrong.', 400);
        }

    } catch (e) {
        errResponse(res, e, 500);
    }
};