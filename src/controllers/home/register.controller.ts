import db from "../../database/db";

const bcrypt = require('bcrypt');

exports.customer = async (req: any, res: any) => {

    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
        const user = await db.raw(`INSERT INTO users (name, email, password, role_id)
                                   VALUES ('${name}', '${email}', '${hash}', 2)`);
        return res.status(200).send({
            error: false,
            message: 'User created successfully',
        });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: `${err}`,
        });
    } finally {
        await db.destroy();
    }
}

exports.admin = async (req: any, res: any) => {

    const {name, email, password} = req.body;
    const hash = bcrypt.hashSync(password, 10);
    try {
        const user = await db.raw(`INSERT INTO users (name, email, password, role_id)
                                   VALUES ('${name}', '${email}', '${hash}', 1)`);
        return res.status(200).send({
            error: false,
            message: 'User created successfully',
        });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: `${err}`,
        });
    } finally {
        await db.destroy();
    }
}