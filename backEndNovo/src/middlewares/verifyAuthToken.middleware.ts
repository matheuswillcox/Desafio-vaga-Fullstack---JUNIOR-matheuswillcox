import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const verifyAuthTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Missing Authorization Token." });
  }
  token = token.split(" ")[1];

  jwt.verify(token, "SECRET_KEY", (error, decoded: any) => {
    if (error) {
      return res.status(401).json({ message: "Invalid Token." });
    }

    req.userId = decoded.id;
    req.name = decoded.name;
    req.created = decoded.created;

    return next();
  });
};

export default verifyAuthTokenMiddleware;
