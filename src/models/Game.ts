import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
  name: String,
  description: String,
  genre: String,
  platform: String,
  price: Number,
  releaseDate: Date,
}, {
  collection: 'action'  // 指定使用 action collection
});

const Game = mongoose.model('Game', gameSchema);
export default Game; 