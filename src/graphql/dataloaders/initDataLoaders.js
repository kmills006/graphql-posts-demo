import createDataLoader from './createDataLoader';
import { Author, Comment, Post } from '../../db';

const initDataLoaders = () => ({
  authorByIdLoader: createDataLoader(Author, { keyFieldName: '_id' }),

  commentsByPostIdLoader: createDataLoader(Comment, { keyFieldName: 'postId', hasMany: true }),

  commentsByAuthorIdLoader: createDataLoader(Comment, { keyFieldName: 'authorId', hasMany: true }),

  postByIdLoader: createDataLoader(Post, { keyFieldName: '_id' }),

  postsByAuthorIdLoader: createDataLoader(Post, { keyFieldName: 'authorId', hasMany: true }),
});

export default initDataLoaders;
