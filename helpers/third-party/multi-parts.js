/* eslint-disable no-useless-escape */
import multer, { diskStorage } from 'multer';
import { extname } from 'path';

export default function uploadFiles(folder) {
  const Storage = diskStorage({
    destination: (req, file, cb) => {
      cb(null, folder);
    },

    filename: (req, file, cb) => {
      const fileNameCheck = file.originalname.replace(
        /[-&\/\\#.,+()$~%'":*?<>{} ]/g,
        '',
      );
      cb(null, `${fileNameCheck}-${Date.now()}${extname(file.originalname)}`);
    },
  });

  return multer({ storage: Storage });
}
