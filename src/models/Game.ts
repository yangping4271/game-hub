import mongoose from 'mongoose';

// Game 接口定义
export interface Game {
  _id: string;
  name: string;
  description?: string;
  genre?: string;
  platform?: string;
  price?: number;
  releaseDate?: Date;
  image?: string;
}

// Mongoose Schema
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  genre: String,
  platform: String,
  price: Number,
  releaseDate: Date,
  image: String,
}, {
  collection: 'games'  // 修改为更通用的collection名称
});

// 导出 mongoose 模型
const GameModel = mongoose.model('Game', gameSchema);
export default GameModel; 