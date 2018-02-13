import { lorem } from 'faker';
import sample from 'lodash.sample';
import times from 'lodash.times';
import Author from '../models/Author';
import Post from '../models/Post';

export default async () => {
  const authors = await Author.find().lean().exec();

  return Promise.all(times(15, async () => {
    const { _id: authorId } = sample(authors);

    return Post.create({
      authorId,
      title: lorem.words(),
      body: lorem.paragraphs(2),
    });
  }));
};
