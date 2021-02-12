import { GraphQLClient } from 'graphql-request';
import { loadEnv } from '../loadEnv';
import { getSdk } from './subgraph';

const endpoint = loadEnv('SUBGRAPH_ENDPOINT');
console.log(endpoint);

export const gql = getSdk(new GraphQLClient(endpoint));
