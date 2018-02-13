import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

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
    type: ObjectId,
    index: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Post', schema);
