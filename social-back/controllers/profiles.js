import ProfileMessage from "../models/profile.js";
import express from 'express';

const router = express.Router();

export const getProfiles = async (req, res) => {
  try {
    const profiles = await ProfileMessage.find();

    console.log(profiles);

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getProfilesByURL = async (req, res) => {
  const { username } = req.query;

  try {
    const profiles = await ProfileMessage.findOne({ username });

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createProfile = async (req, res) => {
  const profile = req.body;
 
  const newProfile = new ProfileMessage(profile);

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export default router;