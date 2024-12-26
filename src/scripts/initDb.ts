import mongoose from 'mongoose';
import dotenv from 'dotenv';
import GameModel from '../models/Game.js';

// 加载环境变量
dotenv.config();

const games = [
  {
    name: "The Legend of Zelda: Breath of the Wild",
    description: "探索广阔的海拉鲁大陆",
    genre: "动作冒险",
    platform: "Nintendo Switch",
    price: 299,
    releaseDate: new Date("2017-03-03"),
    image: "https://example.com/zelda.jpg"
  },
  {
    name: "Red Dead Redemption 2",
    description: "西部开放世界动作冒险游戏",
    genre: "动作冒险",
    platform: "PS4, Xbox One, PC",
    price: 199,
    releaseDate: new Date("2018-10-26"),
    image: "https://example.com/rdr2.jpg"
  },
  {
    name: "Cyberpunk 2077",
    description: "未来科幻开放世界RPG",
    genre: "角色扮演",
    platform: "PS4, PS5, Xbox One, Xbox Series X/S, PC",
    price: 249,
    releaseDate: new Date("2020-12-10"),
    image: "https://example.com/cyberpunk.jpg"
  }
];

const initDb = async () => {
  try {
    // 连接数据库
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/games';
    console.log('Connecting to MongoDB...');
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // 清空现有数据
    await GameModel.deleteMany({});
    console.log('Cleared existing data');

    // 插入新数据
    const result = await GameModel.insertMany(games);
    console.log(`Inserted ${result.length} games`);

    console.log('Database initialization completed');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    await mongoose.disconnect();
  }
};

// 运行初始化
initDb(); 