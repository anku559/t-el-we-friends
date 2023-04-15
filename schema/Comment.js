import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    postId: { type: Types.ObjectId },
    content: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = model('comment', UserSchema);
export default User;
