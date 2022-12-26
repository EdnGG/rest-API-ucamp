require("dotenv").config();
const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// CONNECT TO MONGODB
const URI_MONGODB = process.env.URI_MONGODB;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbConnection = async () => {
  try {
    await mongoose.connect(URI_MONGODB, OPTIONS);
    console.log(`\x1b[34m ***************************************** \x1b[0m`);
    console.log(`\x1b[34m ** SUCCESSFULLY CONNECT TO MONGODB ** \x1b[0m`);
    console.log(`\x1b[34m ***************************************** \x1b[0m`);
  } catch (err) {
    console.log(`\x1b[31m ************************** \x1b[0m`);
    console.log(
      `\x1b[31m ** ERROR CONNECTING TO MONGODB ${err.message} **\x1b[0m`
    );
    console.log(`\x1b[31m ************************** \x1b[0m`);
  }
};

module.exports = dbConnection;
