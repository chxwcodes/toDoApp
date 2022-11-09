import mongoose, { connect } from "mongoose";

//connection obj
const connection =  {};

export default async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connect.isConnected = db.connections[0].readyState;

  console.log(connection.isConnected);
}