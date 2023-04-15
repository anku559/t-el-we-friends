import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    userId: { type: Types.ObjectId },
    likes: { type: Number, default: 0 },
    dislikes: { type: Number, default: 0 },
  },
  {
    versionKey: false,
  },
);

const User = model('post', UserSchema);
export default User;
