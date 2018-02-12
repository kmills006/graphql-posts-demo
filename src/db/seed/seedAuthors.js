import { name } from 'faker';
import times from 'lodash.times';
import Author from '../models/Author';

export default () => (
  Promise.all(times(50, () => (
    Author.create({
      firstName: name.firstName(),
      lastName: name.lastName(),
    })
  )))
);
