import seedAuthors from './seedAuthors';
import seedPosts from './seedPosts';
import seedComments from './seedComments';
import { SEED_DATABASE } from '../../config';

export default async () => {
  if (!SEED_DATABASE) {
    return false;
  }

  await seedAuthors();

  const posts = await seedPosts();

  await seedComments(posts);
};
