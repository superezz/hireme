import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  password: { type: String, required: true, select: false },
}, { timestamps: true })

UserSchema.methods.comparePassword = function (password) {
  if (!password) return false;
  return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model("User", UserSchema)


export default User;