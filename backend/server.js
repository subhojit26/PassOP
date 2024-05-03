const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv=require('dotenv')
const bodyParser = require('body-parser');
dotenv.config()
const cors = require('cors');

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'passop';
const app = express();

const port = 3000;
app.use(bodyParser.json()); 
client.connect();
app.use(cors());


app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const Collection = db.collection('passwords');
    const findResult = await Collection.find({}).toArray();
    res.json(findResult);
    }
);
app.post('/', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const Collection = db.collection('passwords');
    const findResult = await Collection.insertOne(password);
    res.send({success:true, result:findResult});
    }
);

// delete password

app.delete('/:id', async (req, res) => {
    const password = req.body;
    const db = client.db(dbName);
    const Collection = db.collection('passwords');
    const findResult = await Collection.deleteOne(password);
    res.send({success:true, result:findResult});
    }
);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);