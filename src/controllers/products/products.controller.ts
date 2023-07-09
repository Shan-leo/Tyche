import db from "../../database/db";

exports.getProducts = async (req: any, res: any) => {
    try {
        const products = await db.raw('SELECT * FROM products');
        return res.status(200).send({
            error: false,
            products: products.rows,
        });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: `${err}`,
        });
    }
};


exports.getProduct = async (req: any, res: any) => {
    try {
        const product = await db.raw(`SELECT *
                                      FROM products
                                      WHERE id = ${req.params.id}`);
        return res.status(200).send({
            error: false,
            product: product.rows[0],
        });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: `${err}`,
        });
    }
};

exports.createProduct = async (req: any, res: any) => {
    try {
        const {name, description, price, stock} = req.body;
        const product = await db.raw(`INSERT INTO products(name, description, price, stock)
                                      VALUES ('${name}', '${description}', ${price}, ${stock})`);
        return res.status(200).send({
            error: false,
            message: 'Product created successfully',
        });
    } catch (err) {
        return res.status(500).send({
            error: true,
            message: `${err}`,
        });
    } finally {
        await db.destroy();
    }
};

exports.updateProduct = async (req: any, res: any) => {
    try {
        const {name, description, price, stock} = req.body;
        const product = await db.raw(`UPDATE products
                                      SET name        = '${name}',
                                          description = '${description}',
                                          price       = ${price},
                                          stock       = ${stock}
                                      WHERE id = ${req.params.id}`);
        return res.status(200).send({
            error: false,
            message: 'Product updated successfully',
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

exports.deleteProduct = async (req: any, res: any) => {
    try {
        const product = await db.raw(`DELETE
                                      FROM products
                                      WHERE id = ${req.params.id}`);
        return res.status(200).send({
            error: false,
            message: 'Product deleted successfully',
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


