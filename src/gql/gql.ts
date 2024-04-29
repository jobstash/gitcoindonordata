/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetProjectNames {\n    applications(condition: { status: APPROVED }, filter: { projectId: { isNull: false } }) {\n      project {\n        chainId\n        name\n        id\n      }\n    }\n  }\n": types.GetProjectNamesDocument,
    "\n  query GetProject($projectIds: [String!]) {\n    projects(filter: { id: { in: $projectIds } }) {\n      name\n      applications(filter: { status: { equalTo: APPROVED } }) {\n        id\n        totalAmountDonatedInUsd\n        totalDonationsCount\n        uniqueDonorsCount\n        chainId\n        round {\n          id\n          donationsEndTime\n          donationsStartTime\n          roundMetadata\n        }\n        donations {\n          id\n          chainId\n          amountInUsd\n          transactionHash\n          donorAddress\n          round {\n            id\n            roundMetadata\n          }\n          tokenAddress\n          timestamp\n        }\n      }\n      metadata\n    }\n  }\n": types.GetProjectDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProjectNames {\n    applications(condition: { status: APPROVED }, filter: { projectId: { isNull: false } }) {\n      project {\n        chainId\n        name\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetProjectNames {\n    applications(condition: { status: APPROVED }, filter: { projectId: { isNull: false } }) {\n      project {\n        chainId\n        name\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProject($projectIds: [String!]) {\n    projects(filter: { id: { in: $projectIds } }) {\n      name\n      applications(filter: { status: { equalTo: APPROVED } }) {\n        id\n        totalAmountDonatedInUsd\n        totalDonationsCount\n        uniqueDonorsCount\n        chainId\n        round {\n          id\n          donationsEndTime\n          donationsStartTime\n          roundMetadata\n        }\n        donations {\n          id\n          chainId\n          amountInUsd\n          transactionHash\n          donorAddress\n          round {\n            id\n            roundMetadata\n          }\n          tokenAddress\n          timestamp\n        }\n      }\n      metadata\n    }\n  }\n"): (typeof documents)["\n  query GetProject($projectIds: [String!]) {\n    projects(filter: { id: { in: $projectIds } }) {\n      name\n      applications(filter: { status: { equalTo: APPROVED } }) {\n        id\n        totalAmountDonatedInUsd\n        totalDonationsCount\n        uniqueDonorsCount\n        chainId\n        round {\n          id\n          donationsEndTime\n          donationsStartTime\n          roundMetadata\n        }\n        donations {\n          id\n          chainId\n          amountInUsd\n          transactionHash\n          donorAddress\n          round {\n            id\n            roundMetadata\n          }\n          tokenAddress\n          timestamp\n        }\n      }\n      metadata\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;