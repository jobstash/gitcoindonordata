import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import request from 'graphql-request';

import { GQL_ENDPOINT } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';

export const SEARCH_PROJECTS = gql`
  query SearchProjects($searchTerm: String!) {
    searchProjects(searchTerm: $searchTerm) {
      id
      nodeId
      name
      nonce
      anchorAddress
      chainId
      projectNumber
      registryAddress
      metadataCid
      metadata
      createdByAddress
      createdAtBlock
      updatedAtBlock
      projectType
      tags
    }
  }
`;

export const useSearchProjects = (query?: string) => {
  return useQuery({
    queryKey: queryKeys.searchProjects(query || ''),
    queryFn: () => request(GQL_ENDPOINT, SEARCH_PROJECTS, { searchTerm: query || '' }),
    enabled: !!query && query.length > 0,
  });
};
