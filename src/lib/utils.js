import mongoose from "mongoose";

const connection = {};

export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }

    console.log(process.env.MONGODB_URI);

    // Use useNewUrlParser and useUnifiedTopology for better compatibility
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    // Close the connection if an error occurs during connection
    if (mongoose.connection) {
      mongoose.connection.close();
    }

    throw new Error(error);
  }
};
