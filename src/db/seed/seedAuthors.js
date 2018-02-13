import { name } from 'faker';
import times from 'lodash.times';
import Author from '../models/Author';

export default async () => (
  Promise.all(times(50, async () => (
    Author.create({
      firstName: name.firstName(),
      lastName: name.lastName(),
    })
  )))
);
