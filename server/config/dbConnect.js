import mongoose from 'mongoose';

async function db() {
  try {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
  } catch(error) {
    console.log(error);
  }

  return mongoose.connection;
}

export default db;