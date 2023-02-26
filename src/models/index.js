// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Stake, Condition } = initSchema(schema);

export {
  Stake,
  Condition
};