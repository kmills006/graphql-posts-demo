import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Author', schema);
