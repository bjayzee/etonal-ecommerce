
const mongoose = require("mongoose");



const connectDb = async () => {
  const url = process.env.MONGO_URL;

  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`server connected successfully on port ${process.env.PORT}`);
  } catch (error) {
    console.log(`fail to connect to server ${error}`);
  }
};

module.exports = {
  connectDb
};
