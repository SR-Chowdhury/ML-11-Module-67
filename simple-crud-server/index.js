const express = require('express');
const {
    MongoClient,
    ServerApiVersion
} = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
const cors = require('cors');
app.use(cors());
app.use(express.json());


// Add your connection string into your application code
const uri = "mongodb+srv://chowdhuryshihan93:KbeEeiQfclYZtYly@cluster0.hcsitps.mongodb.net/?retryWrites=true&w=majority";

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
        // Send a ping to confirm a successful connection
        await client.db("admin").command({
            ping: 1
        });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => res.send('Bismillahir Rahmanir Rahim. => ML-11-Module-67'));

app.listen(port, () => console.log(`Server is running from port: ${port}`));