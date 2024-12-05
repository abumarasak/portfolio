const nodemailer = require("nodemailer");
const path = require("path");

// Use dynamic import for nodemailer-express-handlebars
(async () => {
  const { default: hbs } = await import("nodemailer-express-handlebars");

  // Set up Nodemailer
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Set up Handlebars options
  const handlebarsOptions = {
    viewEngine: {
      extName: ".hbs",
      partialsDir: path.resolve(__dirname, "../emails"),
      layoutsDir: path.resolve(__dirname, "../emails"),
      defaultLayout: false,
    },
    viewPath: path.resolve(__dirname, "../emails"),
    extName: ".hbs",
  };

  // Configure Nodemailer to use Handlebars
  transporter.use("compile", hbs(handlebarsOptions));

  // Test successful setup
  transporter.verify((error, success) => {
    if (error) {
      console.log("Server is not ready to take messages".bgRed.white);
      console.log(error);
    } else {
      console.log("Server is ready to take messages".green.underline.bold);
    }
  });

  // Send email function
  const sendEmail = async (options) => {
    try {
      const emailSent = await transporter.sendMail(options);
      return emailSent;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  // Export sendEmail function
  module.exports = sendEmail;
})();
