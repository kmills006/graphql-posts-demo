import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  postId: {
    required: true,
    type: String,
  },
  authorId: {
    required: true,
    type: String,
  },
  comment: {
    required: true,
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Comment', schema);
