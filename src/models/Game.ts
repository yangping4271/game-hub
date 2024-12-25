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
}

// Mongoose Schema
const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  genre: String,
  platform: String,
  price: Number,
  releaseDate: Date,
}, {
  collection: 'action'  // 指定使用 action collection
});

// 导出 mongoose 模型
const GameModel = mongoose.model('Game', gameSchema);
export default GameModel; 