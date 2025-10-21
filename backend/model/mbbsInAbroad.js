import mongoose from 'mongoose';
const mbbsInAbroadSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  universities: [
    {
      universityName: {
        type: String,
        required: true,
      },

      city: {
        type: String,
      }
    }
  ]
});

const MbbsInAbroad = mongoose.model('MbbsInAbroad', mbbsInAbroadSchema);
export default MbbsInAbroad;