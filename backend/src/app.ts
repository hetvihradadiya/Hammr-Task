import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import healthRouter from './routes/health.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1/health', healthRouter);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Hammr API is running 🚀',
  });
});

export default app;
