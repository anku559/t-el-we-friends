import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    sourceId: { type: Types.ObjectId },

    targetId: { type: Types.ObjectId },

    targetStatus: {
      type: String,
      enum: ['NEW', 'ACTIVE', 'REJECTED'],
      default: 'NEW',
    },

    blockStatus: {
      type: String,
      enum: ['BLOCKED', 'UNBLOCKED'],
      default: 'UNBLOCKED',
    },
  },
  {
    versionKey: false,
  },
);

const User = model('user_friend', UserSchema);
export default User;
