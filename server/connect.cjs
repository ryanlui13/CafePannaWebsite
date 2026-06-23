const {MongoClient} = require("mongodb")
require("dotenv").config({path: "./config.env"})

async function main() {
    const db = process.env.MONGO_URI
    const client = new MongoClient(db)

    try {
        await client.connect()

        const database = client.db("cafepannaDB");
        const collections = await database.listCollections().toArray();
        console.log("database collections are:");
        collections.forEach((collection) => console.log(collection.name));
    } catch(e) {
        console.error(e)
    } finally {
        await client.close()
    }
}