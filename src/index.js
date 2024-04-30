import express from 'express';
import { connectDatabase } from './database/db.js';
import cors from 'cors'
import routes from './routes.js';

const app = express();
const port = 3004

app.use(cors());
app.use(express.json())
app.use(routes)

connectDatabase().then(() => {
    app.listen(port, () => console.log("🚀 server and DataBase running in port:", port))

}).catch((e) => console.log(e))

