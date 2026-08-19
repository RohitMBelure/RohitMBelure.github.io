import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ ok: true, database: mongoose.connection.readyState === 1 ? 'connected' : 'not-configured' });
});

app.post('/api/contact', (request, response) => {
  const { name, email, message } = request.body;
  if (!name || !email || !message) {
    return response.status(400).json({ message: 'Name, email, and message are required.' });
  }
  return response.status(200).json({ message: `Thanks, ${name}. Your message is ready to be connected to email storage.` });
});

const start = async () => {
  if (process.env.MONGODB_URI) {
    await mongoose.connect(process.env.MONGODB_URI);
  }
  app.listen(port, () => console.log(`API listening on http://localhost:${port}`));
};

start().catch((error) => {
  console.error('Unable to start API:', error.message);
  process.exit(1);
});
