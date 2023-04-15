import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema(
  {
    userId: { type: Types.ObjectId },

    /*
    From Collections
      - Friends (UserID)    - REQUEST
      - Followers (UserID)  - FOLLOW
      - Posts (PostID)      - 'LIKE', 'DISLIKE'
      - Comments (PostID)   - COMMENT
    */
    notificationSourceId: { type: Types.ObjectId },

    type: {
      type: String,
      enum: ['REQUEST', 'FOLLOW', 'LIKE', 'DISLIKE', 'COMMENT'],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const User = model('notification', UserSchema);
export default User;
