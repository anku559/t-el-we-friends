import mongoose from 'mongoose';
import ENV from '../variables.js';

const { DB_HOST, DB_PORT, DB_NAME, PORT } = ENV;

const URL = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectDB = async () => {
  try {
    mongoose.set({ strictQuery: false });

    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    return `Connected\nPORT: ${PORT}\nDB: ${DB_NAME}`;
  } catch (err) {
    return err;
  }
};

connectDB()
  .then((connectionString) => {
    console.log(connectionString);
  })
  .catch((err) => {
    console.log('Failed to connect to MongoDB', err);
  });
