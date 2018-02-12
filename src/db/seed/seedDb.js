import seedAuthors from './seedAuthors';
import { SEED_DATABASE } from '../../config';

export default async () => {
  if (!SEED_DATABASE) {
    return false;
  }

  await seedAuthors();
};
