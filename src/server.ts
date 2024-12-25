import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import GameModel from './models/Game.js';

const app = express();

// 连接数据库
connectDB();

// 中间件
app.use(cors());
app.use(express.json());

// 路由
app.get('/api/games', async (req, res) => {
  console.log('Fetching games');
  try {
    const games = await GameModel.find();
    console.log('Games fetched:', games);
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 