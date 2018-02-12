import { lorem } from 'faker';
import Author from '../models/Author';
import Comment from '../models/Comment';
import { getRandomArrayItem } from './helpers';

export default async (posts) => {
  const authors = await Author.find().lean().exec();

  posts.map(({ _id: postId }) => {
    const { _id: authorId } = authors[getRandomArrayItem(authors)];

    return Comment.create({
      authorId,
      postId,
      comment: lorem.sentences(2),
    });
  });
};
