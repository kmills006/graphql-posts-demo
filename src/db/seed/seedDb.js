import seedAuthors from './seedAuthors';
import seedPosts from './seedPosts';
import { SEED_DATABASE } from '../../config';

export default async () => {
  if (!SEED_DATABASE) {
    return false;
  }

  await seedAuthors();
  await seedPosts();
};
