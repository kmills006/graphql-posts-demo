import DataLoader from 'dataloader';
import alignDataloaderValues from 'dataloader-values';

const createDataLoader = (Model, { keyFieldName, hasMany = false }) => (
  new DataLoader(async (keys) => {
    const { collectionName } = Model.collection;

    console.log(`Fetching relational data from ${collectionName}...`);

    const values = await Model.find({
      [keyFieldName]: {
        $in: keys,
      },
    })
      .lean()
      .exec();

    console.log(`${values.length} ${collectionName} fetched!`);

    return alignDataloaderValues({
      keys,
      values,
      getKey: v => v[keyFieldName],
      hasMany,
    });
  }, {
    cacheKeyFn: key => key.toString(),
  })
);

export default createDataLoader;
