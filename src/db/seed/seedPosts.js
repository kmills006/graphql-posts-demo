import { lorem } from 'faker';
import times from 'lodash.times';
import Author from '../models/Author';
import Post from '../models/Post';
import { getRandomArrayItem } from './helpers';

export default async () => {
  const authors = await Author.find().lean().exec();

  return Promise.all(times(15, () => {
    const { _id: authorId } = authors[getRandomArrayItem(authors)];

    return Post.create({
      authorId,
      title: lorem.words(),
      body: lorem.paragraphs(3),
    });
  }));
};
