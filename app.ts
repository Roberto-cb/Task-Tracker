import express from 'express';
import prisma from './src/lib/prisma.js';

const app = express();
app.use(express.json());

app.get('/health', async (req, res) => {
  try {
    // Esto obliga a Prisma a conectarse
    await prisma.$connect();
    res.json({ 
      status: 'ok', 
      database: 'connected',
      message: 'FocusFlow Backend y Base de Datos ONLINE' 
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'El servidor vive, pero la base de datos no responde',
      details: error
    });
  }
});

export default app;
