import mongoose from "mongoose";

beforeAll(async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    // mongo = await MongoMemoryServer.create();
    // const mongoUri = mongo.getUri();

    // await mongoose.connect(mongoUri);
});

beforeEach(async () => {
    // const collections = await mongoose.connection.db.collections();
    // for (let collection of collections) {
    //     await collection.deleteMany({});
    // }
});

afterAll(async () => {
    // await mongo.stop();
    // await mongoose.connection.close();
    await mongoose.disconnect();
});
