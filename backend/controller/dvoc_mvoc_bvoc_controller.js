import { bvoc } from "../model/bvoc.js";
import { diploma } from "../model/diploma.js";
import { dvoc } from "../model/dvoc.js";
import { mvoc } from "../model/mvoc.js";

export const insertIntoDvoc = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await dvoc.insertMany(universities);
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
export const getAllFromDvoc = async (req, res) => {
  try {
    const response = await dvoc.find();
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


export const insertIntoBvoc = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await bvoc.insertMany(universities);
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
export const getAllFromBvoc = async (req, res) => {
  try {
    const response = await bvoc.find();
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

 
export const insertIntoMvoc = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await mvoc.insertMany(universities);
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
export const getAllFromMvoc = async (req, res) => {
  try {
    const response = await mvoc.find();
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

export const insertIntoDiploma = async (req, res) => {
  try {
    const universities = req.body;
    if (!Array.isArray(universities) || universities.length === 0) {
      return res.status(400).json({ message: "Please provide an array of universities." });
    }
    const insertedUniversities = await diploma.insertMany(universities);
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
export const getAllFromDiploma = async (req, res) => {
  try {
    const response = await diploma.find();
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