import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import GameModel from './models/Game.js';

// 加载环境变量
dotenv.config();

// 验证环境变量
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

const app = express();

// 中间件
app.use(cors());
app.use(express.json());

// 连接数据库
console.log('Initializing database connection...');
connectDB().catch(err => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});

// 路由
app.get('/api/games', async (req, res) => {
  console.log('Fetching games from database...');
  try {
    const games = await GameModel.find();
    console.log('Games found in database:', games.length);
    if (games.length === 0) {
      console.log('No games found in database');
    } else {
      console.log('First game:', games[0]);
    }
    res.json(games);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// 获取所有独特的游戏类型
app.get('/api/genres', async (req, res) => {
  console.log('Fetching genres from database...');
  try {
    const genres = await GameModel.distinct('genre');
    console.log('Genres found:', genres);
    res.json(genres.filter(genre => genre)); // 过滤掉null和undefined值
  } catch (error) {
    console.error('Error fetching genres:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('MongoDB URI:', process.env.MONGODB_URI?.replace(/\/\/[^:]+:[^@]+@/, '//<credentials>@'));
}); 