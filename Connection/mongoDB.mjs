
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config'

//replace your connection string with [process.env.MongoDB_Connection_String]
const uri = process.env.MongoDB_Connection_String

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // your Database name has to be replced with [process.env.DataBase_Name]
    await client.db(process.env.DataBase_Name).command({ ping: 1 });
    console.log("successfully connected to MongoDB!");
  } catch(e) {
    console.log(e)
    // Ensures that the client will close when you finish/error
    await client.close();
    process.exit();
  }
}
run();

process.on('SIGINT',async()=>{
    await client.close();
    process.exit();
});

export const studentsDB = client.db(process.env.DataBase_Name);
