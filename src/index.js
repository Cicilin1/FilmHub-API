import express from 'express';
import { connectDatabase } from './database/db.js';

const app = express();
const port = 3004
app.use(express.json())

app.get('/', (req, res) => res.json("Hello world"))

connectDatabase().then(() => {
    app.listen(port, () => console.log("🚀 server and DataBase running in port:", port))

}).catch((e) => console.log(e))

