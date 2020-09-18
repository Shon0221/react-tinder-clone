const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Cards = require("./dbCards");

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares 
app.use(express.json());
app.use(cors());

// DB Config
const connURL = "";
mongoose.connect(connURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send("Hello Word!!!"));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;
    
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/card', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));