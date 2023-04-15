import { join } from 'path';
import { hashAndSalt } from '../helpers/third-party/bcryptjs.js';
import User from '../schema/User.js';
import { moveFile, findAndDelete } from '../helpers/core/file-system.js';

export default class UserAuthService {
  static async registerUser(reqData) {
    let response;

    try {
      const findUser = await User.findOne({
        $or: [
          { email: reqData.email },
          { username: reqData.username },
          { phoneNumber: reqData.phoneNumber },
        ],
      });

      if (!findUser) {
        const { hash } = await hashAndSalt(reqData.password, 10);

        moveFile(
          `${reqData?.coverImage[0].destination}/${reqData?.coverImage[0].filename}`,
          `/uploads/image-cover/${reqData?.coverImage[0].filename}`,
        );

        moveFile(
          `${reqData?.profileImage[0].destination}/${reqData?.profileImage[0].filename}`,
          `/uploads/image-profile/${reqData?.profileImage[0].filename}`,
        );

        await User.create({
          ...reqData,
          password: hash,
          coverImage: join('image-cover', reqData?.coverImage[0].filename),
          profileImage: join(
            'image-profile',
            reqData?.profileImage[0].filename,
          ),
        });
        response = {
          code: 201,
          message: 'Registration Successful.',
        };
      } else {
        if (reqData?.coverImage) {
          findAndDelete(
            join(
              reqData?.coverImage[0].destination,
              reqData?.coverImage[0].filename,
            ),
          );
        }

        if (reqData?.profileImage) {
          findAndDelete(
            join(
              reqData?.profileImage[0].destination,
              reqData?.profileImage[0].filename,
            ),
          );
        }

        response = { code: 409, message: 'User already exists.' };
      }
    } catch (error) {
      response = {
        code: 500,
        info: 'Internal Server Error',
        message: error.message,
      };
    }

    return response;
  }
}
