import { Author, Comment, Post } from '../../db';

export default {
  authors: async () => Author.find().lean().exec(),

  comments: async () => Comment.find().lean().exec(),

  posts: async () => Post.find().lean().exec(),
};
