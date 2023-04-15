import Joi from 'joi';

const userValidationObject = Joi.object({
  firstName: Joi.string().min(3).max(30),
  lastName: Joi.string().min(3).max(30),
  gender: Joi.string().valid('MALE', 'FEMALE', 'OTHER').required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),

  username: Joi.string()
    .regex(/^[a-zA-Z0-9_]*$/)
    .min(5)
    .max(30)
    .required(),

  phoneNumber: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),

  coverImage: Joi.binary().encoding('base64').required().label('coverImage'),
  profileImage: Joi.binary()
    .encoding('base64')
    .required()
    .label('profileImage'),
});

export function UserRegistration(req, res, next) {
  const reqData = { ...req.body, ...req.files };

  const { error } = userValidationObject.validate(reqData);

  if (!error) {
    next();
  } else {
    res.status(400).send({
      code: 400,
      status: false,
      info: 'Bad Request',
      message: error.message,
    });
  }
}

export function UserLogin(req, res, next) {
  const { error } = userValidationObject.validate(req.body);

  if (!error) {
    next();
  } else {
    res.status(400).send({
      code: 400,
      status: false,
      info: 'Bad Request',
      message: error.message,
    });
  }
}
