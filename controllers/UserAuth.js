import UserAuthService from '../services/UserAuth.js';

export default class UserAuthentication {
  static async registerUser(req, res) {
    const response = await UserAuthService.registerUser({
      ...req.body,
      ...req.files,
    });
    res.status(response.code).json(response);
  }
}
