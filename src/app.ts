import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import authRoutes from './routes/v1/auth';
import amcRoutes from './routes/v1/amc';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/amc', amcRoutes);

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;
