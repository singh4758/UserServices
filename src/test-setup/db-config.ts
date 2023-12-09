
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod: MongoMemoryServer;

//in-memory db for unit test
export const connect = async () => {
    mongod = await MongoMemoryServer.create();
    const uri = await mongod.getUri();
    await mongoose.connect(uri);
};

//works perfectly for unit test in-memory db
export const closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
};


//Remove all the data for all db collections.
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
  }
};
