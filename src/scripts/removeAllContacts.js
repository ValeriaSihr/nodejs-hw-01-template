import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2));
  } catch (error) {
    console.error('We got error removing all contacts:', error);
  }
};

removeAllContacts();
