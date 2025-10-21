import express from 'express';
import mbaInIndia from '../model/mba_in_india.js';
export const insertIntoMbaInIndia = async (req, res) => {
  const states = req.body;
  if (!states) {
    return res.status(400).json({ message: "No data provided" });
  }
  if (!Array.isArray(states)) {
    return res.status(400).json({ message: "Data should be an array" });
  }
  try {
    const data = await mbaInIndia.insertMany(states);
    res.status(201).json({ message: "Data inserted successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error inserting data", error: error.message });
  }
}

export const getAllFromMbaInIndia = async (req, res) => {
  try {
    const data = await mbaInIndia.find({});
    res.status(200).json({ message: "Data fetched successfully", data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
}
