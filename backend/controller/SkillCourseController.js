import { skillCourse } from "../model/skillCoursesUniversities.js";
export const insertIntoSkill = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await skillCourse.insertMany(universities);
    res.status(201).json({
      success: true,
      message: "Universities inserted successfully",
      data: insertedUniversities
    });
  } catch (error) {
    console.error("Error inserting universities:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getAllSkillCourses = async (req, res) => {
  try {
    const response = await skillCourse.find();
    res.status(200).json({
      success: true,
      data: response,
      message: "Universities fetched successfully!"
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch the universites",
      error: error.message

    })
  }
}