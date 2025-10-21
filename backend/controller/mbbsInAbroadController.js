import express from 'express';
import MbbsInAbroad from '../model/mbbsInAbroad.js';
export const insertIntoMbbsInAbroad = async (req, res) => {
  const counties = req.body;
  if (!counties) {
    return res.status(400).json({ message: "No data provided" });
  }
  if (!Array.isArray(counties)) {
    return res.status(400).json({ message: "Data should be an array" });
  }
  try {
    const data = await MbbsInAbroad.insertMany(counties);
    res.status(201).json({ message: "Data inserted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error inserting data", error: error.message });
  }
}

export const getAllFromMbbsInAbroad = async (req, res) => {
  try {
    const data = await MbbsInAbroad.find({});
    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
}
