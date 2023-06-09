const express = require('express');
const {
    MongoClient,
    ServerApiVersion,
    ObjectId
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

        const userCollection = client.db("usersDB").collection("users");

        // GET
        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        });

        // CREATE
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log('New User: ', user);

            const result = await userCollection.insertOne(user);
            res.send(result);
        });

        // EDIT / SINGLE VIEW
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = {_id : new ObjectId(id)};
            const result = await userCollection.findOne(query);
            res.send(result);
        });

        // UPDATE
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            console.log(id, user)
            const filter = { _id : new ObjectId(id)};
            const options = { upsert : true };
            const updatedUser = {
                $set: {
                    email: user.email,
                    password: user.password
                }
            }
            const result = await userCollection.updateOne(filter, updatedUser, options);
            res.send(result);
        });

        // DELETE
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            console.log('Delete this ', id);
            const query = {_id : new ObjectId(id)};
            const result = await userCollection.deleteOne(query);
            res.send(result);
        });



        // Send a ping to confirm a successful connection
        await client.db("admin").command({  ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => res.send('Bismillahir Rahmanir Rahim. => ML-11-Module-67'));

app.listen(port, () => console.log(`Server is running from port: ${port}`));