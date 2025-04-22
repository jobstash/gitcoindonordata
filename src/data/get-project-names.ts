import { graphql } from '@/gql';

export const getProjectNames = graphql(`
  query GetProjectNames($offset: Int!) {
    applications(where: {status: {_eq: "APPROVED"}, projectId: {_isNull: false}}, limit: 200, orderBy: {project: {name: DESC}}, offset: $offset) {
      project {
        chainId
        name
        id
      }
    }
  }
`);
