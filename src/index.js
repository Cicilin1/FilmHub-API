import express from 'express';

const app = express();
const port = 3004
app.use(express.json())

app.get('/', (req,res) => res.json("Hello world"))


app.listen(port, () => console.log("🚀 server running in port:", port))