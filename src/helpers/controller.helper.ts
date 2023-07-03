const errResponse = (res: any, err: any, statusCode:any) => {
    return res.status(500).send({
        error: true,
        message: `${err}`,
    });
}

export {errResponse}