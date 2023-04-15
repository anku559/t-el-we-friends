import { existsSync, mkdirSync, unlinkSync, renameSync } from 'fs';
import { join, resolve } from 'path';

const dirname = resolve();

export function checkAndCreateDir(pathArray) {
  pathArray.forEach((uniquePath) => {
    if (!existsSync(uniquePath)) {
      mkdirSync(uniquePath);
    }
  });
}

export function findAndDelete(dirPath) {
  let response;
  const filePath = join(dirname, dirPath);

  if (existsSync(filePath)) {
    unlinkSync(filePath);
    response = true;
  } else {
    response = true;
  }
  return response;
}

export function moveFile(oldPath, newPath) {
  const dirOldPath = join(dirname, oldPath);
  const dirNewPath = join(dirname, newPath);

  renameSync(dirOldPath, dirNewPath);

  return dirNewPath;
}
