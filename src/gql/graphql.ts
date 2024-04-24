/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: { input: any; output: any; }
  /**
   * A signed eight-byte integer. The upper big integer values are greater than the
   * max value for a JavaScript number. Therefore all big integers will be output as
   * strings and not numbers.
   */
  BigInt: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type Application = Node & {
  __typename?: 'Application';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ApplicationsPayout`. */
  applicationsPayoutsByChainIdAndRoundIdAndApplicationId: Array<ApplicationsPayout>;
  canonicalProject?: Maybe<Project>;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  distributionTransaction?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Donation`. */
  donations: Array<Donation>;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Round` that is related to this `Application`. */
  round?: Maybe<Round>;
  roundId: Scalars['String']['output'];
  status?: Maybe<ApplicationStatus>;
  statusSnapshots?: Maybe<Scalars['JSON']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
};


export type ApplicationApplicationsPayoutsByChainIdAndRoundIdAndApplicationIdArgs = {
  condition?: InputMaybe<ApplicationsPayoutCondition>;
  filter?: InputMaybe<ApplicationsPayoutFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
};


export type ApplicationDonationsArgs = {
  condition?: InputMaybe<DonationCondition>;
  filter?: InputMaybe<DonationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
};

/**
 * A condition to be used against `Application` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ApplicationCondition = {
  /** Checks for equality with the object’s `anchorAddress` field. */
  anchorAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `distributionTransaction` field. */
  distributionTransaction?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `metadataCid` field. */
  metadataCid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `status` field. */
  status?: InputMaybe<ApplicationStatus>;
  /** Checks for equality with the object’s `statusSnapshots` field. */
  statusSnapshots?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `statusUpdatedAtBlock` field. */
  statusUpdatedAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `totalAmountDonatedInUsd` field. */
  totalAmountDonatedInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `totalDonationsCount` field. */
  totalDonationsCount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `uniqueDonorsCount` field. */
  uniqueDonorsCount?: InputMaybe<Scalars['Int']['input']>;
};

/** A filter to be used against `Application` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationFilter = {
  /** Filter by the object’s `anchorAddress` field. */
  anchorAddress?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ApplicationFilter>>;
  /** Filter by the object’s `applicationsPayoutsByChainIdAndRoundIdAndApplicationId` relation. */
  applicationsPayoutsByChainIdAndRoundIdAndApplicationId?: InputMaybe<ApplicationToManyApplicationsPayoutFilter>;
  /** Some related `applicationsPayoutsByChainIdAndRoundIdAndApplicationId` exist. */
  applicationsPayoutsByChainIdAndRoundIdAndApplicationIdExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `distributionTransaction` field. */
  distributionTransaction?: InputMaybe<StringFilter>;
  /** Filter by the object’s `donations` relation. */
  donations?: InputMaybe<ApplicationToManyDonationFilter>;
  /** Some related `donations` exist. */
  donationsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `metadataCid` field. */
  metadataCid?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ApplicationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ApplicationFilter>>;
  /** Filter by the object’s `projectId` field. */
  projectId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `round` relation. */
  round?: InputMaybe<RoundFilter>;
  /** Filter by the object’s `roundId` field. */
  roundId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `status` field. */
  status?: InputMaybe<ApplicationStatusFilter>;
  /** Filter by the object’s `statusSnapshots` field. */
  statusSnapshots?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `statusUpdatedAtBlock` field. */
  statusUpdatedAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `totalAmountDonatedInUsd` field. */
  totalAmountDonatedInUsd?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `totalDonationsCount` field. */
  totalDonationsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `uniqueDonorsCount` field. */
  uniqueDonorsCount?: InputMaybe<IntFilter>;
};

export enum ApplicationStatus {
  Approved = 'APPROVED',
  Cancelled = 'CANCELLED',
  InReview = 'IN_REVIEW',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

/** A filter to be used against ApplicationStatus fields. All fields are combined with a logical ‘and.’ */
export type ApplicationStatusFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<ApplicationStatus>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<ApplicationStatus>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<ApplicationStatus>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<ApplicationStatus>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<ApplicationStatus>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<ApplicationStatus>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<ApplicationStatus>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<ApplicationStatus>>;
};

/** A filter to be used against many `ApplicationsPayout` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationToManyApplicationsPayoutFilter = {
  /** Every related `ApplicationsPayout` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ApplicationsPayoutFilter>;
  /** No related `ApplicationsPayout` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ApplicationsPayoutFilter>;
  /** Some related `ApplicationsPayout` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ApplicationsPayoutFilter>;
};

/** A filter to be used against many `Donation` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationToManyDonationFilter = {
  /** Every related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<DonationFilter>;
  /** No related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<DonationFilter>;
  /** Some related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<DonationFilter>;
};

/** Methods to use when ordering `Application`. */
export enum ApplicationsOrderBy {
  AnchorAddressAsc = 'ANCHOR_ADDRESS_ASC',
  AnchorAddressDesc = 'ANCHOR_ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  CreatedByAddressAsc = 'CREATED_BY_ADDRESS_ASC',
  CreatedByAddressDesc = 'CREATED_BY_ADDRESS_DESC',
  DistributionTransactionAsc = 'DISTRIBUTION_TRANSACTION_ASC',
  DistributionTransactionDesc = 'DISTRIBUTION_TRANSACTION_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataCidAsc = 'METADATA_CID_ASC',
  MetadataCidDesc = 'METADATA_CID_DESC',
  MetadataDesc = 'METADATA_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectIdAsc = 'PROJECT_ID_ASC',
  ProjectIdDesc = 'PROJECT_ID_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
  StatusAsc = 'STATUS_ASC',
  StatusDesc = 'STATUS_DESC',
  StatusSnapshotsAsc = 'STATUS_SNAPSHOTS_ASC',
  StatusSnapshotsDesc = 'STATUS_SNAPSHOTS_DESC',
  StatusUpdatedAtBlockAsc = 'STATUS_UPDATED_AT_BLOCK_ASC',
  StatusUpdatedAtBlockDesc = 'STATUS_UPDATED_AT_BLOCK_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TotalAmountDonatedInUsdAsc = 'TOTAL_AMOUNT_DONATED_IN_USD_ASC',
  TotalAmountDonatedInUsdDesc = 'TOTAL_AMOUNT_DONATED_IN_USD_DESC',
  TotalDonationsCountAsc = 'TOTAL_DONATIONS_COUNT_ASC',
  TotalDonationsCountDesc = 'TOTAL_DONATIONS_COUNT_DESC',
  UniqueDonorsCountAsc = 'UNIQUE_DONORS_COUNT_ASC',
  UniqueDonorsCountDesc = 'UNIQUE_DONORS_COUNT_DESC'
}

export type ApplicationsPayout = Node & {
  __typename?: 'ApplicationsPayout';
  amount?: Maybe<Scalars['BigFloat']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['String']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  /** Reads a single `Application` that is related to this `ApplicationsPayout`. */
  chainRoundApplication?: Maybe<Application>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  roundId?: Maybe<Scalars['String']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `ApplicationsPayout` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ApplicationsPayoutCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `amountInRoundMatchToken` field. */
  amountInRoundMatchToken?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `amountInUsd` field. */
  amountInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `ApplicationsPayout` object types. All fields are combined with a logical ‘and.’ */
export type ApplicationsPayoutFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `amountInRoundMatchToken` field. */
  amountInRoundMatchToken?: InputMaybe<StringFilter>;
  /** Filter by the object’s `amountInUsd` field. */
  amountInUsd?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ApplicationsPayoutFilter>>;
  /** Filter by the object’s `applicationId` field. */
  applicationId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `chainRoundApplication` relation. */
  chainRoundApplication?: InputMaybe<ApplicationFilter>;
  /** A related `chainRoundApplication` exists. */
  chainRoundApplicationExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ApplicationsPayoutFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ApplicationsPayoutFilter>>;
  /** Filter by the object’s `roundId` field. */
  roundId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `ApplicationsPayout`. */
export enum ApplicationsPayoutsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AmountInRoundMatchTokenAsc = 'AMOUNT_IN_ROUND_MATCH_TOKEN_ASC',
  AmountInRoundMatchTokenDesc = 'AMOUNT_IN_ROUND_MATCH_TOKEN_DESC',
  AmountInUsdAsc = 'AMOUNT_IN_USD_ASC',
  AmountInUsdDesc = 'AMOUNT_IN_USD_DESC',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
  TokenAddressAsc = 'TOKEN_ADDRESS_ASC',
  TokenAddressDesc = 'TOKEN_ADDRESS_DESC',
  TransactionHashAsc = 'TRANSACTION_HASH_ASC',
  TransactionHashDesc = 'TRANSACTION_HASH_DESC'
}

/** A filter to be used against BigFloat fields. All fields are combined with a logical ‘and.’ */
export type BigFloatFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** A filter to be used against BigInt fields. All fields are combined with a logical ‘and.’ */
export type BigIntFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['BigInt']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['BigInt']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** A filter to be used against Datetime fields. All fields are combined with a logical ‘and.’ */
export type DatetimeFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Datetime']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Datetime']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export type Donation = Node & {
  __typename?: 'Donation';
  amount?: Maybe<Scalars['BigFloat']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['BigFloat']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  /** Reads a single `Application` that is related to this `Donation`. */
  application?: Maybe<Application>;
  applicationId?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  donorAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  recipientAddress?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Round` that is related to this `Donation`. */
  round?: Maybe<Round>;
  roundId?: Maybe<Scalars['String']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `Donation` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DonationCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `amountInRoundMatchToken` field. */
  amountInRoundMatchToken?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `amountInUsd` field. */
  amountInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `applicationId` field. */
  applicationId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `donorAddress` field. */
  donorAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `recipientAddress` field. */
  recipientAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Donation` object types. All fields are combined with a logical ‘and.’ */
export type DonationFilter = {
  /** Filter by the object’s `amount` field. */
  amount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `amountInRoundMatchToken` field. */
  amountInRoundMatchToken?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `amountInUsd` field. */
  amountInUsd?: InputMaybe<FloatFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<DonationFilter>>;
  /** Filter by the object’s `application` relation. */
  application?: InputMaybe<ApplicationFilter>;
  /** A related `application` exists. */
  applicationExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `applicationId` field. */
  applicationId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `donorAddress` field. */
  donorAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Negates the expression. */
  not?: InputMaybe<DonationFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<DonationFilter>>;
  /** Filter by the object’s `projectId` field. */
  projectId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `recipientAddress` field. */
  recipientAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `round` relation. */
  round?: InputMaybe<RoundFilter>;
  /** A related `round` exists. */
  roundExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `roundId` field. */
  roundId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `transactionHash` field. */
  transactionHash?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `Donation`. */
export enum DonationsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  AmountInRoundMatchTokenAsc = 'AMOUNT_IN_ROUND_MATCH_TOKEN_ASC',
  AmountInRoundMatchTokenDesc = 'AMOUNT_IN_ROUND_MATCH_TOKEN_DESC',
  AmountInUsdAsc = 'AMOUNT_IN_USD_ASC',
  AmountInUsdDesc = 'AMOUNT_IN_USD_DESC',
  ApplicationIdAsc = 'APPLICATION_ID_ASC',
  ApplicationIdDesc = 'APPLICATION_ID_DESC',
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  DonorAddressAsc = 'DONOR_ADDRESS_ASC',
  DonorAddressDesc = 'DONOR_ADDRESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectIdAsc = 'PROJECT_ID_ASC',
  ProjectIdDesc = 'PROJECT_ID_DESC',
  RecipientAddressAsc = 'RECIPIENT_ADDRESS_ASC',
  RecipientAddressDesc = 'RECIPIENT_ADDRESS_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC',
  TokenAddressAsc = 'TOKEN_ADDRESS_ASC',
  TokenAddressDesc = 'TOKEN_ADDRESS_DESC',
  TransactionHashAsc = 'TRANSACTION_HASH_ASC',
  TransactionHashDesc = 'TRANSACTION_HASH_DESC'
}

/** A filter to be used against Float fields. All fields are combined with a logical ‘and.’ */
export type FloatFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Float']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Float']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Float']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** A filter to be used against Int fields. All fields are combined with a logical ‘and.’ */
export type IntFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['Int']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['Int']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['Int']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** A filter to be used against JSON fields. All fields are combined with a logical ‘and.’ */
export type JsonFilter = {
  /** Contains the specified JSON. */
  contains?: InputMaybe<Scalars['JSON']['input']>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['JSON']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['JSON']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['JSON']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['JSON']['input']>>;
};

export type LegacyProject = Node & {
  __typename?: 'LegacyProject';
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  v1ProjectId?: Maybe<Scalars['String']['output']>;
  v2ProjectId?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `LegacyProject` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type LegacyProjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `v1ProjectId` field. */
  v1ProjectId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `v2ProjectId` field. */
  v2ProjectId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `LegacyProject` object types. All fields are combined with a logical ‘and.’ */
export type LegacyProjectFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<LegacyProjectFilter>>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<LegacyProjectFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<LegacyProjectFilter>>;
  /** Filter by the object’s `v1ProjectId` field. */
  v1ProjectId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `v2ProjectId` field. */
  v2ProjectId?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `LegacyProject`. */
export enum LegacyProjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  V1ProjectIdAsc = 'V1_PROJECT_ID_ASC',
  V1ProjectIdDesc = 'V1_PROJECT_ID_DESC',
  V2ProjectIdAsc = 'V2_PROJECT_ID_ASC',
  V2ProjectIdDesc = 'V2_PROJECT_ID_DESC'
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
};

export type PendingProjectRole = Node & {
  __typename?: 'PendingProjectRole';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `PendingProjectRole` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PendingProjectRoleCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `PendingProjectRole` object types. All fields are combined with a logical ‘and.’ */
export type PendingProjectRoleFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PendingProjectRoleFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PendingProjectRoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PendingProjectRoleFilter>>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `PendingProjectRole`. */
export enum PendingProjectRolesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC'
}

export type PendingRoundRole = Node & {
  __typename?: 'PendingRoundRole';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/**
 * A condition to be used against `PendingRoundRole` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PendingRoundRoleCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `PendingRoundRole` object types. All fields are combined with a logical ‘and.’ */
export type PendingRoundRoleFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PendingRoundRoleFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PendingRoundRoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PendingRoundRoleFilter>>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `PendingRoundRole`. */
export enum PendingRoundRolesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC'
}

export type Price = Node & {
  __typename?: 'Price';
  blockNumber?: Maybe<Scalars['BigFloat']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  priceInUsd?: Maybe<Scalars['Float']['output']>;
  timestamp?: Maybe<Scalars['Datetime']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
};

/** A condition to be used against `Price` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PriceCondition = {
  /** Checks for equality with the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `priceInUsd` field. */
  priceInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `timestamp` field. */
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `Price` object types. All fields are combined with a logical ‘and.’ */
export type PriceFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<PriceFilter>>;
  /** Filter by the object’s `blockNumber` field. */
  blockNumber?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<PriceFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<PriceFilter>>;
  /** Filter by the object’s `priceInUsd` field. */
  priceInUsd?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `timestamp` field. */
  timestamp?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `tokenAddress` field. */
  tokenAddress?: InputMaybe<StringFilter>;
};

/** Methods to use when ordering `Price`. */
export enum PricesOrderBy {
  BlockNumberAsc = 'BLOCK_NUMBER_ASC',
  BlockNumberDesc = 'BLOCK_NUMBER_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PriceInUsdAsc = 'PRICE_IN_USD_ASC',
  PriceInUsdDesc = 'PRICE_IN_USD_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TimestampAsc = 'TIMESTAMP_ASC',
  TimestampDesc = 'TIMESTAMP_DESC',
  TokenAddressAsc = 'TOKEN_ADDRESS_ASC',
  TokenAddressDesc = 'TOKEN_ADDRESS_DESC'
}

export type Project = Node & {
  __typename?: 'Project';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Application`. */
  applications?: Maybe<Array<Application>>;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  nonce?: Maybe<Scalars['BigFloat']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  projectType?: Maybe<ProjectType>;
  registryAddress?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `ProjectRole`. */
  roles: Array<ProjectRole>;
  /** Reads and enables pagination through a set of `Round`. */
  rounds: Array<Round>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAtBlock?: Maybe<Scalars['BigFloat']['output']>;
};


