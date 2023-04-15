import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    // Basic Info
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String, enum: ['MALE', 'FEMALE', 'OTHER'] },

    // Auth Credentials
    email: { type: String, unique: true, required: true, trim: true },
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: [/^[0-9a-zA-Z]+$/, 'Please enter letters and numbers only.'],
    },
    countryCode: { type: String },
    phoneNumber: { type: String, unique: true, required: true, trim: true },
    password: { type: String },

    // Images
    coverImage: { type: String },
    profileImage: { type: String },
  },
  {
    versionKey: false,
  },
);

const User = model('user', UserSchema);
export default User;
