import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("Connecting...")
} catch(e) {
  console.log("Conection error!!")
  console.error(e);
}

let db = conn.db("test");

export default db;