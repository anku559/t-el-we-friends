import { existsSync, mkdirSync } from 'fs';

export default function checkAndCreateDir(pathArray) {
  pathArray.forEach((uniquePath) => {
    if (!existsSync(uniquePath)) {
      mkdirSync(uniquePath);
    }
  });
}
