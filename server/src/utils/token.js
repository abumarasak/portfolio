const jsonwebtoken = require("jsonwebtoken");
const jwtCheckExpiration = require("jwt-check-expiration");

const generateAccessToken = (payload) => {
  const token = jsonwebtoken.sign(
    payload,
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "1h",
    }
  );
  return token;
};

const generateRefreshToken = (payload) => {
  const token = jsonwebtoken.sign(
    payload,
    process.env.REFRESH_TOKEN_SECRET_KEY
  );
  return token;
};

const verifyToken = (token) => {
  const isExpired = jwtCheckExpiration.isJwtExpired(token);
  if (isExpired) {
    return "expired";
  }
  const decoded = jsonwebtoken.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET_KEY
  );
  return decoded;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
