import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
  authorId: {
    required: true,
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Post', schema);
