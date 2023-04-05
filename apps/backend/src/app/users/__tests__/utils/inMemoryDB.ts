import { readFileSync, writeFileSync } from 'fs';

export const getDB = async () => {
  const data = await readFileSync('DB.json');
  return JSON.parse(data.toString());
};

export const restoreDB = async () => {
  const data = readFileSync('DB_BACKUP.json');
  const usersDb = JSON.parse(data.toString());

  await writeFileSync('DB.json', JSON.stringify(usersDb), 'utf8');
};
