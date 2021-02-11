import jwt from "jsonwebtoken";

const secret = 'test';

const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(" ")[1];
        const decodedData = jwt.verify(token, secret);
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
