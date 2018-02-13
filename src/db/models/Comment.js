import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const schema = new mongoose.Schema({
  postId: {
    required: true,
    type: ObjectId,
    index: true,
  },
  authorId: {
    required: true,
    type: ObjectId,
    index: true,
  },
  comment: {
    required: true,
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Comment', schema);
