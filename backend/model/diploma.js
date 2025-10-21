import mongoose from 'mongoose';
const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  specialization: { type: String, required: false },
  duration: { type: String, required: false },
  eligibility: { type: String, required: false },
  mode: { type: String, required: false },
  fees: { type: Number, required: false },
}, { _id: false });

const diplomaSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  universityName: { type: String, required: true },

  description: { type: String, required: true },

  accreditation: [{ type: String }],
  awards: [{ type: String }],
  website: { type: String, required: false, default: null },
  images: [{ type: String }],
  courses: [CourseSchema]
}, {
  timestamps: true
});

export const diploma = mongoose.model('diploma', diplomaSchema);

