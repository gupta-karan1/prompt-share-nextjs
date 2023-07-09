import mongoose from "mongoose";

let isConnected = false; //track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //strict mode for queries. if we don't do this we will get warnings in the console.

  if (isConnected) {
    console.log("MOngoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "shareprompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
