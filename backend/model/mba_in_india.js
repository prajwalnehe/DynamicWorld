import mongoose from 'mongoose';
const mbaInIndiaSchema = new mongoose.Schema({
  state: {
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

const mbaInIndia = mongoose.model('mbaInIndia', mbaInIndiaSchema);
export default mbaInIndia;