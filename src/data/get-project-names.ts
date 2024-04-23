import { graphql } from '@/gql';

export const getProjectNames = graphql(`
  query GetProjectNames {
    applications(condition: { status: APPROVED }, filter: { projectId: { isNull: false } }) {
      project {
        chainId
        name
        id
      }
    }
  }
`);
