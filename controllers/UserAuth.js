export default class UserAuthentication {
  static registerUser(req, res) {
    res.status(200).json({ body: req.body, files: req.files });
  }
}
