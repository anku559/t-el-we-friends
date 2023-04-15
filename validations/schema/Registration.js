import Joi from 'joi';

export default Joi.object({
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
    .required()
    .messages({
      'string.base': 'Username should be a type of text.',
      'string.empty': 'Username cannot be an empty field.',
      'string.min': 'Username should have a minimum length of 5.',
      'any.required': 'Username is a required field.',
    }),

  countryCode: Joi.string()
    .regex(/^[+][0-9]*$/)
    .required(),

  phoneNumber: Joi.string()
    .regex(/^[0-9]{10}$/)
    .required(),

  password: Joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    .required()
    .min(8)
    .max(20)
    .error(
      new Error(
        'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length',
      ),
    ),

  repeatPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Password must match',
  }),

  coverImage: Joi.any().required().label('coverImage'),
  profileImage: Joi.any().required().label('profileImage'),
});
