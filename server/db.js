import mongoose from "mongoose";
const mongoUri =
  "mongodb+srv://shubhamchhikara03:qsjMHSKpmarX4WZq@cluster0.qcddi6e.mongodb.net/?retryWrites=true&w=majority"; // connection string

const connectToMongo = async () => {
  await mongoose
    .connect(mongoUri)
    .then(() => {
      console.log(" Database connected succesfully");
    })
    .catch((err) => {
      console.error("Db could not connect due to " + err);
    });
};

export default connectToMongo;
