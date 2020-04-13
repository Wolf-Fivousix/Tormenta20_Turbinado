const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", (request, response) => response.send("Tudo eh Lefeu!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Tormenta 20 Turbinado rodando na porta ${port}`));