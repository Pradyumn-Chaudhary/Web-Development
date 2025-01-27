import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(bodyParser.json())

// To restrict to a specific origin
// app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.status(200).json({ message: 'Data received', data: req.body });
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
