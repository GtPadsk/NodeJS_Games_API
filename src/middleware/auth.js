import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "Bad auth" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        req.body.userEmail = decoded.email;
        req.body.userId = decoded.id;

        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Not authorized" });
    }
}

export default authUser;