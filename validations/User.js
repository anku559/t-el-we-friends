import { join } from 'path';
import { findAndDelete } from '../helpers/core/file-system.js';

import Registration from './schema/Registration.js';

export function UserRegistration(req, res, next) {
  const reqData = { ...req.body, ...req.files };

  const { error } = Registration.validate(reqData);

  if (!error) {
    next();
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
