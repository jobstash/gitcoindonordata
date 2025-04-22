import { graphql } from '@/gql';

export const getProjectsByIds = graphql(`
  query GetProject($projectIds: [String!]) {
    projects(where: {id: {_in: $projectIds}}) {
      name
      applications(where: {status: {_eq: APPROVED}}) {
        id
        totalAmountDonatedInUsd
        totalDonationsCount
        uniqueDonorsCount
        chainId
        round {
          id
          donationsEndTime
          donationsStartTime
          roundMetadata
        }
        donations {
          id
          chainId
          amountInUsd
          transactionHash
          donorAddress
          round {
            id
            roundMetadata
          }
          tokenAddress
          timestamp
        }
      }
      metadata
    }
  }
`);
