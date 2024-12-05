const asuncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/token");
const tokenSchema = require("../domains/auth/model");

const userMiddleware = asuncHandler(async (req, res, next) => {
  const accessToken = req.headers.authorization;
  if (!accessToken) {
    res.status(401);
    throw new Error("Please login first to access this route");
  }
  if (!accessToken.startsWith("Bearer")) {
    res.status(401);
    throw new Error("You are not authorized to access this route");
  }
  const isValidToken = verifyToken(accessToken.split(" ")[1]);
  if (isValidToken === "expired") {
    res.status(401);
    throw new Error("Your session has expired. Please login again");
  }
  //   Check if the token exists in the database
  const tokenExists = await tokenSchema.findOne({
    accessToken: accessToken.split(" ")[1],
  });
  if (!tokenExists) {
    res.status(401);
    throw new Error("You are not authorized to access this route");
  }
  req.user = isValidToken;
  next();
});

module.exports = userMiddleware;
