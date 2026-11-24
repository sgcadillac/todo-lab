import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Todo API is running' });
});

app.listen(3000, () => {
    console.log('Backend listening on port 3000');
});
