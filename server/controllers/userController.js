




//controller for user registeration
// POST: /api/user/register
import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Resume from "../models/Resume.js";


const generateToken = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' })

  return token
}

export const registerUser = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' })
    }

    if (typeof password !== 'string' || password.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters long' })
    }

    email = email.toLowerCase().trim();

    //check if user already exists
    const user = await User.findOne({ email })
    if (user) {
      return res.status(400).json({ message: 'User already exist' })
    }


    // create new user
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    })

    // return success message
    const token = generateToken(newUser._id)

    newUser.password = undefined;

    return res.status(201).json({
      message: 'User created successfully',
      token,
      user: newUser
    });

  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}


//controller for user login
// POST: /api/user/login

export const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!email || !password || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    email = email.toLowerCase().trim();

    // check if user exists, explicitly selecting password since it is excluded by default
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(400).json({
        message: 'Invalid email or password'
      });
    }

    // check if password is correct
    if (!user.comparePassword(password)) {
      return res.status(400).json({
        message: 'Invalid email or password'
      });
    }

    // return success message
    const token = generateToken(user._id);

    user.password = undefined;

    return res.status(200).json({
      message: 'User login successfully',
      token,
      user
    });

  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}


// controller for getting user by id
// GET: /api/users/data

export const getUserById = async (req, res) => {
  try {

    const userId = req.userId;

    // check if user exists
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    // return user
    user.password = undefined;

    return res.status(200).json({ user });

  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}



// controller for getting user resumes
// GET: /api/users/resumes

export const getUserResumes = async (req, res) => {
  try {

    const userId = req.userId;

    // return user resumes
    const resumes = await Resume.find({ userId });

    return res.status(200).json({ resumes });

  } catch (error) {
    return res.status(400).json({
      message: error.message
    });
  }
}