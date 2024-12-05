const routes = require("express").Router();

// Auth Routes
const authRoutes = require("./domains/auth");
routes.use("/auth", authRoutes);

module.exports = routes;
