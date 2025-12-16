import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = mongoose.Schema(
  {
     _id: Number,
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      maxlength: 15,
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 10,
      max: 100,
    },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female", "Other"],
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },

    about: {
      type: String,
      trim: true,
      maxlength: 200,
    },

    role: {
    type: String,
    default: 'user',
  },

  status: {
    type: Number,
    
  },

  info: String,
  },
  { versionKey: false }
);

// Apply unique validator plugin
userSchema.plugin(mongooseUniqueValidator);

// Export model
const UserModel = mongoose.model("users_collection", userSchema);

export default UserModel;
