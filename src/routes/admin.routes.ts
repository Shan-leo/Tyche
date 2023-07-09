const adminRouter = require('express').Router();

adminRouter.get('/', (req: any, res: any) => {
    res.send('admin');
});

module.exports = adminRouter;