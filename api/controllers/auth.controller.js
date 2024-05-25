// This file contains functions for user authentication, registration, login, and logout.

// Import necessary modules and dependencies
import User from "../models/user.model.js"; // Importing User model
import createError from "../utils/createError.js"; // Importing error handler utility
import bcrypt from "bcrypt"; // Importing bcrypt for password hashing
import jwt from "jsonwebtoken"; // Importing jsonwebtoken for token generation

// Function to handle user registration
export const register = async (req, res, next) => {
  try {
    // Hash the password using bcrypt
    const hash = bcrypt.hashSync(req.body.password, 5);
    // Create a new user instance with hashed password
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    // Save the new user to the database
    await newUser.save();
    // Send success response
    res.status(201).send("User has been created.");
  } catch (err) {
    // Forward error to the error handling middleware
    next(err);
  }
};

// Function to handle user login
export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    // Hardcoded JWT key
    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      '586ab63d048a1d69a43ba9d1a4c4693a'
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

// Function to handle user logout
export const logout = async (req, res) => {
  // Clear access token cookie
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    // Send success response
    .status(200)
    .send("User has been logged out.");
};
