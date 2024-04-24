import { graphql } from '@/gql';

export const getProjectsByIds = graphql(`
  query GetProject($projectIds: [String!]) {
    projects(filter: { id: { in: $projectIds } }) {
      name
      applications(filter: { status: { equalTo: APPROVED } }) {
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
          chainId
          amountInUsd
          transactionHash
          donorAddress
          roundId
          blockNumber
          tokenAddress
        }
      }
      metadata
    }
  }
`);
