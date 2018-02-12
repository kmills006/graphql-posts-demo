import mongoose from 'mongoose';
import { MONGODB_URI } from '../config';

mongoose.Promise = global.Promise;

export default async () => mongoose.connect(MONGODB_URI);
