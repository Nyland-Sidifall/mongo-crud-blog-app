import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGODBURI);
    //console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
