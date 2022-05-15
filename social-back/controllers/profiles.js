import Profile from "../models/profile.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// Navbar buttoni

export const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();

    console.log(profiles);

    res.status(200).json(profiles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createProfile = async (req, res) => {
  const profile = req.body;
 
  const newProfile = new Profile(profile);

  try {
    await newProfile.save();

    res.status(201).json(newProfile);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const signin = async(req, res) => {
  const {email, password} = req.body;

  try {
    const existingUser = await User.findOne({email});

    if(!existingUser) return res.status(404).json({message: "User doesn't exist"});

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    
    if(!isPasswordCorrect) return res.status(400).json({message: "Invalid password"});
    
    const token = jwt.sign({email:existingUser.email, id: existingUser._id}, 'test',{expiresIn: "1h"});
    res.status(200).json({result: existingUser,token});
  } catch(error){
    res.status(500).json({message: 'Something went wrong'});
  }
}

export const signup = async(req, res) =>{
  const {email, password, username} = req.body;

    try{
      const existingUser = await User.findOne({email});
      if(existingUser) return res.status(400).json({message: "User already exist"});

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create({email, password: hashedPassword, username});
      const token = jwt.sign({email:result.email, id: result._id}, 'test',{expiresIn: "1h"});
      res.status(200).json({result: result,token});

    }catch(error){
      res.status(500).json({message: 'Something went wrong'});

    }
}