import express from "express";
import doteenv from 'dotenv';

doteenv.config();

const app = express();

app.use(express.static("."));

app.get("/", (req, ress) => {
    ress.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT, () => {
    console.log(`Aplicação escutando na porta ${process.env.PORT}`)
});
