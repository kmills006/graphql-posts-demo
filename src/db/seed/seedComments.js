import { lorem } from 'faker';
import sample from 'lodash.sample';
import Author from '../models/Author';
import Comment from '../models/Comment';

export default async (posts) => {
  const authors = await Author.find().lean().exec();

  return Promise.all(posts.map(async ({ _id: postId }) => {
    const { _id: authorId } = sample(authors);

    return Comment.create({
      authorId,
      postId,
      comment: lorem.sentences(2),
    });
  }));
};
