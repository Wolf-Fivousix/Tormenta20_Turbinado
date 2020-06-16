const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

function generateNewId() {
    const currentIds = Object.keys(creatures);

    return Math.max(...currentIds, currentIds.length) + 1;
}

const creatures = {
    1: {
        id: 1,
        name: "Laura Tumba",
        pv: 666
    },
};

// Fake database.
// Anytime the server restarts (that includes nodemon auto refresh) all data resets.
app.post("/creatures", (request, response) => {
    const { name, pv } = request.body;
    const newId = generateNewId();

    creatures[newId] = {
        id: newId,
        name,
        pv
    }
    
    response.json(creatures[newId]);
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Tormenta 20 Turbinado rodando na porta ${port}`));