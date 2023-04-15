import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    sourceId: { type: Types.ObjectId },

    targetId: { type: [Types.ObjectId] },
  },
  {
    versionKey: false,
  },
);

const User = model('user_follower', UserSchema);
export default User;