export type ProjectApplicationsArgs = {
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type ProjectRolesArgs = {
  condition?: InputMaybe<ProjectRoleCondition>;
  filter?: InputMaybe<ProjectRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
};


export type ProjectRoundsArgs = {
  condition?: InputMaybe<RoundCondition>;
  filter?: InputMaybe<RoundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
};

/** A condition to be used against `Project` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProjectCondition = {
  /** Checks for equality with the object’s `anchorAddress` field. */
  anchorAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `metadata` field. */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `metadataCid` field. */
  metadataCid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `nonce` field. */
  nonce?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `projectNumber` field. */
  projectNumber?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `projectType` field. */
  projectType?: InputMaybe<ProjectType>;
  /** Checks for equality with the object’s `registryAddress` field. */
  registryAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `updatedAtBlock` field. */
  updatedAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** A filter to be used against `Project` object types. All fields are combined with a logical ‘and.’ */
export type ProjectFilter = {
  /** Filter by the object’s `anchorAddress` field. */
  anchorAddress?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProjectFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `metadata` field. */
  metadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `metadataCid` field. */
  metadataCid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `name` field. */
  name?: InputMaybe<StringFilter>;
  /** Filter by the object’s `nonce` field. */
  nonce?: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProjectFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProjectFilter>>;
  /** Filter by the object’s `projectNumber` field. */
  projectNumber?: InputMaybe<IntFilter>;
  /** Filter by the object’s `projectType` field. */
  projectType?: InputMaybe<ProjectTypeFilter>;
  /** Filter by the object’s `registryAddress` field. */
  registryAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `roles` relation. */
  roles?: InputMaybe<ProjectToManyProjectRoleFilter>;
  /** Some related `roles` exist. */
  rolesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `rounds` relation. */
  rounds?: InputMaybe<ProjectToManyRoundFilter>;
  /** Some related `rounds` exist. */
  roundsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `updatedAtBlock` field. */
  updatedAtBlock?: InputMaybe<BigFloatFilter>;
};

export type ProjectRole = Node & {
  __typename?: 'ProjectRole';
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Project` that is related to this `ProjectRole`. */
  project?: Maybe<Project>;
  projectId: Scalars['String']['output'];
  role: ProjectRoleName;
};

/**
 * A condition to be used against `ProjectRole` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ProjectRoleCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<ProjectRoleName>;
};

/** A filter to be used against `ProjectRole` object types. All fields are combined with a logical ‘and.’ */
export type ProjectRoleFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<ProjectRoleFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  not?: InputMaybe<ProjectRoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<ProjectRoleFilter>>;
  /** Filter by the object’s `project` relation. */
  project?: InputMaybe<ProjectFilter>;
  /** Filter by the object’s `projectId` field. */
  projectId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<ProjectRoleNameFilter>;
};

export enum ProjectRoleName {
  Member = 'MEMBER',
  Owner = 'OWNER'
}

/** A filter to be used against ProjectRoleName fields. All fields are combined with a logical ‘and.’ */
export type ProjectRoleNameFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<ProjectRoleName>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<ProjectRoleName>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<ProjectRoleName>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<ProjectRoleName>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<ProjectRoleName>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<ProjectRoleName>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<ProjectRoleName>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<ProjectRoleName>>;
};

/** Methods to use when ordering `ProjectRole`. */
export enum ProjectRolesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectIdAsc = 'PROJECT_ID_ASC',
  ProjectIdDesc = 'PROJECT_ID_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC'
}

/** A filter to be used against many `ProjectRole` object types. All fields are combined with a logical ‘and.’ */
export type ProjectToManyProjectRoleFilter = {
  /** Every related `ProjectRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ProjectRoleFilter>;
  /** No related `ProjectRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ProjectRoleFilter>;
  /** Some related `ProjectRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ProjectRoleFilter>;
};

/** A filter to be used against many `Round` object types. All fields are combined with a logical ‘and.’ */
export type ProjectToManyRoundFilter = {
  /** Every related `Round` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RoundFilter>;
  /** No related `Round` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RoundFilter>;
  /** Some related `Round` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RoundFilter>;
};

export enum ProjectType {
  Canonical = 'CANONICAL',
  Linked = 'LINKED'
}

/** A filter to be used against ProjectType fields. All fields are combined with a logical ‘and.’ */
export type ProjectTypeFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<ProjectType>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<ProjectType>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<ProjectType>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<ProjectType>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<ProjectType>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<ProjectType>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<ProjectType>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<ProjectType>>;
};

/** Methods to use when ordering `Project`. */
export enum ProjectsOrderBy {
  AnchorAddressAsc = 'ANCHOR_ADDRESS_ASC',
  AnchorAddressDesc = 'ANCHOR_ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  CreatedByAddressAsc = 'CREATED_BY_ADDRESS_ASC',
  CreatedByAddressDesc = 'CREATED_BY_ADDRESS_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MetadataAsc = 'METADATA_ASC',
  MetadataCidAsc = 'METADATA_CID_ASC',
  MetadataCidDesc = 'METADATA_CID_DESC',
  MetadataDesc = 'METADATA_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  NonceAsc = 'NONCE_ASC',
  NonceDesc = 'NONCE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectNumberAsc = 'PROJECT_NUMBER_ASC',
  ProjectNumberDesc = 'PROJECT_NUMBER_DESC',
  ProjectTypeAsc = 'PROJECT_TYPE_ASC',
  ProjectTypeDesc = 'PROJECT_TYPE_DESC',
  RegistryAddressAsc = 'REGISTRY_ADDRESS_ASC',
  RegistryAddressDesc = 'REGISTRY_ADDRESS_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  UpdatedAtBlockAsc = 'UPDATED_AT_BLOCK_ASC',
  UpdatedAtBlockDesc = 'UPDATED_AT_BLOCK_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  application?: Maybe<Application>;
  /** Reads a single `Application` using its globally unique `ID`. */
  applicationByNodeId?: Maybe<Application>;
  /** Reads a set of `Application`. */
  applications?: Maybe<Array<Application>>;
  applicationsPayout?: Maybe<ApplicationsPayout>;
  /** Reads a single `ApplicationsPayout` using its globally unique `ID`. */
  applicationsPayoutByNodeId?: Maybe<ApplicationsPayout>;
  /** Reads a set of `ApplicationsPayout`. */
  applicationsPayouts?: Maybe<Array<ApplicationsPayout>>;
  donation?: Maybe<Donation>;
  /** Reads a single `Donation` using its globally unique `ID`. */
  donationByNodeId?: Maybe<Donation>;
  /** Reads a set of `Donation`. */
  donations?: Maybe<Array<Donation>>;
  legacyProject?: Maybe<LegacyProject>;
  /** Reads a single `LegacyProject` using its globally unique `ID`. */
  legacyProjectByNodeId?: Maybe<LegacyProject>;
  legacyProjectByV1ProjectId?: Maybe<LegacyProject>;
  legacyProjectByV2ProjectId?: Maybe<LegacyProject>;
  /** Reads a set of `LegacyProject`. */
  legacyProjects?: Maybe<Array<LegacyProject>>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID']['output'];
  pendingProjectRole?: Maybe<PendingProjectRole>;
  /** Reads a single `PendingProjectRole` using its globally unique `ID`. */
  pendingProjectRoleByNodeId?: Maybe<PendingProjectRole>;
  /** Reads a set of `PendingProjectRole`. */
  pendingProjectRoles?: Maybe<Array<PendingProjectRole>>;
  pendingRoundRole?: Maybe<PendingRoundRole>;
  /** Reads a single `PendingRoundRole` using its globally unique `ID`. */
  pendingRoundRoleByNodeId?: Maybe<PendingRoundRole>;
  /** Reads a set of `PendingRoundRole`. */
  pendingRoundRoles?: Maybe<Array<PendingRoundRole>>;
  price?: Maybe<Price>;
  /** Reads a single `Price` using its globally unique `ID`. */
  priceByNodeId?: Maybe<Price>;
  /** Reads a set of `Price`. */
  prices?: Maybe<Array<Price>>;
  project?: Maybe<Project>;
  /** Reads a single `Project` using its globally unique `ID`. */
  projectByNodeId?: Maybe<Project>;
  projectRole?: Maybe<ProjectRole>;
  /** Reads a single `ProjectRole` using its globally unique `ID`. */
  projectRoleByNodeId?: Maybe<ProjectRole>;
  /** Reads a set of `ProjectRole`. */
  projectRoles?: Maybe<Array<ProjectRole>>;
  /** Reads a set of `Project`. */
  projects?: Maybe<Array<Project>>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  round?: Maybe<Round>;
  /** Reads a single `Round` using its globally unique `ID`. */
  roundByNodeId?: Maybe<Round>;
  roundRole?: Maybe<RoundRole>;
  /** Reads a single `RoundRole` using its globally unique `ID`. */
  roundRoleByNodeId?: Maybe<RoundRole>;
  /** Reads a set of `RoundRole`. */
  roundRoles?: Maybe<Array<RoundRole>>;
  /** Reads a set of `Round`. */
  rounds?: Maybe<Array<Round>>;
  subscription?: Maybe<Subscription>;
  /** Reads a single `Subscription` using its globally unique `ID`. */
  subscriptionByNodeId?: Maybe<Subscription>;
  /** Reads a set of `Subscription`. */
  subscriptions?: Maybe<Array<Subscription>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  roundId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationsArgs = {
  condition?: InputMaybe<ApplicationCondition>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationsPayoutArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationsPayoutByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryApplicationsPayoutsArgs = {
  condition?: InputMaybe<ApplicationsPayoutCondition>;
  filter?: InputMaybe<ApplicationsPayoutFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDonationArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDonationByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDonationsArgs = {
  condition?: InputMaybe<DonationCondition>;
  filter?: InputMaybe<DonationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryLegacyProjectArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLegacyProjectByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLegacyProjectByV1ProjectIdArgs = {
  v1ProjectId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLegacyProjectByV2ProjectIdArgs = {
  v2ProjectId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryLegacyProjectsArgs = {
  condition?: InputMaybe<LegacyProjectCondition>;
  filter?: InputMaybe<LegacyProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LegacyProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingProjectRoleArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingProjectRoleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingProjectRolesArgs = {
  condition?: InputMaybe<PendingProjectRoleCondition>;
  filter?: InputMaybe<PendingProjectRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectRolesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingRoundRoleArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingRoundRoleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPendingRoundRolesArgs = {
  condition?: InputMaybe<PendingRoundRoleCondition>;
  filter?: InputMaybe<PendingRoundRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingRoundRolesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPriceArgs = {
  id: Scalars['Int']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPriceByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPricesArgs = {
  condition?: InputMaybe<PriceCondition>;
  filter?: InputMaybe<PriceFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PricesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRoleArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
  role: ProjectRoleName;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRoleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectRolesArgs = {
  condition?: InputMaybe<ProjectRoleCondition>;
  filter?: InputMaybe<ProjectRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsArgs = {
  condition?: InputMaybe<ProjectCondition>;
  filter?: InputMaybe<ProjectFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundRoleArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  role: RoundRoleName;
  roundId: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundRoleByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundRolesArgs = {
  condition?: InputMaybe<RoundRoleCondition>;
  filter?: InputMaybe<RoundRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryRoundsArgs = {
  condition?: InputMaybe<RoundCondition>;
  filter?: InputMaybe<RoundFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionArgs = {
  id: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionByNodeIdArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySubscriptionsArgs = {
  condition?: InputMaybe<SubscriptionCondition>;
  filter?: InputMaybe<SubscriptionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SubscriptionsOrderBy>>;
};

export type Round = Node & {
  __typename?: 'Round';
  adminRole?: Maybe<Scalars['String']['output']>;
  applicationMetadata?: Maybe<Scalars['JSON']['output']>;
  applicationMetadataCid?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Application`. */
  applications: Array<Application>;
  applicationsEndTime?: Maybe<Scalars['Datetime']['output']>;
  applicationsStartTime?: Maybe<Scalars['Datetime']['output']>;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `Donation`. */
  donations: Array<Donation>;
  donationsEndTime?: Maybe<Scalars['Datetime']['output']>;
  donationsStartTime?: Maybe<Scalars['Datetime']['output']>;
  fundedAmount?: Maybe<Scalars['BigFloat']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  managerRole?: Maybe<Scalars['String']['output']>;
  matchAmount?: Maybe<Scalars['BigFloat']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchTokenAddress?: Maybe<Scalars['String']['output']>;
  matchingDistribution?: Maybe<Scalars['JSON']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  /** Reads a single `Project` that is related to this `Round`. */
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['String']['output']>;
  readyForPayoutTransaction?: Maybe<Scalars['String']['output']>;
  /** Reads and enables pagination through a set of `RoundRole`. */
  roles: Array<RoundRole>;
  roundMetadata?: Maybe<Scalars['JSON']['output']>;
  roundMetadataCid?: Maybe<Scalars['String']['output']>;
  strategyAddress?: Maybe<Scalars['String']['output']>;
  strategyId?: Maybe<Scalars['String']['output']>;
  strategyName?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['BigFloat']['output']>;
};


export type RoundApplicationsArgs = {
  condition?: InputMaybe<ApplicationCondition>;
  filter?: InputMaybe<ApplicationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
};


export type RoundDonationsArgs = {
  condition?: InputMaybe<DonationCondition>;
  filter?: InputMaybe<DonationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
};


export type RoundRolesArgs = {
  condition?: InputMaybe<RoundRoleCondition>;
  filter?: InputMaybe<RoundRoleFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
};

/** A condition to be used against `Round` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RoundCondition = {
  /** Checks for equality with the object’s `adminRole` field. */
  adminRole?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `applicationMetadata` field. */
  applicationMetadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `applicationMetadataCid` field. */
  applicationMetadataCid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `applicationsEndTime` field. */
  applicationsEndTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `applicationsStartTime` field. */
  applicationsStartTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `donationsEndTime` field. */
  donationsEndTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `donationsStartTime` field. */
  donationsStartTime?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `fundedAmount` field. */
  fundedAmount?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `fundedAmountInUsd` field. */
  fundedAmountInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `managerRole` field. */
  managerRole?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `matchAmount` field. */
  matchAmount?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `matchAmountInUsd` field. */
  matchAmountInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `matchTokenAddress` field. */
  matchTokenAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `matchingDistribution` field. */
  matchingDistribution?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `projectId` field. */
  projectId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `readyForPayoutTransaction` field. */
  readyForPayoutTransaction?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `roundMetadata` field. */
  roundMetadata?: InputMaybe<Scalars['JSON']['input']>;
  /** Checks for equality with the object’s `roundMetadataCid` field. */
  roundMetadataCid?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `strategyAddress` field. */
  strategyAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `strategyId` field. */
  strategyId?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `strategyName` field. */
  strategyName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `tags` field. */
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Checks for equality with the object’s `totalAmountDonatedInUsd` field. */
  totalAmountDonatedInUsd?: InputMaybe<Scalars['Float']['input']>;
  /** Checks for equality with the object’s `totalDonationsCount` field. */
  totalDonationsCount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `uniqueDonorsCount` field. */
  uniqueDonorsCount?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `updatedAtBlock` field. */
  updatedAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** A filter to be used against `Round` object types. All fields are combined with a logical ‘and.’ */
export type RoundFilter = {
  /** Filter by the object’s `adminRole` field. */
  adminRole?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RoundFilter>>;
  /** Filter by the object’s `applicationMetadata` field. */
  applicationMetadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `applicationMetadataCid` field. */
  applicationMetadataCid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `applications` relation. */
  applications?: InputMaybe<RoundToManyApplicationFilter>;
  /** Filter by the object’s `applicationsEndTime` field. */
  applicationsEndTime?: InputMaybe<DatetimeFilter>;
  /** Some related `applications` exist. */
  applicationsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `applicationsStartTime` field. */
  applicationsStartTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `createdByAddress` field. */
  createdByAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `donations` relation. */
  donations?: InputMaybe<RoundToManyDonationFilter>;
  /** Filter by the object’s `donationsEndTime` field. */
  donationsEndTime?: InputMaybe<DatetimeFilter>;
  /** Some related `donations` exist. */
  donationsExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `donationsStartTime` field. */
  donationsStartTime?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `fundedAmount` field. */
  fundedAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `fundedAmountInUsd` field. */
  fundedAmountInUsd?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `managerRole` field. */
  managerRole?: InputMaybe<StringFilter>;
  /** Filter by the object’s `matchAmount` field. */
  matchAmount?: InputMaybe<BigFloatFilter>;
  /** Filter by the object’s `matchAmountInUsd` field. */
  matchAmountInUsd?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `matchTokenAddress` field. */
  matchTokenAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `matchingDistribution` field. */
  matchingDistribution?: InputMaybe<JsonFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RoundFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RoundFilter>>;
  /** Filter by the object’s `project` relation. */
  project?: InputMaybe<ProjectFilter>;
  /** A related `project` exists. */
  projectExists?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `projectId` field. */
  projectId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `readyForPayoutTransaction` field. */
  readyForPayoutTransaction?: InputMaybe<StringFilter>;
  /** Filter by the object’s `roles` relation. */
  roles?: InputMaybe<RoundToManyRoundRoleFilter>;
  /** Some related `roles` exist. */
  rolesExist?: InputMaybe<Scalars['Boolean']['input']>;
  /** Filter by the object’s `roundMetadata` field. */
  roundMetadata?: InputMaybe<JsonFilter>;
  /** Filter by the object’s `roundMetadataCid` field. */
  roundMetadataCid?: InputMaybe<StringFilter>;
  /** Filter by the object’s `strategyAddress` field. */
  strategyAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `strategyId` field. */
  strategyId?: InputMaybe<StringFilter>;
  /** Filter by the object’s `strategyName` field. */
  strategyName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `tags` field. */
  tags?: InputMaybe<StringListFilter>;
  /** Filter by the object’s `totalAmountDonatedInUsd` field. */
  totalAmountDonatedInUsd?: InputMaybe<FloatFilter>;
  /** Filter by the object’s `totalDonationsCount` field. */
  totalDonationsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `uniqueDonorsCount` field. */
  uniqueDonorsCount?: InputMaybe<IntFilter>;
  /** Filter by the object’s `updatedAtBlock` field. */
  updatedAtBlock?: InputMaybe<BigFloatFilter>;
};

export type RoundRole = Node & {
  __typename?: 'RoundRole';
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['BigFloat']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  role: RoundRoleName;
  /** Reads a single `Round` that is related to this `RoundRole`. */
  round?: Maybe<Round>;
  roundId: Scalars['String']['output'];
};

/**
 * A condition to be used against `RoundRole` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type RoundRoleCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<Scalars['BigFloat']['input']>;
  /** Checks for equality with the object’s `role` field. */
  role?: InputMaybe<RoundRoleName>;
  /** Checks for equality with the object’s `roundId` field. */
  roundId?: InputMaybe<Scalars['String']['input']>;
};

/** A filter to be used against `RoundRole` object types. All fields are combined with a logical ‘and.’ */
export type RoundRoleFilter = {
  /** Filter by the object’s `address` field. */
  address?: InputMaybe<StringFilter>;
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<RoundRoleFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `createdAtBlock` field. */
  createdAtBlock?: InputMaybe<BigFloatFilter>;
  /** Negates the expression. */
  not?: InputMaybe<RoundRoleFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<RoundRoleFilter>>;
  /** Filter by the object’s `role` field. */
  role?: InputMaybe<RoundRoleNameFilter>;
  /** Filter by the object’s `round` relation. */
  round?: InputMaybe<RoundFilter>;
  /** Filter by the object’s `roundId` field. */
  roundId?: InputMaybe<StringFilter>;
};

export enum RoundRoleName {
  Admin = 'ADMIN',
  Manager = 'MANAGER'
}

/** A filter to be used against RoundRoleName fields. All fields are combined with a logical ‘and.’ */
export type RoundRoleNameFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<RoundRoleName>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<RoundRoleName>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<RoundRoleName>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<RoundRoleName>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<RoundRoleName>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<RoundRoleName>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<RoundRoleName>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<RoundRoleName>>;
};

/** Methods to use when ordering `RoundRole`. */
export enum RoundRolesOrderBy {
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RoleAsc = 'ROLE_ASC',
  RoleDesc = 'ROLE_DESC',
  RoundIdAsc = 'ROUND_ID_ASC',
  RoundIdDesc = 'ROUND_ID_DESC'
}

/** A filter to be used against many `Application` object types. All fields are combined with a logical ‘and.’ */
export type RoundToManyApplicationFilter = {
  /** Every related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<ApplicationFilter>;
  /** No related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<ApplicationFilter>;
  /** Some related `Application` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<ApplicationFilter>;
};

/** A filter to be used against many `Donation` object types. All fields are combined with a logical ‘and.’ */
export type RoundToManyDonationFilter = {
  /** Every related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<DonationFilter>;
  /** No related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<DonationFilter>;
  /** Some related `Donation` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<DonationFilter>;
};

/** A filter to be used against many `RoundRole` object types. All fields are combined with a logical ‘and.’ */
export type RoundToManyRoundRoleFilter = {
  /** Every related `RoundRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  every?: InputMaybe<RoundRoleFilter>;
  /** No related `RoundRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  none?: InputMaybe<RoundRoleFilter>;
  /** Some related `RoundRole` matches the filter criteria. All fields are combined with a logical ‘and.’ */
  some?: InputMaybe<RoundRoleFilter>;
};

/** Methods to use when ordering `Round`. */
export enum RoundsOrderBy {
  AdminRoleAsc = 'ADMIN_ROLE_ASC',
  AdminRoleDesc = 'ADMIN_ROLE_DESC',
  ApplicationsEndTimeAsc = 'APPLICATIONS_END_TIME_ASC',
  ApplicationsEndTimeDesc = 'APPLICATIONS_END_TIME_DESC',
  ApplicationsStartTimeAsc = 'APPLICATIONS_START_TIME_ASC',
  ApplicationsStartTimeDesc = 'APPLICATIONS_START_TIME_DESC',
  ApplicationMetadataAsc = 'APPLICATION_METADATA_ASC',
  ApplicationMetadataCidAsc = 'APPLICATION_METADATA_CID_ASC',
  ApplicationMetadataCidDesc = 'APPLICATION_METADATA_CID_DESC',
  ApplicationMetadataDesc = 'APPLICATION_METADATA_DESC',
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  CreatedAtBlockAsc = 'CREATED_AT_BLOCK_ASC',
  CreatedAtBlockDesc = 'CREATED_AT_BLOCK_DESC',
  CreatedByAddressAsc = 'CREATED_BY_ADDRESS_ASC',
  CreatedByAddressDesc = 'CREATED_BY_ADDRESS_DESC',
  DonationsEndTimeAsc = 'DONATIONS_END_TIME_ASC',
  DonationsEndTimeDesc = 'DONATIONS_END_TIME_DESC',
  DonationsStartTimeAsc = 'DONATIONS_START_TIME_ASC',
  DonationsStartTimeDesc = 'DONATIONS_START_TIME_DESC',
  FundedAmountAsc = 'FUNDED_AMOUNT_ASC',
  FundedAmountDesc = 'FUNDED_AMOUNT_DESC',
  FundedAmountInUsdAsc = 'FUNDED_AMOUNT_IN_USD_ASC',
  FundedAmountInUsdDesc = 'FUNDED_AMOUNT_IN_USD_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ManagerRoleAsc = 'MANAGER_ROLE_ASC',
  ManagerRoleDesc = 'MANAGER_ROLE_DESC',
  MatchingDistributionAsc = 'MATCHING_DISTRIBUTION_ASC',
  MatchingDistributionDesc = 'MATCHING_DISTRIBUTION_DESC',
  MatchAmountAsc = 'MATCH_AMOUNT_ASC',
  MatchAmountDesc = 'MATCH_AMOUNT_DESC',
  MatchAmountInUsdAsc = 'MATCH_AMOUNT_IN_USD_ASC',
  MatchAmountInUsdDesc = 'MATCH_AMOUNT_IN_USD_DESC',
  MatchTokenAddressAsc = 'MATCH_TOKEN_ADDRESS_ASC',
  MatchTokenAddressDesc = 'MATCH_TOKEN_ADDRESS_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProjectIdAsc = 'PROJECT_ID_ASC',
  ProjectIdDesc = 'PROJECT_ID_DESC',
  ReadyForPayoutTransactionAsc = 'READY_FOR_PAYOUT_TRANSACTION_ASC',
  ReadyForPayoutTransactionDesc = 'READY_FOR_PAYOUT_TRANSACTION_DESC',
  RoundMetadataAsc = 'ROUND_METADATA_ASC',
  RoundMetadataCidAsc = 'ROUND_METADATA_CID_ASC',
  RoundMetadataCidDesc = 'ROUND_METADATA_CID_DESC',
  RoundMetadataDesc = 'ROUND_METADATA_DESC',
  StrategyAddressAsc = 'STRATEGY_ADDRESS_ASC',
  StrategyAddressDesc = 'STRATEGY_ADDRESS_DESC',
  StrategyIdAsc = 'STRATEGY_ID_ASC',
  StrategyIdDesc = 'STRATEGY_ID_DESC',
  StrategyNameAsc = 'STRATEGY_NAME_ASC',
  StrategyNameDesc = 'STRATEGY_NAME_DESC',
  TagsAsc = 'TAGS_ASC',
  TagsDesc = 'TAGS_DESC',
  TotalAmountDonatedInUsdAsc = 'TOTAL_AMOUNT_DONATED_IN_USD_ASC',
  TotalAmountDonatedInUsdDesc = 'TOTAL_AMOUNT_DONATED_IN_USD_DESC',
  TotalDonationsCountAsc = 'TOTAL_DONATIONS_COUNT_ASC',
  TotalDonationsCountDesc = 'TOTAL_DONATIONS_COUNT_DESC',
  UniqueDonorsCountAsc = 'UNIQUE_DONORS_COUNT_ASC',
  UniqueDonorsCountDesc = 'UNIQUE_DONORS_COUNT_DESC',
  UpdatedAtBlockAsc = 'UPDATED_AT_BLOCK_ASC',
  UpdatedAtBlockDesc = 'UPDATED_AT_BLOCK_DESC'
}

/** A filter to be used against String fields. All fields are combined with a logical ‘and.’ */
export type StringFilter = {
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Scalars['String']['input']>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Scalars['String']['input']>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Included in the specified list. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Scalars['String']['input']>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Scalars['String']['input']>;
  /** Not included in the specified list. */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** A filter to be used against String List fields. All fields are combined with a logical ‘and.’ */
export type StringListFilter = {
  /** Contains the specified list of values. */
  contains?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Equal to the specified value. */
  equalTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than the specified value. */
  greaterThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Greater than or equal to the specified value. */
  greaterThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Is null (if `true` is specified) or is not null (if `false` is specified). */
  isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** Less than the specified value. */
  lessThan?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Less than or equal to the specified value. */
  lessThanOrEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Not equal to the specified value. */
  notEqualTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Subscription = Node & {
  __typename?: 'Subscription';
  chainId?: Maybe<Scalars['Int']['output']>;
  contractAddress?: Maybe<Scalars['String']['output']>;
  contractName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  fromBlock?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  indexedToBlock?: Maybe<Scalars['BigInt']['output']>;
  indexedToLogIndex?: Maybe<Scalars['Int']['output']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID']['output'];
  toBlock?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `Subscription` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SubscriptionCondition = {
  /** Checks for equality with the object’s `chainId` field. */
  chainId?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `contractName` field. */
  contractName?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `fromBlock` field. */
  fromBlock?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `indexedToBlock` field. */
  indexedToBlock?: InputMaybe<Scalars['BigInt']['input']>;
  /** Checks for equality with the object’s `indexedToLogIndex` field. */
  indexedToLogIndex?: InputMaybe<Scalars['Int']['input']>;
  /** Checks for equality with the object’s `toBlock` field. */
  toBlock?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A filter to be used against `Subscription` object types. All fields are combined with a logical ‘and.’ */
export type SubscriptionFilter = {
  /** Checks for all expressions in this list. */
  and?: InputMaybe<Array<SubscriptionFilter>>;
  /** Filter by the object’s `chainId` field. */
  chainId?: InputMaybe<IntFilter>;
  /** Filter by the object’s `contractAddress` field. */
  contractAddress?: InputMaybe<StringFilter>;
  /** Filter by the object’s `contractName` field. */
  contractName?: InputMaybe<StringFilter>;
  /** Filter by the object’s `createdAt` field. */
  createdAt?: InputMaybe<DatetimeFilter>;
  /** Filter by the object’s `fromBlock` field. */
  fromBlock?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `id` field. */
  id?: InputMaybe<StringFilter>;
  /** Filter by the object’s `indexedToBlock` field. */
  indexedToBlock?: InputMaybe<BigIntFilter>;
  /** Filter by the object’s `indexedToLogIndex` field. */
  indexedToLogIndex?: InputMaybe<IntFilter>;
  /** Negates the expression. */
  not?: InputMaybe<SubscriptionFilter>;
  /** Checks for any expressions in this list. */
  or?: InputMaybe<Array<SubscriptionFilter>>;
  /** Filter by the object’s `toBlock` field. */
  toBlock?: InputMaybe<StringFilter>;
  /** Filter by the object’s `updatedAt` field. */
  updatedAt?: InputMaybe<DatetimeFilter>;
};

/** Methods to use when ordering `Subscription`. */
export enum SubscriptionsOrderBy {
  ChainIdAsc = 'CHAIN_ID_ASC',
  ChainIdDesc = 'CHAIN_ID_DESC',
  ContractAddressAsc = 'CONTRACT_ADDRESS_ASC',
  ContractAddressDesc = 'CONTRACT_ADDRESS_DESC',
  ContractNameAsc = 'CONTRACT_NAME_ASC',
  ContractNameDesc = 'CONTRACT_NAME_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  FromBlockAsc = 'FROM_BLOCK_ASC',
  FromBlockDesc = 'FROM_BLOCK_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  IndexedToBlockAsc = 'INDEXED_TO_BLOCK_ASC',
  IndexedToBlockDesc = 'INDEXED_TO_BLOCK_DESC',
  IndexedToLogIndexAsc = 'INDEXED_TO_LOG_INDEX_ASC',
  IndexedToLogIndexDesc = 'INDEXED_TO_LOG_INDEX_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ToBlockAsc = 'TO_BLOCK_ASC',
  ToBlockDesc = 'TO_BLOCK_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC'
}

export type GetProjectNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProjectNamesQuery = { __typename?: 'Query', applications?: Array<{ __typename?: 'Application', project?: { __typename?: 'Project', chainId: number, name?: string | null, id: string } | null }> | null };

export type GetProjectQueryVariables = Exact<{
  projectIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetProjectQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', name?: string | null, metadata?: any | null, applications?: Array<{ __typename?: 'Application', id: string, totalAmountDonatedInUsd?: number | null, totalDonationsCount?: number | null, uniqueDonorsCount?: number | null, chainId: number, round?: { __typename?: 'Round', id: string, donationsEndTime?: any | null, donationsStartTime?: any | null, roundMetadata?: any | null } | null, donations: Array<{ __typename?: 'Donation', chainId?: number | null, amountInUsd?: number | null, transactionHash?: string | null, donorAddress?: string | null, roundId?: string | null, blockNumber?: any | null, tokenAddress?: string | null }> }> | null }> | null };


export const GetProjectNamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectNames"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"EnumValue","value":"APPROVED"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isNull"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectNamesQuery, GetProjectNamesQueryVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equalTo"},"value":{"kind":"EnumValue","value":"APPROVED"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountDonatedInUsd"}},{"kind":"Field","name":{"kind":"Name","value":"totalDonationsCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueDonorsCount"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"donationsEndTime"}},{"kind":"Field","name":{"kind":"Name","value":"donationsStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"roundMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"donations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"amountInUsd"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"donorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"roundId"}},{"kind":"Field","name":{"kind":"Name","value":"blockNumber"}},{"kind":"Field","name":{"kind":"Name","value":"tokenAddress"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;