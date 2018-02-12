import { Post } from '../../db';

export default async () => Post.find().lean().exec();
