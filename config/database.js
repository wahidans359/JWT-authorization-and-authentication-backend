const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("DB Connected successfully");
    })
    .catch((err) => {
      console.log("DB CONNECTION ISSUES");
      console.error(err);
      process.exit(1);
    });
};
