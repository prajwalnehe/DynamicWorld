import mongoose from 'mongoose';
const CourseSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
  specialization: { type: String, required: false },
  duration: { type: String, required: false },
  eligibility: { type: String, required: false },
  mode: { type: String, required: false },
  fees: { type: Number, required: false },
}, { _id: false });

const UniversitySchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  universityName: { type: String, required: true },
  location: { type: String, required: true },
  establish: { type: String, required: true },
  description: { type: String, required: true },
  shortDescription: { type: String, required: true },
  accreditation: [{ type: String }],
  awards: [{ type: String }],
  website: { type: String, required: true },
  images: [{ type: String }],
  onlineEducation: [{ type: String }],
  universityRanking: [{ type: String }],
  courses: [CourseSchema]
}, {
  timestamps: true
});

const onlineUniversityV2 = mongoose.model('onlineUniversityV2', UniversitySchema);

export default onlineUniversityV2;
