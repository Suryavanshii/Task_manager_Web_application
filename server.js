import express from 'express';
import cors from 'cors';
import handler from './api/index.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Middleware to mimic Vercel's req/res adaptation if needed, 
// but for simple express/node standard, passing (req, res) directly works for basic cases.
// However, our api/index.js exports a default function `handler(req, res)`.

app.all('/api/tasks', (req, res) => {
    handler(req, res);
});

app.listen(PORT, () => {
    console.log(`Local API server running at http://localhost:${PORT}`);
});
