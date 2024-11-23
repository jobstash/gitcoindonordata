import request, { gql } from 'graphql-request';

import { getQueryClient } from './get-query-client';

import { GQL_ENDPOINT, STALETIME } from '@/core/constants';
import { queryKeys } from '@/core/query-keys';
import { Project } from '@/gql/graphql';


export const QUERY_PROJECT = gql`
  query Project($chainId: Int!, $projectId: String!) {
    project(chainId: $chainId, id: $projectId) {
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
      applications {
        id
        chainId
        roundId
        projectId
        anchorAddress
        status
        statusSnapshots
        distributionTransaction
        metadataCid
        metadata
        createdByAddress
        createdAtBlock
        statusUpdatedAtBlock
        totalDonationsCount
        totalAmountDonatedInUsd
        uniqueDonorsCount
        tags
        donations {
          donorAddress
        }
        round {
          id
          donationsStartTime
          donationsEndTime
          roundMetadata
        }
      }
    }
  }
`;


export const getProject = async ({ chainId, projectId }: { chainId: number; projectId: string }) => {
  const client = getQueryClient();
  const data = await client.fetchQuery({
    queryKey: queryKeys.getProject(projectId),
    queryFn: () => request(GQL_ENDPOINT, QUERY_PROJECT, { chainId, projectId }),
    staleTime: STALETIME.DEFAULT,
  }) as { project: Project | null };

  if (!data.project) return null;
  return data.project;
};
