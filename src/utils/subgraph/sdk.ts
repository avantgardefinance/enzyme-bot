import { GraphQLClient } from 'graphql-request';
import { getSdk } from './subgraph';

export function gql(endpoint: string) {
  return getSdk(new GraphQLClient(endpoint));
}
