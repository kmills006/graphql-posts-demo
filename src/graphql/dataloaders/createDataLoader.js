import DataLoader from 'dataloader';
import alignDataloaderValues from 'dataloader-values';

const createDataLoader = (Model, { keyFieldName, hasMany = false }) => (
  new DataLoader(async (keys) => {
    console.log(`Fetching relational data from ${Model.collection.collectionName}...`);

    const values = await Model.find({
      [keyFieldName]: {
        $in: keys,
      },
    })
      .lean()
      .exec();

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
