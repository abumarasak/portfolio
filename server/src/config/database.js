const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`MongoDB connected successfully`.cyan.underline.bold);
  } catch (err) {
    console.error(
      `Error connecting to the database: ${err.message}`.cyan.underline.bold
    );
    process.exit(1);
  }
};

module.exports = connect;
