const asuncHandler = require("express-async-handler");
const userSchema = require("../user/model");
const tokenSchema = require("./model");
const { comparePassword, hashPassword } = require("../../utils/bcrypt");
const checkEmail = require("../../utils/checkEmail");
const checkPassword = require("../../utils/checkPassword");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../../utils/token");
// @desc:   Register a new user
// @route:  POST /api/v1/auth/register
// @access: Public
const register = asuncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Check if user has all the required fields
  if (
    !name ||
    !email ||
    !password ||
    password.trim() === "" ||
    email.trim() === "" ||
    name.trim() === ""
  ) {
    res.status(400);
    throw new Error("Please provide all fields");
  }

  // Check if email is valid
  if (!checkEmail(email)) {
    res.status(400);
    throw new Error("Please provide a valid email");
  }

  // Check if password is valid
  const checkedPassword = checkPassword(password);
  if (checkedPassword !== true) {
    res.status(400);
    throw new Error(checkedPassword);
  }

  // Check if user already exists
  const userExists = await userSchema.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await hashPassword(password);
  if (!hashedPassword) {
    res.status(500);
    throw new Error("Something went wrong while hashing the password");
  }

  // Create new user
  const user = await userSchema.create({
    name,
    email,
    password: hashedPassword,
    isVerified: false,
    role: "user",
  });

  if (!user) {
    res.status(500);
    throw new Error("Something went wrong while creating the user");
  }

  res.status(201).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      isVerified: user.isVerified,
      role: user.role,
    },
    message: "User registered successfully",
  });
});

// @desc:   Login user
// @route:  POST /api/v1/auth/login
// @access: Public
const login = asuncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check if user has all the required fields
  if (!email || !password || password.trim() === "" || email.trim() === "") {
    res.status(400);
    throw new Error("Please provide all fields");
  }
  // Check if user exists
  const user = await userSchema.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Email or password is incorrect");
  }
  // Check if password is correct
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) {
    res.status(400);
    throw new Error("Email or password is incorrect");
  }
  // Create Tokens
  const payload = {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
  const accessToken = await generateAccessToken(payload);
  const refreshToken = await generateRefreshToken(payload);
  if (!accessToken || !refreshToken) {
    res.status(500);
    throw new Error("Something went wrong while creating the token");
  }
  // Save refresh token to the database
  const token = await tokenSchema.create({
    accessToken: accessToken,
    refreshToken: refreshToken,
    user: user._id,
  });
  if (!token) {
    res.status(500);
    throw new Error("Something went wrong while saving the token");
  }
  res.status(200).json({
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    accessToken,
    refreshToken,
  });
});

// @desc:   Logout user
// @route:  GET /api/v1/auth/logout
// @access: Private
const logout = asuncHandler(async (req, res) => {});

module.exports = {
  register,
  login,
  logout,
};
