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
  application_status: { input: any; output: any; }
  bigint: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  project_role_name: { input: any; output: any; }
  project_type: { input: any; output: any; }
  round_role_name: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "application_status". All fields are combined with logical 'AND'. */
export type ApplicationStatusComparisonExp = {
  _eq?: InputMaybe<Scalars['application_status']['input']>;
  _gt?: InputMaybe<Scalars['application_status']['input']>;
  _gte?: InputMaybe<Scalars['application_status']['input']>;
  _in?: InputMaybe<Array<Scalars['application_status']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['application_status']['input']>;
  _lte?: InputMaybe<Scalars['application_status']['input']>;
  _neq?: InputMaybe<Scalars['application_status']['input']>;
  _nin?: InputMaybe<Array<Scalars['application_status']['input']>>;
};

/** columns and relationships of "applications" */
export type Applications = {
  __typename?: 'Applications';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  applicationsPayouts: Array<ApplicationsPayouts>;
  /** An aggregate relationship */
  applicationsPayoutsAggregate: ApplicationsPayoutsAggregate;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  distributionTransaction?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  donations: Array<Donations>;
  /** An aggregate relationship */
  donationsAggregate: DonationsAggregate;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projectsAggregate: ProjectsAggregate;
  /** An object relationship */
  round?: Maybe<Rounds>;
  roundId: Scalars['String']['output'];
  status?: Maybe<Scalars['application_status']['output']>;
  statusSnapshots?: Maybe<Scalars['jsonb']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['numeric']['output']>;
  tags?: Maybe<Scalars['jsonb']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "applications" */
export type ApplicationsApplicationsPayoutsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsApplicationsPayoutsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsDonationsArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsDonationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "applications" */
export type ApplicationsProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


/** columns and relationships of "applications" */
export type ApplicationsStatusSnapshotsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "applications" */
export type ApplicationsTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "applications" */
export type ApplicationsAggregate = {
  __typename?: 'ApplicationsAggregate';
  aggregate?: Maybe<ApplicationsAggregateFields>;
  nodes: Array<Applications>;
};

export type ApplicationsAggregateBoolExp = {
  count?: InputMaybe<ApplicationsAggregateBoolExpCount>;
};

/** aggregate fields of "applications" */
export type ApplicationsAggregateFields = {
  __typename?: 'ApplicationsAggregateFields';
  avg?: Maybe<ApplicationsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ApplicationsMaxFields>;
  min?: Maybe<ApplicationsMinFields>;
  stddev?: Maybe<ApplicationsStddevFields>;
  stddevPop?: Maybe<ApplicationsStddevPopFields>;
  stddevSamp?: Maybe<ApplicationsStddevSampFields>;
  sum?: Maybe<ApplicationsSumFields>;
  varPop?: Maybe<ApplicationsVarPopFields>;
  varSamp?: Maybe<ApplicationsVarSampFields>;
  variance?: Maybe<ApplicationsVarianceFields>;
};


/** aggregate fields of "applications" */
export type ApplicationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "applications" */
export type ApplicationsAggregateOrderBy = {
  avg?: InputMaybe<ApplicationsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ApplicationsMaxOrderBy>;
  min?: InputMaybe<ApplicationsMinOrderBy>;
  stddev?: InputMaybe<ApplicationsStddevOrderBy>;
  stddevPop?: InputMaybe<ApplicationsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ApplicationsStddevSampOrderBy>;
  sum?: InputMaybe<ApplicationsSumOrderBy>;
  varPop?: InputMaybe<ApplicationsVarPopOrderBy>;
  varSamp?: InputMaybe<ApplicationsVarSampOrderBy>;
  variance?: InputMaybe<ApplicationsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ApplicationsAvgFields = {
  __typename?: 'ApplicationsAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "applications" */
export type ApplicationsAvgOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "applications". All fields are combined with a logical 'AND'. */
export type ApplicationsBoolExp = {
  _and?: InputMaybe<Array<ApplicationsBoolExp>>;
  _not?: InputMaybe<ApplicationsBoolExp>;
  _or?: InputMaybe<Array<ApplicationsBoolExp>>;
  anchorAddress?: InputMaybe<StringComparisonExp>;
  applicationsPayouts?: InputMaybe<ApplicationsPayoutsBoolExp>;
  applicationsPayoutsAggregate?: InputMaybe<ApplicationsPayoutsAggregateBoolExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  createdByAddress?: InputMaybe<StringComparisonExp>;
  distributionTransaction?: InputMaybe<StringComparisonExp>;
  donations?: InputMaybe<DonationsBoolExp>;
  donationsAggregate?: InputMaybe<DonationsAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  metadataCid?: InputMaybe<StringComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<StringComparisonExp>;
  projects?: InputMaybe<ProjectsBoolExp>;
  projectsAggregate?: InputMaybe<ProjectsAggregateBoolExp>;
  round?: InputMaybe<RoundsBoolExp>;
  roundId?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<ApplicationStatusComparisonExp>;
  statusSnapshots?: InputMaybe<JsonbComparisonExp>;
  statusUpdatedAtBlock?: InputMaybe<NumericComparisonExp>;
  tags?: InputMaybe<JsonbComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalAmountDonatedInUsd?: InputMaybe<NumericComparisonExp>;
  totalDonationsCount?: InputMaybe<IntComparisonExp>;
  uniqueDonorsCount?: InputMaybe<IntComparisonExp>;
};

/** aggregate max on columns */
export type ApplicationsMaxFields = {
  __typename?: 'ApplicationsMaxFields';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  distributionTransaction?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['application_status']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "applications" */
export type ApplicationsMaxOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  distributionTransaction?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ApplicationsMinFields = {
  __typename?: 'ApplicationsMinFields';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  distributionTransaction?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['application_status']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "applications" */
export type ApplicationsMinOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  distributionTransaction?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "applications". */
export type ApplicationsOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  applicationsPayoutsAggregate?: InputMaybe<ApplicationsPayoutsAggregateOrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  distributionTransaction?: InputMaybe<OrderBy>;
  donationsAggregate?: InputMaybe<DonationsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  projectsAggregate?: InputMaybe<ProjectsAggregateOrderBy>;
  round?: InputMaybe<RoundsOrderBy>;
  roundId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  statusSnapshots?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "applications_payouts" */
export type ApplicationsPayouts = {
  __typename?: 'ApplicationsPayouts';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  application?: Maybe<Applications>;
  applicationId?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  roundId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "applications_payouts" */
export type ApplicationsPayoutsAggregate = {
  __typename?: 'ApplicationsPayoutsAggregate';
  aggregate?: Maybe<ApplicationsPayoutsAggregateFields>;
  nodes: Array<ApplicationsPayouts>;
};

export type ApplicationsPayoutsAggregateBoolExp = {
  count?: InputMaybe<ApplicationsPayoutsAggregateBoolExpCount>;
};

/** aggregate fields of "applications_payouts" */
export type ApplicationsPayoutsAggregateFields = {
  __typename?: 'ApplicationsPayoutsAggregateFields';
  avg?: Maybe<ApplicationsPayoutsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ApplicationsPayoutsMaxFields>;
  min?: Maybe<ApplicationsPayoutsMinFields>;
  stddev?: Maybe<ApplicationsPayoutsStddevFields>;
  stddevPop?: Maybe<ApplicationsPayoutsStddevPopFields>;
  stddevSamp?: Maybe<ApplicationsPayoutsStddevSampFields>;
  sum?: Maybe<ApplicationsPayoutsSumFields>;
  varPop?: Maybe<ApplicationsPayoutsVarPopFields>;
  varSamp?: Maybe<ApplicationsPayoutsVarSampFields>;
  variance?: Maybe<ApplicationsPayoutsVarianceFields>;
};


/** aggregate fields of "applications_payouts" */
export type ApplicationsPayoutsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "applications_payouts" */
export type ApplicationsPayoutsAggregateOrderBy = {
  avg?: InputMaybe<ApplicationsPayoutsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ApplicationsPayoutsMaxOrderBy>;
  min?: InputMaybe<ApplicationsPayoutsMinOrderBy>;
  stddev?: InputMaybe<ApplicationsPayoutsStddevOrderBy>;
  stddevPop?: InputMaybe<ApplicationsPayoutsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ApplicationsPayoutsStddevSampOrderBy>;
  sum?: InputMaybe<ApplicationsPayoutsSumOrderBy>;
  varPop?: InputMaybe<ApplicationsPayoutsVarPopOrderBy>;
  varSamp?: InputMaybe<ApplicationsPayoutsVarSampOrderBy>;
  variance?: InputMaybe<ApplicationsPayoutsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ApplicationsPayoutsAvgFields = {
  __typename?: 'ApplicationsPayoutsAvgFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "applications_payouts" */
export type ApplicationsPayoutsAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "applications_payouts". All fields are combined with a logical 'AND'. */
export type ApplicationsPayoutsBoolExp = {
  _and?: InputMaybe<Array<ApplicationsPayoutsBoolExp>>;
  _not?: InputMaybe<ApplicationsPayoutsBoolExp>;
  _or?: InputMaybe<Array<ApplicationsPayoutsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  amountInRoundMatchToken?: InputMaybe<NumericComparisonExp>;
  amountInUsd?: InputMaybe<NumericComparisonExp>;
  application?: InputMaybe<ApplicationsBoolExp>;
  applicationId?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  roundId?: InputMaybe<StringComparisonExp>;
  sender?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  tokenAddress?: InputMaybe<StringComparisonExp>;
  transactionHash?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type ApplicationsPayoutsMaxFields = {
  __typename?: 'ApplicationsPayoutsMaxFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "applications_payouts" */
export type ApplicationsPayoutsMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  sender?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ApplicationsPayoutsMinFields = {
  __typename?: 'ApplicationsPayoutsMinFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "applications_payouts" */
export type ApplicationsPayoutsMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  sender?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "applications_payouts". */
export type ApplicationsPayoutsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  application?: InputMaybe<ApplicationsOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  sender?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** select columns of table "applications_payouts" */
export enum ApplicationsPayoutsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountInRoundMatchToken = 'amountInRoundMatchToken',
  /** column name */
  AmountInUsd = 'amountInUsd',
  /** column name */
  ApplicationId = 'applicationId',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Sender = 'sender',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenAddress = 'tokenAddress',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type ApplicationsPayoutsStddevFields = {
  __typename?: 'ApplicationsPayoutsStddevFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "applications_payouts" */
export type ApplicationsPayoutsStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ApplicationsPayoutsStddevPopFields = {
  __typename?: 'ApplicationsPayoutsStddevPopFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "applications_payouts" */
export type ApplicationsPayoutsStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ApplicationsPayoutsStddevSampFields = {
  __typename?: 'ApplicationsPayoutsStddevSampFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "applications_payouts" */
export type ApplicationsPayoutsStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "applications_payouts" */
export type ApplicationsPayoutsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationsPayoutsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationsPayoutsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  amountInRoundMatchToken?: InputMaybe<Scalars['numeric']['input']>;
  amountInUsd?: InputMaybe<Scalars['numeric']['input']>;
  applicationId?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  roundId?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type ApplicationsPayoutsSumFields = {
  __typename?: 'ApplicationsPayoutsSumFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "applications_payouts" */
export type ApplicationsPayoutsSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type ApplicationsPayoutsVarPopFields = {
  __typename?: 'ApplicationsPayoutsVarPopFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "applications_payouts" */
export type ApplicationsPayoutsVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ApplicationsPayoutsVarSampFields = {
  __typename?: 'ApplicationsPayoutsVarSampFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "applications_payouts" */
export type ApplicationsPayoutsVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ApplicationsPayoutsVarianceFields = {
  __typename?: 'ApplicationsPayoutsVarianceFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "applications_payouts" */
export type ApplicationsPayoutsVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "applications" */
export enum ApplicationsSelectColumn {
  /** column name */
  AnchorAddress = 'anchorAddress',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  CreatedByAddress = 'createdByAddress',
  /** column name */
  DistributionTransaction = 'distributionTransaction',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataCid = 'metadataCid',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Status = 'status',
  /** column name */
  StatusSnapshots = 'statusSnapshots',
  /** column name */
  StatusUpdatedAtBlock = 'statusUpdatedAtBlock',
  /** column name */
  Tags = 'tags',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalAmountDonatedInUsd = 'totalAmountDonatedInUsd',
  /** column name */
  TotalDonationsCount = 'totalDonationsCount',
  /** column name */
  UniqueDonorsCount = 'uniqueDonorsCount'
}

/** aggregate stddev on columns */
export type ApplicationsStddevFields = {
  __typename?: 'ApplicationsStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "applications" */
export type ApplicationsStddevOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ApplicationsStddevPopFields = {
  __typename?: 'ApplicationsStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "applications" */
export type ApplicationsStddevPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ApplicationsStddevSampFields = {
  __typename?: 'ApplicationsStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "applications" */
export type ApplicationsStddevSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "applications" */
export type ApplicationsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationsStreamCursorValueInput = {
  anchorAddress?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  distributionTransaction?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  metadataCid?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  roundId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['application_status']['input']>;
  statusSnapshots?: InputMaybe<Scalars['jsonb']['input']>;
  statusUpdatedAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  totalAmountDonatedInUsd?: InputMaybe<Scalars['numeric']['input']>;
  totalDonationsCount?: InputMaybe<Scalars['Int']['input']>;
  uniqueDonorsCount?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ApplicationsSumFields = {
  __typename?: 'ApplicationsSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['numeric']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "applications" */
export type ApplicationsSumOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type ApplicationsVarPopFields = {
  __typename?: 'ApplicationsVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "applications" */
export type ApplicationsVarPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ApplicationsVarSampFields = {
  __typename?: 'ApplicationsVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "applications" */
export type ApplicationsVarSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ApplicationsVarianceFields = {
  __typename?: 'ApplicationsVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  statusUpdatedAtBlock?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "applications" */
export type ApplicationsVarianceOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  statusUpdatedAtBlock?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "attestation_txns" */
export type AttestationTxns = {
  __typename?: 'AttestationTxns';
  /** An object relationship */
  attestation?: Maybe<Attestations>;
  attestationChainId?: Maybe<Scalars['Int']['output']>;
  attestationUid?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  donation?: Maybe<Donations>;
  txnHash?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "attestation_txns" */
export type AttestationTxnsAggregate = {
  __typename?: 'AttestationTxnsAggregate';
  aggregate?: Maybe<AttestationTxnsAggregateFields>;
  nodes: Array<AttestationTxns>;
};

export type AttestationTxnsAggregateBoolExp = {
  count?: InputMaybe<AttestationTxnsAggregateBoolExpCount>;
};

/** aggregate fields of "attestation_txns" */
export type AttestationTxnsAggregateFields = {
  __typename?: 'AttestationTxnsAggregateFields';
  avg?: Maybe<AttestationTxnsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AttestationTxnsMaxFields>;
  min?: Maybe<AttestationTxnsMinFields>;
  stddev?: Maybe<AttestationTxnsStddevFields>;
  stddevPop?: Maybe<AttestationTxnsStddevPopFields>;
  stddevSamp?: Maybe<AttestationTxnsStddevSampFields>;
  sum?: Maybe<AttestationTxnsSumFields>;
  varPop?: Maybe<AttestationTxnsVarPopFields>;
  varSamp?: Maybe<AttestationTxnsVarSampFields>;
  variance?: Maybe<AttestationTxnsVarianceFields>;
};


/** aggregate fields of "attestation_txns" */
export type AttestationTxnsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "attestation_txns" */
export type AttestationTxnsAggregateOrderBy = {
  avg?: InputMaybe<AttestationTxnsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AttestationTxnsMaxOrderBy>;
  min?: InputMaybe<AttestationTxnsMinOrderBy>;
  stddev?: InputMaybe<AttestationTxnsStddevOrderBy>;
  stddevPop?: InputMaybe<AttestationTxnsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AttestationTxnsStddevSampOrderBy>;
  sum?: InputMaybe<AttestationTxnsSumOrderBy>;
  varPop?: InputMaybe<AttestationTxnsVarPopOrderBy>;
  varSamp?: InputMaybe<AttestationTxnsVarSampOrderBy>;
  variance?: InputMaybe<AttestationTxnsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type AttestationTxnsAvgFields = {
  __typename?: 'AttestationTxnsAvgFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "attestation_txns" */
export type AttestationTxnsAvgOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "attestation_txns". All fields are combined with a logical 'AND'. */
export type AttestationTxnsBoolExp = {
  _and?: InputMaybe<Array<AttestationTxnsBoolExp>>;
  _not?: InputMaybe<AttestationTxnsBoolExp>;
  _or?: InputMaybe<Array<AttestationTxnsBoolExp>>;
  attestation?: InputMaybe<AttestationsBoolExp>;
  attestationChainId?: InputMaybe<IntComparisonExp>;
  attestationUid?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  donation?: InputMaybe<DonationsBoolExp>;
  txnHash?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type AttestationTxnsMaxFields = {
  __typename?: 'AttestationTxnsMaxFields';
  attestationChainId?: Maybe<Scalars['Int']['output']>;
  attestationUid?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  txnHash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "attestation_txns" */
export type AttestationTxnsMaxOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  attestationUid?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  txnHash?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AttestationTxnsMinFields = {
  __typename?: 'AttestationTxnsMinFields';
  attestationChainId?: Maybe<Scalars['Int']['output']>;
  attestationUid?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  txnHash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "attestation_txns" */
export type AttestationTxnsMinOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  attestationUid?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  txnHash?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "attestation_txns". */
export type AttestationTxnsOrderBy = {
  attestation?: InputMaybe<AttestationsOrderBy>;
  attestationChainId?: InputMaybe<OrderBy>;
  attestationUid?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  donation?: InputMaybe<DonationsOrderBy>;
  txnHash?: InputMaybe<OrderBy>;
};

/** select columns of table "attestation_txns" */
export enum AttestationTxnsSelectColumn {
  /** column name */
  AttestationChainId = 'attestationChainId',
  /** column name */
  AttestationUid = 'attestationUid',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  TxnHash = 'txnHash'
}

/** aggregate stddev on columns */
export type AttestationTxnsStddevFields = {
  __typename?: 'AttestationTxnsStddevFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "attestation_txns" */
export type AttestationTxnsStddevOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AttestationTxnsStddevPopFields = {
  __typename?: 'AttestationTxnsStddevPopFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "attestation_txns" */
export type AttestationTxnsStddevPopOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AttestationTxnsStddevSampFields = {
  __typename?: 'AttestationTxnsStddevSampFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "attestation_txns" */
export type AttestationTxnsStddevSampOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "attestation_txns" */
export type AttestationTxnsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AttestationTxnsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AttestationTxnsStreamCursorValueInput = {
  attestationChainId?: InputMaybe<Scalars['Int']['input']>;
  attestationUid?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  txnHash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type AttestationTxnsSumFields = {
  __typename?: 'AttestationTxnsSumFields';
  attestationChainId?: Maybe<Scalars['Int']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "attestation_txns" */
export type AttestationTxnsSumOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type AttestationTxnsVarPopFields = {
  __typename?: 'AttestationTxnsVarPopFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "attestation_txns" */
export type AttestationTxnsVarPopOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AttestationTxnsVarSampFields = {
  __typename?: 'AttestationTxnsVarSampFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "attestation_txns" */
export type AttestationTxnsVarSampOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AttestationTxnsVarianceFields = {
  __typename?: 'AttestationTxnsVarianceFields';
  attestationChainId?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "attestation_txns" */
export type AttestationTxnsVarianceOrderBy = {
  attestationChainId?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "attestations" */
export type Attestations = {
  __typename?: 'Attestations';
  /** An array relationship */
  attestationTxns: Array<AttestationTxns>;
  /** An aggregate relationship */
  attestationTxnsAggregate: AttestationTxnsAggregate;
  chainId: Scalars['Int']['output'];
  chainIdsContributed?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  metadata?: Maybe<Scalars['jsonb']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  projectsContributed?: Maybe<Scalars['numeric']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  refUid?: Maybe<Scalars['String']['output']>;
  roundsContributed?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalUsdamount?: Maybe<Scalars['numeric']['output']>;
  uid: Scalars['String']['output'];
};


/** columns and relationships of "attestations" */
export type AttestationsAttestationTxnsArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


/** columns and relationships of "attestations" */
export type AttestationsAttestationTxnsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


/** columns and relationships of "attestations" */
export type AttestationsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "attestations" */
export type AttestationsAggregate = {
  __typename?: 'AttestationsAggregate';
  aggregate?: Maybe<AttestationsAggregateFields>;
  nodes: Array<Attestations>;
};

/** aggregate fields of "attestations" */
export type AttestationsAggregateFields = {
  __typename?: 'AttestationsAggregateFields';
  avg?: Maybe<AttestationsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AttestationsMaxFields>;
  min?: Maybe<AttestationsMinFields>;
  stddev?: Maybe<AttestationsStddevFields>;
  stddevPop?: Maybe<AttestationsStddevPopFields>;
  stddevSamp?: Maybe<AttestationsStddevSampFields>;
  sum?: Maybe<AttestationsSumFields>;
  varPop?: Maybe<AttestationsVarPopFields>;
  varSamp?: Maybe<AttestationsVarSampFields>;
  variance?: Maybe<AttestationsVarianceFields>;
};


/** aggregate fields of "attestations" */
export type AttestationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AttestationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type AttestationsAvgFields = {
  __typename?: 'AttestationsAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "attestations". All fields are combined with a logical 'AND'. */
export type AttestationsBoolExp = {
  _and?: InputMaybe<Array<AttestationsBoolExp>>;
  _not?: InputMaybe<AttestationsBoolExp>;
  _or?: InputMaybe<Array<AttestationsBoolExp>>;
  attestationTxns?: InputMaybe<AttestationTxnsBoolExp>;
  attestationTxnsAggregate?: InputMaybe<AttestationTxnsAggregateBoolExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  chainIdsContributed?: InputMaybe<NumericComparisonExp>;
  fee?: InputMaybe<NumericComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  metadataCid?: InputMaybe<StringComparisonExp>;
  projectsContributed?: InputMaybe<NumericComparisonExp>;
  recipient?: InputMaybe<StringComparisonExp>;
  refUid?: InputMaybe<StringComparisonExp>;
  roundsContributed?: InputMaybe<NumericComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalUsdamount?: InputMaybe<NumericComparisonExp>;
  uid?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type AttestationsMaxFields = {
  __typename?: 'AttestationsMaxFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  chainIdsContributed?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  projectsContributed?: Maybe<Scalars['numeric']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  refUid?: Maybe<Scalars['String']['output']>;
  roundsContributed?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalUsdamount?: Maybe<Scalars['numeric']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type AttestationsMinFields = {
  __typename?: 'AttestationsMinFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  chainIdsContributed?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  projectsContributed?: Maybe<Scalars['numeric']['output']>;
  recipient?: Maybe<Scalars['String']['output']>;
  refUid?: Maybe<Scalars['String']['output']>;
  roundsContributed?: Maybe<Scalars['numeric']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalUsdamount?: Maybe<Scalars['numeric']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "attestations". */
export type AttestationsOrderBy = {
  attestationTxnsAggregate?: InputMaybe<AttestationTxnsAggregateOrderBy>;
  chainId?: InputMaybe<OrderBy>;
  chainIdsContributed?: InputMaybe<OrderBy>;
  fee?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  projectsContributed?: InputMaybe<OrderBy>;
  recipient?: InputMaybe<OrderBy>;
  refUid?: InputMaybe<OrderBy>;
  roundsContributed?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalUsdamount?: InputMaybe<OrderBy>;
  uid?: InputMaybe<OrderBy>;
};

/** select columns of table "attestations" */
export enum AttestationsSelectColumn {
  /** column name */
  ChainId = 'chainId',
  /** column name */
  ChainIdsContributed = 'chainIdsContributed',
  /** column name */
  Fee = 'fee',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataCid = 'metadataCid',
  /** column name */
  ProjectsContributed = 'projectsContributed',
  /** column name */
  Recipient = 'recipient',
  /** column name */
  RefUid = 'refUid',
  /** column name */
  RoundsContributed = 'roundsContributed',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalUsdamount = 'totalUsdamount',
  /** column name */
  Uid = 'uid'
}

/** aggregate stddev on columns */
export type AttestationsStddevFields = {
  __typename?: 'AttestationsStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type AttestationsStddevPopFields = {
  __typename?: 'AttestationsStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type AttestationsStddevSampFields = {
  __typename?: 'AttestationsStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "attestations" */
export type AttestationsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AttestationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AttestationsStreamCursorValueInput = {
  chainId?: InputMaybe<Scalars['Int']['input']>;
  chainIdsContributed?: InputMaybe<Scalars['numeric']['input']>;
  fee?: InputMaybe<Scalars['numeric']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  metadataCid?: InputMaybe<Scalars['String']['input']>;
  projectsContributed?: InputMaybe<Scalars['numeric']['input']>;
  recipient?: InputMaybe<Scalars['String']['input']>;
  refUid?: InputMaybe<Scalars['String']['input']>;
  roundsContributed?: InputMaybe<Scalars['numeric']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  totalUsdamount?: InputMaybe<Scalars['numeric']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type AttestationsSumFields = {
  __typename?: 'AttestationsSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  chainIdsContributed?: Maybe<Scalars['numeric']['output']>;
  fee?: Maybe<Scalars['numeric']['output']>;
  projectsContributed?: Maybe<Scalars['numeric']['output']>;
  roundsContributed?: Maybe<Scalars['numeric']['output']>;
  totalUsdamount?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate varPop on columns */
export type AttestationsVarPopFields = {
  __typename?: 'AttestationsVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type AttestationsVarSampFields = {
  __typename?: 'AttestationsVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type AttestationsVarianceFields = {
  __typename?: 'AttestationsVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  chainIdsContributed?: Maybe<Scalars['Float']['output']>;
  fee?: Maybe<Scalars['Float']['output']>;
  projectsContributed?: Maybe<Scalars['Float']['output']>;
  roundsContributed?: Maybe<Scalars['Float']['output']>;
  totalUsdamount?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "donations" */
export type Donations = {
  __typename?: 'Donations';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  application?: Maybe<Applications>;
  applicationId?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  attestationTransactions: Array<AttestationTxns>;
  /** An aggregate relationship */
  attestationTransactionsAggregate: AttestationTxnsAggregate;
  blockNumber?: Maybe<Scalars['numeric']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  donorAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  projectId?: Maybe<Scalars['String']['output']>;
  recipientAddress?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  round?: Maybe<Rounds>;
  roundId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "donations" */
export type DonationsAttestationTransactionsArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


/** columns and relationships of "donations" */
export type DonationsAttestationTransactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};

/** aggregated selection of "donations" */
export type DonationsAggregate = {
  __typename?: 'DonationsAggregate';
  aggregate?: Maybe<DonationsAggregateFields>;
  nodes: Array<Donations>;
};

export type DonationsAggregateBoolExp = {
  count?: InputMaybe<DonationsAggregateBoolExpCount>;
};

/** aggregate fields of "donations" */
export type DonationsAggregateFields = {
  __typename?: 'DonationsAggregateFields';
  avg?: Maybe<DonationsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<DonationsMaxFields>;
  min?: Maybe<DonationsMinFields>;
  stddev?: Maybe<DonationsStddevFields>;
  stddevPop?: Maybe<DonationsStddevPopFields>;
  stddevSamp?: Maybe<DonationsStddevSampFields>;
  sum?: Maybe<DonationsSumFields>;
  varPop?: Maybe<DonationsVarPopFields>;
  varSamp?: Maybe<DonationsVarSampFields>;
  variance?: Maybe<DonationsVarianceFields>;
};


/** aggregate fields of "donations" */
export type DonationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DonationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "donations" */
export type DonationsAggregateOrderBy = {
  avg?: InputMaybe<DonationsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DonationsMaxOrderBy>;
  min?: InputMaybe<DonationsMinOrderBy>;
  stddev?: InputMaybe<DonationsStddevOrderBy>;
  stddevPop?: InputMaybe<DonationsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<DonationsStddevSampOrderBy>;
  sum?: InputMaybe<DonationsSumOrderBy>;
  varPop?: InputMaybe<DonationsVarPopOrderBy>;
  varSamp?: InputMaybe<DonationsVarSampOrderBy>;
  variance?: InputMaybe<DonationsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type DonationsAvgFields = {
  __typename?: 'DonationsAvgFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "donations" */
export type DonationsAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "donations". All fields are combined with a logical 'AND'. */
export type DonationsBoolExp = {
  _and?: InputMaybe<Array<DonationsBoolExp>>;
  _not?: InputMaybe<DonationsBoolExp>;
  _or?: InputMaybe<Array<DonationsBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  amountInRoundMatchToken?: InputMaybe<NumericComparisonExp>;
  amountInUsd?: InputMaybe<NumericComparisonExp>;
  application?: InputMaybe<ApplicationsBoolExp>;
  applicationId?: InputMaybe<StringComparisonExp>;
  attestationTransactions?: InputMaybe<AttestationTxnsBoolExp>;
  attestationTransactionsAggregate?: InputMaybe<AttestationTxnsAggregateBoolExp>;
  blockNumber?: InputMaybe<NumericComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  donorAddress?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  projectId?: InputMaybe<StringComparisonExp>;
  recipientAddress?: InputMaybe<StringComparisonExp>;
  round?: InputMaybe<RoundsBoolExp>;
  roundId?: InputMaybe<StringComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  tokenAddress?: InputMaybe<StringComparisonExp>;
  transactionHash?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type DonationsMaxFields = {
  __typename?: 'DonationsMaxFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['numeric']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  donorAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  recipientAddress?: Maybe<Scalars['String']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "donations" */
export type DonationsMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  donorAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  recipientAddress?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DonationsMinFields = {
  __typename?: 'DonationsMinFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  applicationId?: Maybe<Scalars['String']['output']>;
  blockNumber?: Maybe<Scalars['numeric']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  donorAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  recipientAddress?: Maybe<Scalars['String']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  tokenAddress?: Maybe<Scalars['String']['output']>;
  transactionHash?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "donations" */
export type DonationsMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  donorAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  recipientAddress?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "donations". */
export type DonationsOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  application?: InputMaybe<ApplicationsOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  attestationTransactionsAggregate?: InputMaybe<AttestationTxnsAggregateOrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  donorAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  recipientAddress?: InputMaybe<OrderBy>;
  round?: InputMaybe<RoundsOrderBy>;
  roundId?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  tokenAddress?: InputMaybe<OrderBy>;
  transactionHash?: InputMaybe<OrderBy>;
};

/** select columns of table "donations" */
export enum DonationsSelectColumn {
  /** column name */
  Amount = 'amount',
  /** column name */
  AmountInRoundMatchToken = 'amountInRoundMatchToken',
  /** column name */
  AmountInUsd = 'amountInUsd',
  /** column name */
  ApplicationId = 'applicationId',
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  DonorAddress = 'donorAddress',
  /** column name */
  Id = 'id',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  RecipientAddress = 'recipientAddress',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TokenAddress = 'tokenAddress',
  /** column name */
  TransactionHash = 'transactionHash'
}

/** aggregate stddev on columns */
export type DonationsStddevFields = {
  __typename?: 'DonationsStddevFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "donations" */
export type DonationsStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type DonationsStddevPopFields = {
  __typename?: 'DonationsStddevPopFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "donations" */
export type DonationsStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type DonationsStddevSampFields = {
  __typename?: 'DonationsStddevSampFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "donations" */
export type DonationsStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "donations" */
export type DonationsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DonationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DonationsStreamCursorValueInput = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  amountInRoundMatchToken?: InputMaybe<Scalars['numeric']['input']>;
  amountInUsd?: InputMaybe<Scalars['numeric']['input']>;
  applicationId?: InputMaybe<Scalars['String']['input']>;
  blockNumber?: InputMaybe<Scalars['numeric']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  donorAddress?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  recipientAddress?: InputMaybe<Scalars['String']['input']>;
  roundId?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  tokenAddress?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type DonationsSumFields = {
  __typename?: 'DonationsSumFields';
  amount?: Maybe<Scalars['numeric']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['numeric']['output']>;
  amountInUsd?: Maybe<Scalars['numeric']['output']>;
  blockNumber?: Maybe<Scalars['numeric']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "donations" */
export type DonationsSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type DonationsVarPopFields = {
  __typename?: 'DonationsVarPopFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "donations" */
export type DonationsVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type DonationsVarSampFields = {
  __typename?: 'DonationsVarSampFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "donations" */
export type DonationsVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DonationsVarianceFields = {
  __typename?: 'DonationsVarianceFields';
  amount?: Maybe<Scalars['Float']['output']>;
  amountInRoundMatchToken?: Maybe<Scalars['Float']['output']>;
  amountInUsd?: Maybe<Scalars['Float']['output']>;
  blockNumber?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "donations" */
export type DonationsVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
  amountInRoundMatchToken?: InputMaybe<OrderBy>;
  amountInUsd?: InputMaybe<OrderBy>;
  blockNumber?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
};

/** columns and relationships of "events_registry" */
export type EventsRegistry = {
  __typename?: 'EventsRegistry';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockTimestamp?: Maybe<Scalars['bigint']['output']>;
  chainId: Scalars['Int']['output'];
  logIndex?: Maybe<Scalars['Int']['output']>;
  rawEvent?: Maybe<Scalars['jsonb']['output']>;
};


/** columns and relationships of "events_registry" */
export type EventsRegistryRawEventArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "events_registry" */
export type EventsRegistryAggregate = {
  __typename?: 'EventsRegistryAggregate';
  aggregate?: Maybe<EventsRegistryAggregateFields>;
  nodes: Array<EventsRegistry>;
};

/** aggregate fields of "events_registry" */
export type EventsRegistryAggregateFields = {
  __typename?: 'EventsRegistryAggregateFields';
  avg?: Maybe<EventsRegistryAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<EventsRegistryMaxFields>;
  min?: Maybe<EventsRegistryMinFields>;
  stddev?: Maybe<EventsRegistryStddevFields>;
  stddevPop?: Maybe<EventsRegistryStddevPopFields>;
  stddevSamp?: Maybe<EventsRegistryStddevSampFields>;
  sum?: Maybe<EventsRegistrySumFields>;
  varPop?: Maybe<EventsRegistryVarPopFields>;
  varSamp?: Maybe<EventsRegistryVarSampFields>;
  variance?: Maybe<EventsRegistryVarianceFields>;
};


/** aggregate fields of "events_registry" */
export type EventsRegistryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<EventsRegistrySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type EventsRegistryAvgFields = {
  __typename?: 'EventsRegistryAvgFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "events_registry". All fields are combined with a logical 'AND'. */
export type EventsRegistryBoolExp = {
  _and?: InputMaybe<Array<EventsRegistryBoolExp>>;
  _not?: InputMaybe<EventsRegistryBoolExp>;
  _or?: InputMaybe<Array<EventsRegistryBoolExp>>;
  blockNumber?: InputMaybe<IntComparisonExp>;
  blockTimestamp?: InputMaybe<BigintComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  logIndex?: InputMaybe<IntComparisonExp>;
  rawEvent?: InputMaybe<JsonbComparisonExp>;
};

/** aggregate max on columns */
export type EventsRegistryMaxFields = {
  __typename?: 'EventsRegistryMaxFields';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockTimestamp?: Maybe<Scalars['bigint']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type EventsRegistryMinFields = {
  __typename?: 'EventsRegistryMinFields';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockTimestamp?: Maybe<Scalars['bigint']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "events_registry". */
export type EventsRegistryOrderBy = {
  blockNumber?: InputMaybe<OrderBy>;
  blockTimestamp?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  logIndex?: InputMaybe<OrderBy>;
  rawEvent?: InputMaybe<OrderBy>;
};

/** select columns of table "events_registry" */
export enum EventsRegistrySelectColumn {
  /** column name */
  BlockNumber = 'blockNumber',
  /** column name */
  BlockTimestamp = 'blockTimestamp',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  LogIndex = 'logIndex',
  /** column name */
  RawEvent = 'rawEvent'
}

/** aggregate stddev on columns */
export type EventsRegistryStddevFields = {
  __typename?: 'EventsRegistryStddevFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type EventsRegistryStddevPopFields = {
  __typename?: 'EventsRegistryStddevPopFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type EventsRegistryStddevSampFields = {
  __typename?: 'EventsRegistryStddevSampFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "events_registry" */
export type EventsRegistryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: EventsRegistryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type EventsRegistryStreamCursorValueInput = {
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockTimestamp?: InputMaybe<Scalars['bigint']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  logIndex?: InputMaybe<Scalars['Int']['input']>;
  rawEvent?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate sum on columns */
export type EventsRegistrySumFields = {
  __typename?: 'EventsRegistrySumFields';
  blockNumber?: Maybe<Scalars['Int']['output']>;
  blockTimestamp?: Maybe<Scalars['bigint']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  logIndex?: Maybe<Scalars['Int']['output']>;
};

/** aggregate varPop on columns */
export type EventsRegistryVarPopFields = {
  __typename?: 'EventsRegistryVarPopFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type EventsRegistryVarSampFields = {
  __typename?: 'EventsRegistryVarSampFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type EventsRegistryVarianceFields = {
  __typename?: 'EventsRegistryVarianceFields';
  blockNumber?: Maybe<Scalars['Float']['output']>;
  blockTimestamp?: Maybe<Scalars['Float']['output']>;
  chainId?: Maybe<Scalars['Float']['output']>;
  logIndex?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _containedIn?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _hasKey?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _hasKeysAll?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _hasKeysAny?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "legacy_projects" */
export type LegacyProjects = {
  __typename?: 'LegacyProjects';
  id: Scalars['Int']['output'];
  v1ChainId?: Maybe<Scalars['Int']['output']>;
  v1ProjectId?: Maybe<Scalars['String']['output']>;
  v2ProjectId?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "legacy_projects" */
export type LegacyProjectsAggregate = {
  __typename?: 'LegacyProjectsAggregate';
  aggregate?: Maybe<LegacyProjectsAggregateFields>;
  nodes: Array<LegacyProjects>;
};

/** aggregate fields of "legacy_projects" */
export type LegacyProjectsAggregateFields = {
  __typename?: 'LegacyProjectsAggregateFields';
  avg?: Maybe<LegacyProjectsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<LegacyProjectsMaxFields>;
  min?: Maybe<LegacyProjectsMinFields>;
  stddev?: Maybe<LegacyProjectsStddevFields>;
  stddevPop?: Maybe<LegacyProjectsStddevPopFields>;
  stddevSamp?: Maybe<LegacyProjectsStddevSampFields>;
  sum?: Maybe<LegacyProjectsSumFields>;
  varPop?: Maybe<LegacyProjectsVarPopFields>;
  varSamp?: Maybe<LegacyProjectsVarSampFields>;
  variance?: Maybe<LegacyProjectsVarianceFields>;
};


/** aggregate fields of "legacy_projects" */
export type LegacyProjectsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LegacyProjectsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type LegacyProjectsAvgFields = {
  __typename?: 'LegacyProjectsAvgFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "legacy_projects". All fields are combined with a logical 'AND'. */
export type LegacyProjectsBoolExp = {
  _and?: InputMaybe<Array<LegacyProjectsBoolExp>>;
  _not?: InputMaybe<LegacyProjectsBoolExp>;
  _or?: InputMaybe<Array<LegacyProjectsBoolExp>>;
  id?: InputMaybe<IntComparisonExp>;
  v1ChainId?: InputMaybe<IntComparisonExp>;
  v1ProjectId?: InputMaybe<StringComparisonExp>;
  v2ProjectId?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type LegacyProjectsMaxFields = {
  __typename?: 'LegacyProjectsMaxFields';
  id?: Maybe<Scalars['Int']['output']>;
  v1ChainId?: Maybe<Scalars['Int']['output']>;
  v1ProjectId?: Maybe<Scalars['String']['output']>;
  v2ProjectId?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type LegacyProjectsMinFields = {
  __typename?: 'LegacyProjectsMinFields';
  id?: Maybe<Scalars['Int']['output']>;
  v1ChainId?: Maybe<Scalars['Int']['output']>;
  v1ProjectId?: Maybe<Scalars['String']['output']>;
  v2ProjectId?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "legacy_projects". */
export type LegacyProjectsOrderBy = {
  id?: InputMaybe<OrderBy>;
  v1ChainId?: InputMaybe<OrderBy>;
  v1ProjectId?: InputMaybe<OrderBy>;
  v2ProjectId?: InputMaybe<OrderBy>;
};

/** select columns of table "legacy_projects" */
export enum LegacyProjectsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  V1ChainId = 'v1ChainId',
  /** column name */
  V1ProjectId = 'v1ProjectId',
  /** column name */
  V2ProjectId = 'v2ProjectId'
}

/** aggregate stddev on columns */
export type LegacyProjectsStddevFields = {
  __typename?: 'LegacyProjectsStddevFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type LegacyProjectsStddevPopFields = {
  __typename?: 'LegacyProjectsStddevPopFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type LegacyProjectsStddevSampFields = {
  __typename?: 'LegacyProjectsStddevSampFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "legacy_projects" */
export type LegacyProjectsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: LegacyProjectsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type LegacyProjectsStreamCursorValueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  v1ChainId?: InputMaybe<Scalars['Int']['input']>;
  v1ProjectId?: InputMaybe<Scalars['String']['input']>;
  v2ProjectId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type LegacyProjectsSumFields = {
  __typename?: 'LegacyProjectsSumFields';
  id?: Maybe<Scalars['Int']['output']>;
  v1ChainId?: Maybe<Scalars['Int']['output']>;
};

/** aggregate varPop on columns */
export type LegacyProjectsVarPopFields = {
  __typename?: 'LegacyProjectsVarPopFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type LegacyProjectsVarSampFields = {
  __typename?: 'LegacyProjectsVarSampFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type LegacyProjectsVarianceFields = {
  __typename?: 'LegacyProjectsVarianceFields';
  id?: Maybe<Scalars['Float']['output']>;
  v1ChainId?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "pending_project_roles" */
export type PendingProjectRoles = {
  __typename?: 'PendingProjectRoles';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['Int']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "pending_project_roles" */
export type PendingProjectRolesAggregate = {
  __typename?: 'PendingProjectRolesAggregate';
  aggregate?: Maybe<PendingProjectRolesAggregateFields>;
  nodes: Array<PendingProjectRoles>;
};

/** aggregate fields of "pending_project_roles" */
export type PendingProjectRolesAggregateFields = {
  __typename?: 'PendingProjectRolesAggregateFields';
  avg?: Maybe<PendingProjectRolesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PendingProjectRolesMaxFields>;
  min?: Maybe<PendingProjectRolesMinFields>;
  stddev?: Maybe<PendingProjectRolesStddevFields>;
  stddevPop?: Maybe<PendingProjectRolesStddevPopFields>;
  stddevSamp?: Maybe<PendingProjectRolesStddevSampFields>;
  sum?: Maybe<PendingProjectRolesSumFields>;
  varPop?: Maybe<PendingProjectRolesVarPopFields>;
  varSamp?: Maybe<PendingProjectRolesVarSampFields>;
  variance?: Maybe<PendingProjectRolesVarianceFields>;
};


/** aggregate fields of "pending_project_roles" */
export type PendingProjectRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PendingProjectRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type PendingProjectRolesAvgFields = {
  __typename?: 'PendingProjectRolesAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pending_project_roles". All fields are combined with a logical 'AND'. */
export type PendingProjectRolesBoolExp = {
  _and?: InputMaybe<Array<PendingProjectRolesBoolExp>>;
  _not?: InputMaybe<PendingProjectRolesBoolExp>;
  _or?: InputMaybe<Array<PendingProjectRolesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type PendingProjectRolesMaxFields = {
  __typename?: 'PendingProjectRolesMaxFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PendingProjectRolesMinFields = {
  __typename?: 'PendingProjectRolesMinFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "pending_project_roles". */
export type PendingProjectRolesOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** select columns of table "pending_project_roles" */
export enum PendingProjectRolesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** aggregate stddev on columns */
export type PendingProjectRolesStddevFields = {
  __typename?: 'PendingProjectRolesStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type PendingProjectRolesStddevPopFields = {
  __typename?: 'PendingProjectRolesStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type PendingProjectRolesStddevSampFields = {
  __typename?: 'PendingProjectRolesStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pending_project_roles" */
export type PendingProjectRolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PendingProjectRolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PendingProjectRolesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PendingProjectRolesSumFields = {
  __typename?: 'PendingProjectRolesSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate varPop on columns */
export type PendingProjectRolesVarPopFields = {
  __typename?: 'PendingProjectRolesVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type PendingProjectRolesVarSampFields = {
  __typename?: 'PendingProjectRolesVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PendingProjectRolesVarianceFields = {
  __typename?: 'PendingProjectRolesVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "pending_round_roles" */
export type PendingRoundRoles = {
  __typename?: 'PendingRoundRoles';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['Int']['output'];
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "pending_round_roles" */
export type PendingRoundRolesAggregate = {
  __typename?: 'PendingRoundRolesAggregate';
  aggregate?: Maybe<PendingRoundRolesAggregateFields>;
  nodes: Array<PendingRoundRoles>;
};

/** aggregate fields of "pending_round_roles" */
export type PendingRoundRolesAggregateFields = {
  __typename?: 'PendingRoundRolesAggregateFields';
  avg?: Maybe<PendingRoundRolesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<PendingRoundRolesMaxFields>;
  min?: Maybe<PendingRoundRolesMinFields>;
  stddev?: Maybe<PendingRoundRolesStddevFields>;
  stddevPop?: Maybe<PendingRoundRolesStddevPopFields>;
  stddevSamp?: Maybe<PendingRoundRolesStddevSampFields>;
  sum?: Maybe<PendingRoundRolesSumFields>;
  varPop?: Maybe<PendingRoundRolesVarPopFields>;
  varSamp?: Maybe<PendingRoundRolesVarSampFields>;
  variance?: Maybe<PendingRoundRolesVarianceFields>;
};


/** aggregate fields of "pending_round_roles" */
export type PendingRoundRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PendingRoundRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type PendingRoundRolesAvgFields = {
  __typename?: 'PendingRoundRolesAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "pending_round_roles". All fields are combined with a logical 'AND'. */
export type PendingRoundRolesBoolExp = {
  _and?: InputMaybe<Array<PendingRoundRolesBoolExp>>;
  _not?: InputMaybe<PendingRoundRolesBoolExp>;
  _or?: InputMaybe<Array<PendingRoundRolesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type PendingRoundRolesMaxFields = {
  __typename?: 'PendingRoundRolesMaxFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PendingRoundRolesMinFields = {
  __typename?: 'PendingRoundRolesMinFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "pending_round_roles". */
export type PendingRoundRolesOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** select columns of table "pending_round_roles" */
export enum PendingRoundRolesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role'
}

/** aggregate stddev on columns */
export type PendingRoundRolesStddevFields = {
  __typename?: 'PendingRoundRolesStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevPop on columns */
export type PendingRoundRolesStddevPopFields = {
  __typename?: 'PendingRoundRolesStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddevSamp on columns */
export type PendingRoundRolesStddevSampFields = {
  __typename?: 'PendingRoundRolesStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "pending_round_roles" */
export type PendingRoundRolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PendingRoundRolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PendingRoundRolesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type PendingRoundRolesSumFields = {
  __typename?: 'PendingRoundRolesSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate varPop on columns */
export type PendingRoundRolesVarPopFields = {
  __typename?: 'PendingRoundRolesVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate varSamp on columns */
export type PendingRoundRolesVarSampFields = {
  __typename?: 'PendingRoundRolesVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type PendingRoundRolesVarianceFields = {
  __typename?: 'PendingRoundRolesVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "project_role_name". All fields are combined with logical 'AND'. */
export type ProjectRoleNameComparisonExp = {
  _eq?: InputMaybe<Scalars['project_role_name']['input']>;
  _gt?: InputMaybe<Scalars['project_role_name']['input']>;
  _gte?: InputMaybe<Scalars['project_role_name']['input']>;
  _in?: InputMaybe<Array<Scalars['project_role_name']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['project_role_name']['input']>;
  _lte?: InputMaybe<Scalars['project_role_name']['input']>;
  _neq?: InputMaybe<Scalars['project_role_name']['input']>;
  _nin?: InputMaybe<Array<Scalars['project_role_name']['input']>>;
};

/** columns and relationships of "project_roles" */
export type ProjectRoles = {
  __typename?: 'ProjectRoles';
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId: Scalars['String']['output'];
  role: Scalars['project_role_name']['output'];
};

/** aggregated selection of "project_roles" */
export type ProjectRolesAggregate = {
  __typename?: 'ProjectRolesAggregate';
  aggregate?: Maybe<ProjectRolesAggregateFields>;
  nodes: Array<ProjectRoles>;
};

export type ProjectRolesAggregateBoolExp = {
  count?: InputMaybe<ProjectRolesAggregateBoolExpCount>;
};

/** aggregate fields of "project_roles" */
export type ProjectRolesAggregateFields = {
  __typename?: 'ProjectRolesAggregateFields';
  avg?: Maybe<ProjectRolesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectRolesMaxFields>;
  min?: Maybe<ProjectRolesMinFields>;
  stddev?: Maybe<ProjectRolesStddevFields>;
  stddevPop?: Maybe<ProjectRolesStddevPopFields>;
  stddevSamp?: Maybe<ProjectRolesStddevSampFields>;
  sum?: Maybe<ProjectRolesSumFields>;
  varPop?: Maybe<ProjectRolesVarPopFields>;
  varSamp?: Maybe<ProjectRolesVarSampFields>;
  variance?: Maybe<ProjectRolesVarianceFields>;
};


/** aggregate fields of "project_roles" */
export type ProjectRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "project_roles" */
export type ProjectRolesAggregateOrderBy = {
  avg?: InputMaybe<ProjectRolesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProjectRolesMaxOrderBy>;
  min?: InputMaybe<ProjectRolesMinOrderBy>;
  stddev?: InputMaybe<ProjectRolesStddevOrderBy>;
  stddevPop?: InputMaybe<ProjectRolesStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ProjectRolesStddevSampOrderBy>;
  sum?: InputMaybe<ProjectRolesSumOrderBy>;
  varPop?: InputMaybe<ProjectRolesVarPopOrderBy>;
  varSamp?: InputMaybe<ProjectRolesVarSampOrderBy>;
  variance?: InputMaybe<ProjectRolesVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ProjectRolesAvgFields = {
  __typename?: 'ProjectRolesAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "project_roles" */
export type ProjectRolesAvgOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "project_roles". All fields are combined with a logical 'AND'. */
export type ProjectRolesBoolExp = {
  _and?: InputMaybe<Array<ProjectRolesBoolExp>>;
  _not?: InputMaybe<ProjectRolesBoolExp>;
  _or?: InputMaybe<Array<ProjectRolesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<StringComparisonExp>;
  role?: InputMaybe<ProjectRoleNameComparisonExp>;
};

/** aggregate max on columns */
export type ProjectRolesMaxFields = {
  __typename?: 'ProjectRolesMaxFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['project_role_name']['output']>;
};

/** order by max() on columns of table "project_roles" */
export type ProjectRolesMaxOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProjectRolesMinFields = {
  __typename?: 'ProjectRolesMinFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['project_role_name']['output']>;
};

/** order by min() on columns of table "project_roles" */
export type ProjectRolesMinOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "project_roles". */
export type ProjectRolesOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** select columns of table "project_roles" */
export enum ProjectRolesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  Role = 'role'
}

/** aggregate stddev on columns */
export type ProjectRolesStddevFields = {
  __typename?: 'ProjectRolesStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "project_roles" */
export type ProjectRolesStddevOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ProjectRolesStddevPopFields = {
  __typename?: 'ProjectRolesStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "project_roles" */
export type ProjectRolesStddevPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ProjectRolesStddevSampFields = {
  __typename?: 'ProjectRolesStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "project_roles" */
export type ProjectRolesStddevSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "project_roles" */
export type ProjectRolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProjectRolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectRolesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['project_role_name']['input']>;
};

/** aggregate sum on columns */
export type ProjectRolesSumFields = {
  __typename?: 'ProjectRolesSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "project_roles" */
export type ProjectRolesSumOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type ProjectRolesVarPopFields = {
  __typename?: 'ProjectRolesVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "project_roles" */
export type ProjectRolesVarPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ProjectRolesVarSampFields = {
  __typename?: 'ProjectRolesVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "project_roles" */
export type ProjectRolesVarSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ProjectRolesVarianceFields = {
  __typename?: 'ProjectRolesVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "project_roles" */
export type ProjectRolesVarianceOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "project_type". All fields are combined with logical 'AND'. */
export type ProjectTypeComparisonExp = {
  _eq?: InputMaybe<Scalars['project_type']['input']>;
  _gt?: InputMaybe<Scalars['project_type']['input']>;
  _gte?: InputMaybe<Scalars['project_type']['input']>;
  _in?: InputMaybe<Array<Scalars['project_type']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['project_type']['input']>;
  _lte?: InputMaybe<Scalars['project_type']['input']>;
  _neq?: InputMaybe<Scalars['project_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['project_type']['input']>>;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'Projects';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  metadata?: Maybe<Scalars['jsonb']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['numeric']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  projectRoles: Array<ProjectRoles>;
  /** An aggregate relationship */
  projectRolesAggregate: ProjectRolesAggregate;
  projectType?: Maybe<Scalars['project_type']['output']>;
  registryAddress?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  rounds: Array<Rounds>;
  /** An aggregate relationship */
  roundsAggregate: RoundsAggregate;
  tags?: Maybe<Scalars['jsonb']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "projects" */
export type ProjectsApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectRolesArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsProjectRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsRoundsArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsRoundsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


/** columns and relationships of "projects" */
export type ProjectsTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "projects" */
export type ProjectsAggregate = {
  __typename?: 'ProjectsAggregate';
  aggregate?: Maybe<ProjectsAggregateFields>;
  nodes: Array<Projects>;
};

export type ProjectsAggregateBoolExp = {
  count?: InputMaybe<ProjectsAggregateBoolExpCount>;
};

/** aggregate fields of "projects" */
export type ProjectsAggregateFields = {
  __typename?: 'ProjectsAggregateFields';
  avg?: Maybe<ProjectsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ProjectsMaxFields>;
  min?: Maybe<ProjectsMinFields>;
  stddev?: Maybe<ProjectsStddevFields>;
  stddevPop?: Maybe<ProjectsStddevPopFields>;
  stddevSamp?: Maybe<ProjectsStddevSampFields>;
  sum?: Maybe<ProjectsSumFields>;
  varPop?: Maybe<ProjectsVarPopFields>;
  varSamp?: Maybe<ProjectsVarSampFields>;
  variance?: Maybe<ProjectsVarianceFields>;
};


/** aggregate fields of "projects" */
export type ProjectsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProjectsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "projects" */
export type ProjectsAggregateOrderBy = {
  avg?: InputMaybe<ProjectsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ProjectsMaxOrderBy>;
  min?: InputMaybe<ProjectsMinOrderBy>;
  stddev?: InputMaybe<ProjectsStddevOrderBy>;
  stddevPop?: InputMaybe<ProjectsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ProjectsStddevSampOrderBy>;
  sum?: InputMaybe<ProjectsSumOrderBy>;
  varPop?: InputMaybe<ProjectsVarPopOrderBy>;
  varSamp?: InputMaybe<ProjectsVarSampOrderBy>;
  variance?: InputMaybe<ProjectsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ProjectsAvgFields = {
  __typename?: 'ProjectsAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "projects" */
export type ProjectsAvgOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type ProjectsBoolExp = {
  _and?: InputMaybe<Array<ProjectsBoolExp>>;
  _not?: InputMaybe<ProjectsBoolExp>;
  _or?: InputMaybe<Array<ProjectsBoolExp>>;
  anchorAddress?: InputMaybe<StringComparisonExp>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  applicationsAggregate?: InputMaybe<ApplicationsAggregateBoolExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  createdByAddress?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  metadataCid?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  nonce?: InputMaybe<NumericComparisonExp>;
  projectNumber?: InputMaybe<IntComparisonExp>;
  projectRoles?: InputMaybe<ProjectRolesBoolExp>;
  projectRolesAggregate?: InputMaybe<ProjectRolesAggregateBoolExp>;
  projectType?: InputMaybe<ProjectTypeComparisonExp>;
  registryAddress?: InputMaybe<StringComparisonExp>;
  rounds?: InputMaybe<RoundsBoolExp>;
  roundsAggregate?: InputMaybe<RoundsAggregateBoolExp>;
  tags?: InputMaybe<JsonbComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  updatedAtBlock?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type ProjectsMaxFields = {
  __typename?: 'ProjectsMaxFields';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['numeric']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  projectType?: Maybe<Scalars['project_type']['output']>;
  registryAddress?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "projects" */
export type ProjectsMaxOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  projectType?: InputMaybe<OrderBy>;
  registryAddress?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ProjectsMinFields = {
  __typename?: 'ProjectsMinFields';
  anchorAddress?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  metadataCid?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nonce?: Maybe<Scalars['numeric']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  projectType?: Maybe<Scalars['project_type']['output']>;
  registryAddress?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "projects" */
export type ProjectsMinOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  projectType?: InputMaybe<OrderBy>;
  registryAddress?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "projects". */
export type ProjectsOrderBy = {
  anchorAddress?: InputMaybe<OrderBy>;
  applicationsAggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  metadataCid?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  projectRolesAggregate?: InputMaybe<ProjectRolesAggregateOrderBy>;
  projectType?: InputMaybe<OrderBy>;
  registryAddress?: InputMaybe<OrderBy>;
  roundsAggregate?: InputMaybe<RoundsAggregateOrderBy>;
  tags?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** select columns of table "projects" */
export enum ProjectsSelectColumn {
  /** column name */
  AnchorAddress = 'anchorAddress',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  CreatedByAddress = 'createdByAddress',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MetadataCid = 'metadataCid',
  /** column name */
  Name = 'name',
  /** column name */
  Nonce = 'nonce',
  /** column name */
  ProjectNumber = 'projectNumber',
  /** column name */
  ProjectType = 'projectType',
  /** column name */
  RegistryAddress = 'registryAddress',
  /** column name */
  Tags = 'tags',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UpdatedAtBlock = 'updatedAtBlock'
}

/** aggregate stddev on columns */
export type ProjectsStddevFields = {
  __typename?: 'ProjectsStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "projects" */
export type ProjectsStddevOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ProjectsStddevPopFields = {
  __typename?: 'ProjectsStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "projects" */
export type ProjectsStddevPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ProjectsStddevSampFields = {
  __typename?: 'ProjectsStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "projects" */
export type ProjectsStddevSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "projects" */
export type ProjectsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProjectsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProjectsStreamCursorValueInput = {
  anchorAddress?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['jsonb']['input']>;
  metadataCid?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['numeric']['input']>;
  projectNumber?: InputMaybe<Scalars['Int']['input']>;
  projectType?: InputMaybe<Scalars['project_type']['input']>;
  registryAddress?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  updatedAtBlock?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type ProjectsSumFields = {
  __typename?: 'ProjectsSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  nonce?: Maybe<Scalars['numeric']['output']>;
  projectNumber?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "projects" */
export type ProjectsSumOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type ProjectsVarPopFields = {
  __typename?: 'ProjectsVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "projects" */
export type ProjectsVarPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ProjectsVarSampFields = {
  __typename?: 'ProjectsVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "projects" */
export type ProjectsVarSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ProjectsVarianceFields = {
  __typename?: 'ProjectsVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  nonce?: Maybe<Scalars['Float']['output']>;
  projectNumber?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "projects" */
export type ProjectsVarianceOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  nonce?: InputMaybe<OrderBy>;
  projectNumber?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "round_role_name". All fields are combined with logical 'AND'. */
export type RoundRoleNameComparisonExp = {
  _eq?: InputMaybe<Scalars['round_role_name']['input']>;
  _gt?: InputMaybe<Scalars['round_role_name']['input']>;
  _gte?: InputMaybe<Scalars['round_role_name']['input']>;
  _in?: InputMaybe<Array<Scalars['round_role_name']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['round_role_name']['input']>;
  _lte?: InputMaybe<Scalars['round_role_name']['input']>;
  _neq?: InputMaybe<Scalars['round_role_name']['input']>;
  _nin?: InputMaybe<Array<Scalars['round_role_name']['input']>>;
};

/** columns and relationships of "round_roles" */
export type RoundRoles = {
  __typename?: 'RoundRoles';
  address: Scalars['String']['output'];
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  role: Scalars['round_role_name']['output'];
  /** An object relationship */
  round?: Maybe<Rounds>;
  roundId: Scalars['String']['output'];
};

/** aggregated selection of "round_roles" */
export type RoundRolesAggregate = {
  __typename?: 'RoundRolesAggregate';
  aggregate?: Maybe<RoundRolesAggregateFields>;
  nodes: Array<RoundRoles>;
};

export type RoundRolesAggregateBoolExp = {
  count?: InputMaybe<RoundRolesAggregateBoolExpCount>;
};

/** aggregate fields of "round_roles" */
export type RoundRolesAggregateFields = {
  __typename?: 'RoundRolesAggregateFields';
  avg?: Maybe<RoundRolesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<RoundRolesMaxFields>;
  min?: Maybe<RoundRolesMinFields>;
  stddev?: Maybe<RoundRolesStddevFields>;
  stddevPop?: Maybe<RoundRolesStddevPopFields>;
  stddevSamp?: Maybe<RoundRolesStddevSampFields>;
  sum?: Maybe<RoundRolesSumFields>;
  varPop?: Maybe<RoundRolesVarPopFields>;
  varSamp?: Maybe<RoundRolesVarSampFields>;
  variance?: Maybe<RoundRolesVarianceFields>;
};


/** aggregate fields of "round_roles" */
export type RoundRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoundRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "round_roles" */
export type RoundRolesAggregateOrderBy = {
  avg?: InputMaybe<RoundRolesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoundRolesMaxOrderBy>;
  min?: InputMaybe<RoundRolesMinOrderBy>;
  stddev?: InputMaybe<RoundRolesStddevOrderBy>;
  stddevPop?: InputMaybe<RoundRolesStddevPopOrderBy>;
  stddevSamp?: InputMaybe<RoundRolesStddevSampOrderBy>;
  sum?: InputMaybe<RoundRolesSumOrderBy>;
  varPop?: InputMaybe<RoundRolesVarPopOrderBy>;
  varSamp?: InputMaybe<RoundRolesVarSampOrderBy>;
  variance?: InputMaybe<RoundRolesVarianceOrderBy>;
};

/** aggregate avg on columns */
export type RoundRolesAvgFields = {
  __typename?: 'RoundRolesAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "round_roles" */
export type RoundRolesAvgOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "round_roles". All fields are combined with a logical 'AND'. */
export type RoundRolesBoolExp = {
  _and?: InputMaybe<Array<RoundRolesBoolExp>>;
  _not?: InputMaybe<RoundRolesBoolExp>;
  _or?: InputMaybe<Array<RoundRolesBoolExp>>;
  address?: InputMaybe<StringComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  role?: InputMaybe<RoundRoleNameComparisonExp>;
  round?: InputMaybe<RoundsBoolExp>;
  roundId?: InputMaybe<StringComparisonExp>;
};

/** aggregate max on columns */
export type RoundRolesMaxFields = {
  __typename?: 'RoundRolesMaxFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  role?: Maybe<Scalars['round_role_name']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "round_roles" */
export type RoundRolesMaxOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RoundRolesMinFields = {
  __typename?: 'RoundRolesMinFields';
  address?: Maybe<Scalars['String']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  role?: Maybe<Scalars['round_role_name']['output']>;
  roundId?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "round_roles" */
export type RoundRolesMinOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roundId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "round_roles". */
export type RoundRolesOrderBy = {
  address?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  round?: InputMaybe<RoundsOrderBy>;
  roundId?: InputMaybe<OrderBy>;
};

/** select columns of table "round_roles" */
export enum RoundRolesSelectColumn {
  /** column name */
  Address = 'address',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  Role = 'role',
  /** column name */
  RoundId = 'roundId'
}

/** aggregate stddev on columns */
export type RoundRolesStddevFields = {
  __typename?: 'RoundRolesStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "round_roles" */
export type RoundRolesStddevOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type RoundRolesStddevPopFields = {
  __typename?: 'RoundRolesStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "round_roles" */
export type RoundRolesStddevPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type RoundRolesStddevSampFields = {
  __typename?: 'RoundRolesStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "round_roles" */
export type RoundRolesStddevSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "round_roles" */
export type RoundRolesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RoundRolesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RoundRolesStreamCursorValueInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  role?: InputMaybe<Scalars['round_role_name']['input']>;
  roundId?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type RoundRolesSumFields = {
  __typename?: 'RoundRolesSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "round_roles" */
export type RoundRolesSumOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type RoundRolesVarPopFields = {
  __typename?: 'RoundRolesVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "round_roles" */
export type RoundRolesVarPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type RoundRolesVarSampFields = {
  __typename?: 'RoundRolesVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "round_roles" */
export type RoundRolesVarSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RoundRolesVarianceFields = {
  __typename?: 'RoundRolesVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "round_roles" */
export type RoundRolesVarianceOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
};

/** columns and relationships of "rounds" */
export type Rounds = {
  __typename?: 'Rounds';
  adminRole?: Maybe<Scalars['String']['output']>;
  applicationMetadata?: Maybe<Scalars['jsonb']['output']>;
  applicationMetadataCid?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  applicationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  applicationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  chainId: Scalars['Int']['output'];
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  donations: Array<Donations>;
  /** An aggregate relationship */
  donationsAggregate: DonationsAggregate;
  donationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  donationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  fundedAmount?: Maybe<Scalars['numeric']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  id: Scalars['String']['output'];
  managerRole?: Maybe<Scalars['String']['output']>;
  matchAmount?: Maybe<Scalars['numeric']['output']>;
  matchAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  matchTokenAddress?: Maybe<Scalars['String']['output']>;
  matchingDistribution?: Maybe<Scalars['jsonb']['output']>;
  /** An object relationship */
  project?: Maybe<Projects>;
  projectId?: Maybe<Scalars['String']['output']>;
  readyForPayoutTransaction?: Maybe<Scalars['String']['output']>;
  roundMetadata?: Maybe<Scalars['jsonb']['output']>;
  roundMetadataCid?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  roundRoles: Array<RoundRoles>;
  /** An aggregate relationship */
  roundRolesAggregate: RoundRolesAggregate;
  strategyAddress?: Maybe<Scalars['String']['output']>;
  strategyId?: Maybe<Scalars['String']['output']>;
  strategyName?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['jsonb']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDistributed?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "rounds" */
export type RoundsApplicationMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "rounds" */
export type RoundsApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsDonationsArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsDonationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsMatchingDistributionArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "rounds" */
export type RoundsRoundMetadataArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "rounds" */
export type RoundsRoundRolesArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsRoundRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


/** columns and relationships of "rounds" */
export type RoundsTagsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "rounds" */
export type RoundsAggregate = {
  __typename?: 'RoundsAggregate';
  aggregate?: Maybe<RoundsAggregateFields>;
  nodes: Array<Rounds>;
};

export type RoundsAggregateBoolExp = {
  count?: InputMaybe<RoundsAggregateBoolExpCount>;
};

/** aggregate fields of "rounds" */
export type RoundsAggregateFields = {
  __typename?: 'RoundsAggregateFields';
  avg?: Maybe<RoundsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<RoundsMaxFields>;
  min?: Maybe<RoundsMinFields>;
  stddev?: Maybe<RoundsStddevFields>;
  stddevPop?: Maybe<RoundsStddevPopFields>;
  stddevSamp?: Maybe<RoundsStddevSampFields>;
  sum?: Maybe<RoundsSumFields>;
  varPop?: Maybe<RoundsVarPopFields>;
  varSamp?: Maybe<RoundsVarSampFields>;
  variance?: Maybe<RoundsVarianceFields>;
};


/** aggregate fields of "rounds" */
export type RoundsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoundsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "rounds" */
export type RoundsAggregateOrderBy = {
  avg?: InputMaybe<RoundsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RoundsMaxOrderBy>;
  min?: InputMaybe<RoundsMinOrderBy>;
  stddev?: InputMaybe<RoundsStddevOrderBy>;
  stddevPop?: InputMaybe<RoundsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<RoundsStddevSampOrderBy>;
  sum?: InputMaybe<RoundsSumOrderBy>;
  varPop?: InputMaybe<RoundsVarPopOrderBy>;
  varSamp?: InputMaybe<RoundsVarSampOrderBy>;
  variance?: InputMaybe<RoundsVarianceOrderBy>;
};

/** aggregate avg on columns */
export type RoundsAvgFields = {
  __typename?: 'RoundsAvgFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "rounds" */
export type RoundsAvgOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "rounds". All fields are combined with a logical 'AND'. */
export type RoundsBoolExp = {
  _and?: InputMaybe<Array<RoundsBoolExp>>;
  _not?: InputMaybe<RoundsBoolExp>;
  _or?: InputMaybe<Array<RoundsBoolExp>>;
  adminRole?: InputMaybe<StringComparisonExp>;
  applicationMetadata?: InputMaybe<JsonbComparisonExp>;
  applicationMetadataCid?: InputMaybe<StringComparisonExp>;
  applications?: InputMaybe<ApplicationsBoolExp>;
  applicationsAggregate?: InputMaybe<ApplicationsAggregateBoolExp>;
  applicationsEndTime?: InputMaybe<TimestamptzComparisonExp>;
  applicationsStartTime?: InputMaybe<TimestamptzComparisonExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAtBlock?: InputMaybe<NumericComparisonExp>;
  createdByAddress?: InputMaybe<StringComparisonExp>;
  donations?: InputMaybe<DonationsBoolExp>;
  donationsAggregate?: InputMaybe<DonationsAggregateBoolExp>;
  donationsEndTime?: InputMaybe<TimestamptzComparisonExp>;
  donationsStartTime?: InputMaybe<TimestamptzComparisonExp>;
  fundedAmount?: InputMaybe<NumericComparisonExp>;
  fundedAmountInUsd?: InputMaybe<NumericComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  managerRole?: InputMaybe<StringComparisonExp>;
  matchAmount?: InputMaybe<NumericComparisonExp>;
  matchAmountInUsd?: InputMaybe<NumericComparisonExp>;
  matchTokenAddress?: InputMaybe<StringComparisonExp>;
  matchingDistribution?: InputMaybe<JsonbComparisonExp>;
  project?: InputMaybe<ProjectsBoolExp>;
  projectId?: InputMaybe<StringComparisonExp>;
  readyForPayoutTransaction?: InputMaybe<StringComparisonExp>;
  roundMetadata?: InputMaybe<JsonbComparisonExp>;
  roundMetadataCid?: InputMaybe<StringComparisonExp>;
  roundRoles?: InputMaybe<RoundRolesBoolExp>;
  roundRolesAggregate?: InputMaybe<RoundRolesAggregateBoolExp>;
  strategyAddress?: InputMaybe<StringComparisonExp>;
  strategyId?: InputMaybe<StringComparisonExp>;
  strategyName?: InputMaybe<StringComparisonExp>;
  tags?: InputMaybe<JsonbComparisonExp>;
  timestamp?: InputMaybe<TimestamptzComparisonExp>;
  totalAmountDonatedInUsd?: InputMaybe<NumericComparisonExp>;
  totalDistributed?: InputMaybe<NumericComparisonExp>;
  totalDonationsCount?: InputMaybe<IntComparisonExp>;
  uniqueDonorsCount?: InputMaybe<IntComparisonExp>;
  updatedAtBlock?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type RoundsMaxFields = {
  __typename?: 'RoundsMaxFields';
  adminRole?: Maybe<Scalars['String']['output']>;
  applicationMetadataCid?: Maybe<Scalars['String']['output']>;
  applicationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  applicationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  donationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  donationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  fundedAmount?: Maybe<Scalars['numeric']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  managerRole?: Maybe<Scalars['String']['output']>;
  matchAmount?: Maybe<Scalars['numeric']['output']>;
  matchAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  matchTokenAddress?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  readyForPayoutTransaction?: Maybe<Scalars['String']['output']>;
  roundMetadataCid?: Maybe<Scalars['String']['output']>;
  strategyAddress?: Maybe<Scalars['String']['output']>;
  strategyId?: Maybe<Scalars['String']['output']>;
  strategyName?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDistributed?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by max() on columns of table "rounds" */
export type RoundsMaxOrderBy = {
  adminRole?: InputMaybe<OrderBy>;
  applicationMetadataCid?: InputMaybe<OrderBy>;
  applicationsEndTime?: InputMaybe<OrderBy>;
  applicationsStartTime?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  donationsEndTime?: InputMaybe<OrderBy>;
  donationsStartTime?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  managerRole?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  matchTokenAddress?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  readyForPayoutTransaction?: InputMaybe<OrderBy>;
  roundMetadataCid?: InputMaybe<OrderBy>;
  strategyAddress?: InputMaybe<OrderBy>;
  strategyId?: InputMaybe<OrderBy>;
  strategyName?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type RoundsMinFields = {
  __typename?: 'RoundsMinFields';
  adminRole?: Maybe<Scalars['String']['output']>;
  applicationMetadataCid?: Maybe<Scalars['String']['output']>;
  applicationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  applicationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  createdByAddress?: Maybe<Scalars['String']['output']>;
  donationsEndTime?: Maybe<Scalars['timestamptz']['output']>;
  donationsStartTime?: Maybe<Scalars['timestamptz']['output']>;
  fundedAmount?: Maybe<Scalars['numeric']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  managerRole?: Maybe<Scalars['String']['output']>;
  matchAmount?: Maybe<Scalars['numeric']['output']>;
  matchAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  matchTokenAddress?: Maybe<Scalars['String']['output']>;
  projectId?: Maybe<Scalars['String']['output']>;
  readyForPayoutTransaction?: Maybe<Scalars['String']['output']>;
  roundMetadataCid?: Maybe<Scalars['String']['output']>;
  strategyAddress?: Maybe<Scalars['String']['output']>;
  strategyId?: Maybe<Scalars['String']['output']>;
  strategyName?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDistributed?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by min() on columns of table "rounds" */
export type RoundsMinOrderBy = {
  adminRole?: InputMaybe<OrderBy>;
  applicationMetadataCid?: InputMaybe<OrderBy>;
  applicationsEndTime?: InputMaybe<OrderBy>;
  applicationsStartTime?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  donationsEndTime?: InputMaybe<OrderBy>;
  donationsStartTime?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  managerRole?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  matchTokenAddress?: InputMaybe<OrderBy>;
  projectId?: InputMaybe<OrderBy>;
  readyForPayoutTransaction?: InputMaybe<OrderBy>;
  roundMetadataCid?: InputMaybe<OrderBy>;
  strategyAddress?: InputMaybe<OrderBy>;
  strategyId?: InputMaybe<OrderBy>;
  strategyName?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "rounds". */
export type RoundsOrderBy = {
  adminRole?: InputMaybe<OrderBy>;
  applicationMetadata?: InputMaybe<OrderBy>;
  applicationMetadataCid?: InputMaybe<OrderBy>;
  applicationsAggregate?: InputMaybe<ApplicationsAggregateOrderBy>;
  applicationsEndTime?: InputMaybe<OrderBy>;
  applicationsStartTime?: InputMaybe<OrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  createdByAddress?: InputMaybe<OrderBy>;
  donationsAggregate?: InputMaybe<DonationsAggregateOrderBy>;
  donationsEndTime?: InputMaybe<OrderBy>;
  donationsStartTime?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  managerRole?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  matchTokenAddress?: InputMaybe<OrderBy>;
  matchingDistribution?: InputMaybe<OrderBy>;
  project?: InputMaybe<ProjectsOrderBy>;
  projectId?: InputMaybe<OrderBy>;
  readyForPayoutTransaction?: InputMaybe<OrderBy>;
  roundMetadata?: InputMaybe<OrderBy>;
  roundMetadataCid?: InputMaybe<OrderBy>;
  roundRolesAggregate?: InputMaybe<RoundRolesAggregateOrderBy>;
  strategyAddress?: InputMaybe<OrderBy>;
  strategyId?: InputMaybe<OrderBy>;
  strategyName?: InputMaybe<OrderBy>;
  tags?: InputMaybe<OrderBy>;
  timestamp?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** select columns of table "rounds" */
export enum RoundsSelectColumn {
  /** column name */
  AdminRole = 'adminRole',
  /** column name */
  ApplicationMetadata = 'applicationMetadata',
  /** column name */
  ApplicationMetadataCid = 'applicationMetadataCid',
  /** column name */
  ApplicationsEndTime = 'applicationsEndTime',
  /** column name */
  ApplicationsStartTime = 'applicationsStartTime',
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAtBlock = 'createdAtBlock',
  /** column name */
  CreatedByAddress = 'createdByAddress',
  /** column name */
  DonationsEndTime = 'donationsEndTime',
  /** column name */
  DonationsStartTime = 'donationsStartTime',
  /** column name */
  FundedAmount = 'fundedAmount',
  /** column name */
  FundedAmountInUsd = 'fundedAmountInUsd',
  /** column name */
  Id = 'id',
  /** column name */
  ManagerRole = 'managerRole',
  /** column name */
  MatchAmount = 'matchAmount',
  /** column name */
  MatchAmountInUsd = 'matchAmountInUsd',
  /** column name */
  MatchTokenAddress = 'matchTokenAddress',
  /** column name */
  MatchingDistribution = 'matchingDistribution',
  /** column name */
  ProjectId = 'projectId',
  /** column name */
  ReadyForPayoutTransaction = 'readyForPayoutTransaction',
  /** column name */
  RoundMetadata = 'roundMetadata',
  /** column name */
  RoundMetadataCid = 'roundMetadataCid',
  /** column name */
  StrategyAddress = 'strategyAddress',
  /** column name */
  StrategyId = 'strategyId',
  /** column name */
  StrategyName = 'strategyName',
  /** column name */
  Tags = 'tags',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TotalAmountDonatedInUsd = 'totalAmountDonatedInUsd',
  /** column name */
  TotalDistributed = 'totalDistributed',
  /** column name */
  TotalDonationsCount = 'totalDonationsCount',
  /** column name */
  UniqueDonorsCount = 'uniqueDonorsCount',
  /** column name */
  UpdatedAtBlock = 'updatedAtBlock'
}

/** aggregate stddev on columns */
export type RoundsStddevFields = {
  __typename?: 'RoundsStddevFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "rounds" */
export type RoundsStddevOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type RoundsStddevPopFields = {
  __typename?: 'RoundsStddevPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "rounds" */
export type RoundsStddevPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type RoundsStddevSampFields = {
  __typename?: 'RoundsStddevSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "rounds" */
export type RoundsStddevSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "rounds" */
export type RoundsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RoundsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RoundsStreamCursorValueInput = {
  adminRole?: InputMaybe<Scalars['String']['input']>;
  applicationMetadata?: InputMaybe<Scalars['jsonb']['input']>;
  applicationMetadataCid?: InputMaybe<Scalars['String']['input']>;
  applicationsEndTime?: InputMaybe<Scalars['timestamptz']['input']>;
  applicationsStartTime?: InputMaybe<Scalars['timestamptz']['input']>;
  chainId?: InputMaybe<Scalars['Int']['input']>;
  createdAtBlock?: InputMaybe<Scalars['numeric']['input']>;
  createdByAddress?: InputMaybe<Scalars['String']['input']>;
  donationsEndTime?: InputMaybe<Scalars['timestamptz']['input']>;
  donationsStartTime?: InputMaybe<Scalars['timestamptz']['input']>;
  fundedAmount?: InputMaybe<Scalars['numeric']['input']>;
  fundedAmountInUsd?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  managerRole?: InputMaybe<Scalars['String']['input']>;
  matchAmount?: InputMaybe<Scalars['numeric']['input']>;
  matchAmountInUsd?: InputMaybe<Scalars['numeric']['input']>;
  matchTokenAddress?: InputMaybe<Scalars['String']['input']>;
  matchingDistribution?: InputMaybe<Scalars['jsonb']['input']>;
  projectId?: InputMaybe<Scalars['String']['input']>;
  readyForPayoutTransaction?: InputMaybe<Scalars['String']['input']>;
  roundMetadata?: InputMaybe<Scalars['jsonb']['input']>;
  roundMetadataCid?: InputMaybe<Scalars['String']['input']>;
  strategyAddress?: InputMaybe<Scalars['String']['input']>;
  strategyId?: InputMaybe<Scalars['String']['input']>;
  strategyName?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['jsonb']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  totalAmountDonatedInUsd?: InputMaybe<Scalars['numeric']['input']>;
  totalDistributed?: InputMaybe<Scalars['numeric']['input']>;
  totalDonationsCount?: InputMaybe<Scalars['Int']['input']>;
  uniqueDonorsCount?: InputMaybe<Scalars['Int']['input']>;
  updatedAtBlock?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type RoundsSumFields = {
  __typename?: 'RoundsSumFields';
  chainId?: Maybe<Scalars['Int']['output']>;
  createdAtBlock?: Maybe<Scalars['numeric']['output']>;
  fundedAmount?: Maybe<Scalars['numeric']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  matchAmount?: Maybe<Scalars['numeric']['output']>;
  matchAmountInUsd?: Maybe<Scalars['numeric']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['numeric']['output']>;
  totalDistributed?: Maybe<Scalars['numeric']['output']>;
  totalDonationsCount?: Maybe<Scalars['Int']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Int']['output']>;
  updatedAtBlock?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "rounds" */
export type RoundsSumOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type RoundsVarPopFields = {
  __typename?: 'RoundsVarPopFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "rounds" */
export type RoundsVarPopOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type RoundsVarSampFields = {
  __typename?: 'RoundsVarSampFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "rounds" */
export type RoundsVarSampOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type RoundsVarianceFields = {
  __typename?: 'RoundsVarianceFields';
  chainId?: Maybe<Scalars['Float']['output']>;
  createdAtBlock?: Maybe<Scalars['Float']['output']>;
  fundedAmount?: Maybe<Scalars['Float']['output']>;
  fundedAmountInUsd?: Maybe<Scalars['Float']['output']>;
  matchAmount?: Maybe<Scalars['Float']['output']>;
  matchAmountInUsd?: Maybe<Scalars['Float']['output']>;
  totalAmountDonatedInUsd?: Maybe<Scalars['Float']['output']>;
  totalDistributed?: Maybe<Scalars['Float']['output']>;
  totalDonationsCount?: Maybe<Scalars['Float']['output']>;
  uniqueDonorsCount?: Maybe<Scalars['Float']['output']>;
  updatedAtBlock?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "rounds" */
export type RoundsVarianceOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAtBlock?: InputMaybe<OrderBy>;
  fundedAmount?: InputMaybe<OrderBy>;
  fundedAmountInUsd?: InputMaybe<OrderBy>;
  matchAmount?: InputMaybe<OrderBy>;
  matchAmountInUsd?: InputMaybe<OrderBy>;
  totalAmountDonatedInUsd?: InputMaybe<OrderBy>;
  totalDistributed?: InputMaybe<OrderBy>;
  totalDonationsCount?: InputMaybe<OrderBy>;
  uniqueDonorsCount?: InputMaybe<OrderBy>;
  updatedAtBlock?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type ApplicationsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApplicationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApplicationsBoolExp>;
  predicate: IntComparisonExp;
};

export type ApplicationsPayoutsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ApplicationsPayoutsBoolExp>;
  predicate: IntComparisonExp;
};

export type AttestationTxnsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AttestationTxnsBoolExp>;
  predicate: IntComparisonExp;
};

export type DonationsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DonationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<DonationsBoolExp>;
  predicate: IntComparisonExp;
};

export type ProjectRolesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectRolesBoolExp>;
  predicate: IntComparisonExp;
};

export type ProjectsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ProjectsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ProjectsBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** An array relationship */
  applicationsPayouts: Array<ApplicationsPayouts>;
  /** An aggregate relationship */
  applicationsPayoutsAggregate: ApplicationsPayoutsAggregate;
  /** fetch data from the table: "applications_payouts" using primary key columns */
  applicationsPayoutsByPk?: Maybe<ApplicationsPayouts>;
  /** An array relationship */
  attestationTxns: Array<AttestationTxns>;
  /** An aggregate relationship */
  attestationTxnsAggregate: AttestationTxnsAggregate;
  /** fetch data from the table: "attestations" */
  attestations: Array<Attestations>;
  /** fetch aggregated fields from the table: "attestations" */
  attestationsAggregate: AttestationsAggregate;
  /** fetch data from the table: "attestations" using primary key columns */
  attestationsByPk?: Maybe<Attestations>;
  /** An array relationship */
  donations: Array<Donations>;
  /** An aggregate relationship */
  donationsAggregate: DonationsAggregate;
  /** fetch data from the table: "donations" using primary key columns */
  donationsByPk?: Maybe<Donations>;
  /** fetch data from the table: "events_registry" */
  eventsRegistry: Array<EventsRegistry>;
  /** fetch aggregated fields from the table: "events_registry" */
  eventsRegistryAggregate: EventsRegistryAggregate;
  /** fetch data from the table: "events_registry" using primary key columns */
  eventsRegistryByPk?: Maybe<EventsRegistry>;
  /** fetch data from the table: "legacy_projects" */
  legacyProjects: Array<LegacyProjects>;
  /** fetch aggregated fields from the table: "legacy_projects" */
  legacyProjectsAggregate: LegacyProjectsAggregate;
  /** fetch data from the table: "legacy_projects" using primary key columns */
  legacyProjectsByPk?: Maybe<LegacyProjects>;
  /** fetch data from the table: "pending_project_roles" */
  pendingProjectRoles: Array<PendingProjectRoles>;
  /** fetch aggregated fields from the table: "pending_project_roles" */
  pendingProjectRolesAggregate: PendingProjectRolesAggregate;
  /** fetch data from the table: "pending_project_roles" using primary key columns */
  pendingProjectRolesByPk?: Maybe<PendingProjectRoles>;
  /** fetch data from the table: "pending_round_roles" */
  pendingRoundRoles: Array<PendingRoundRoles>;
  /** fetch aggregated fields from the table: "pending_round_roles" */
  pendingRoundRolesAggregate: PendingRoundRolesAggregate;
  /** fetch data from the table: "pending_round_roles" using primary key columns */
  pendingRoundRolesByPk?: Maybe<PendingRoundRoles>;
  /** An array relationship */
  projectRoles: Array<ProjectRoles>;
  /** An aggregate relationship */
  projectRolesAggregate: ProjectRolesAggregate;
  /** fetch data from the table: "project_roles" using primary key columns */
  projectRolesByPk?: Maybe<ProjectRoles>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** An array relationship */
  roundRoles: Array<RoundRoles>;
  /** An aggregate relationship */
  roundRolesAggregate: RoundRolesAggregate;
  /** fetch data from the table: "round_roles" using primary key columns */
  roundRolesByPk?: Maybe<RoundRoles>;
  /** An array relationship */
  rounds: Array<Rounds>;
  /** An aggregate relationship */
  roundsAggregate: RoundsAggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  roundsByPk?: Maybe<Rounds>;
  /** execute function "search_projects" which returns "projects" */
  searchProjects: Array<Projects>;
  /** execute function "search_projects" and query aggregates on result of table type "projects" */
  searchProjectsAggregate: ProjectsAggregate;
};


export type Query_RootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Query_RootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Query_RootApplicationsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  roundId: Scalars['String']['input'];
};


export type Query_RootApplicationsPayoutsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


export type Query_RootApplicationsPayoutsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


export type Query_RootApplicationsPayoutsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootAttestationTxnsArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


export type Query_RootAttestationTxnsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


export type Query_RootAttestationsArgs = {
  distinctOn?: InputMaybe<Array<AttestationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationsOrderBy>>;
  where?: InputMaybe<AttestationsBoolExp>;
};


export type Query_RootAttestationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationsOrderBy>>;
  where?: InputMaybe<AttestationsBoolExp>;
};


export type Query_RootAttestationsByPkArgs = {
  chainId: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
};


export type Query_RootDonationsArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


export type Query_RootDonationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


export type Query_RootDonationsByPkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootEventsRegistryArgs = {
  distinctOn?: InputMaybe<Array<EventsRegistrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsRegistryOrderBy>>;
  where?: InputMaybe<EventsRegistryBoolExp>;
};


export type Query_RootEventsRegistryAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsRegistrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsRegistryOrderBy>>;
  where?: InputMaybe<EventsRegistryBoolExp>;
};


export type Query_RootEventsRegistryByPkArgs = {
  chainId: Scalars['Int']['input'];
};


export type Query_RootLegacyProjectsArgs = {
  distinctOn?: InputMaybe<Array<LegacyProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LegacyProjectsOrderBy>>;
  where?: InputMaybe<LegacyProjectsBoolExp>;
};


export type Query_RootLegacyProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LegacyProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LegacyProjectsOrderBy>>;
  where?: InputMaybe<LegacyProjectsBoolExp>;
};


export type Query_RootLegacyProjectsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPendingProjectRolesArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectRolesOrderBy>>;
  where?: InputMaybe<PendingProjectRolesBoolExp>;
};


export type Query_RootPendingProjectRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectRolesOrderBy>>;
  where?: InputMaybe<PendingProjectRolesBoolExp>;
};


export type Query_RootPendingProjectRolesByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPendingRoundRolesArgs = {
  distinctOn?: InputMaybe<Array<PendingRoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingRoundRolesOrderBy>>;
  where?: InputMaybe<PendingRoundRolesBoolExp>;
};


export type Query_RootPendingRoundRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingRoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingRoundRolesOrderBy>>;
  where?: InputMaybe<PendingRoundRolesBoolExp>;
};


export type Query_RootPendingRoundRolesByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProjectRolesArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


export type Query_RootProjectRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


export type Query_RootProjectRolesByPkArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
  role: Scalars['project_role_name']['input'];
};


export type Query_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootProjectsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


export type Query_RootRoundRolesArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


export type Query_RootRoundRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


export type Query_RootRoundRolesByPkArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  role: Scalars['round_role_name']['input'];
  roundId: Scalars['String']['input'];
};


export type Query_RootRoundsArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


export type Query_RootRoundsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


export type Query_RootRoundsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


export type Query_RootSearchProjectsArgs = {
  args: SearchProjectsArgs;
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Query_RootSearchProjectsAggregateArgs = {
  args: SearchProjectsArgs;
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};

export type RoundRolesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RoundRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoundRolesBoolExp>;
  predicate: IntComparisonExp;
};

export type RoundsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RoundsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<RoundsBoolExp>;
  predicate: IntComparisonExp;
};

export type SearchProjectsArgs = {
  search_term?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  applications: Array<Applications>;
  /** An aggregate relationship */
  applicationsAggregate: ApplicationsAggregate;
  /** fetch data from the table: "applications" using primary key columns */
  applicationsByPk?: Maybe<Applications>;
  /** An array relationship */
  applicationsPayouts: Array<ApplicationsPayouts>;
  /** An aggregate relationship */
  applicationsPayoutsAggregate: ApplicationsPayoutsAggregate;
  /** fetch data from the table: "applications_payouts" using primary key columns */
  applicationsPayoutsByPk?: Maybe<ApplicationsPayouts>;
  /** fetch data from the table in a streaming manner: "applications_payouts" */
  applicationsPayoutsStream: Array<ApplicationsPayouts>;
  /** fetch data from the table in a streaming manner: "applications" */
  applicationsStream: Array<Applications>;
  /** An array relationship */
  attestationTxns: Array<AttestationTxns>;
  /** An aggregate relationship */
  attestationTxnsAggregate: AttestationTxnsAggregate;
  /** fetch data from the table in a streaming manner: "attestation_txns" */
  attestationTxnsStream: Array<AttestationTxns>;
  /** fetch data from the table: "attestations" */
  attestations: Array<Attestations>;
  /** fetch aggregated fields from the table: "attestations" */
  attestationsAggregate: AttestationsAggregate;
  /** fetch data from the table: "attestations" using primary key columns */
  attestationsByPk?: Maybe<Attestations>;
  /** fetch data from the table in a streaming manner: "attestations" */
  attestationsStream: Array<Attestations>;
  /** An array relationship */
  donations: Array<Donations>;
  /** An aggregate relationship */
  donationsAggregate: DonationsAggregate;
  /** fetch data from the table: "donations" using primary key columns */
  donationsByPk?: Maybe<Donations>;
  /** fetch data from the table in a streaming manner: "donations" */
  donationsStream: Array<Donations>;
  /** fetch data from the table: "events_registry" */
  eventsRegistry: Array<EventsRegistry>;
  /** fetch aggregated fields from the table: "events_registry" */
  eventsRegistryAggregate: EventsRegistryAggregate;
  /** fetch data from the table: "events_registry" using primary key columns */
  eventsRegistryByPk?: Maybe<EventsRegistry>;
  /** fetch data from the table in a streaming manner: "events_registry" */
  eventsRegistryStream: Array<EventsRegistry>;
  /** fetch data from the table: "legacy_projects" */
  legacyProjects: Array<LegacyProjects>;
  /** fetch aggregated fields from the table: "legacy_projects" */
  legacyProjectsAggregate: LegacyProjectsAggregate;
  /** fetch data from the table: "legacy_projects" using primary key columns */
  legacyProjectsByPk?: Maybe<LegacyProjects>;
  /** fetch data from the table in a streaming manner: "legacy_projects" */
  legacyProjectsStream: Array<LegacyProjects>;
  /** fetch data from the table: "pending_project_roles" */
  pendingProjectRoles: Array<PendingProjectRoles>;
  /** fetch aggregated fields from the table: "pending_project_roles" */
  pendingProjectRolesAggregate: PendingProjectRolesAggregate;
  /** fetch data from the table: "pending_project_roles" using primary key columns */
  pendingProjectRolesByPk?: Maybe<PendingProjectRoles>;
  /** fetch data from the table in a streaming manner: "pending_project_roles" */
  pendingProjectRolesStream: Array<PendingProjectRoles>;
  /** fetch data from the table: "pending_round_roles" */
  pendingRoundRoles: Array<PendingRoundRoles>;
  /** fetch aggregated fields from the table: "pending_round_roles" */
  pendingRoundRolesAggregate: PendingRoundRolesAggregate;
  /** fetch data from the table: "pending_round_roles" using primary key columns */
  pendingRoundRolesByPk?: Maybe<PendingRoundRoles>;
  /** fetch data from the table in a streaming manner: "pending_round_roles" */
  pendingRoundRolesStream: Array<PendingRoundRoles>;
  /** An array relationship */
  projectRoles: Array<ProjectRoles>;
  /** An aggregate relationship */
  projectRolesAggregate: ProjectRolesAggregate;
  /** fetch data from the table: "project_roles" using primary key columns */
  projectRolesByPk?: Maybe<ProjectRoles>;
  /** fetch data from the table in a streaming manner: "project_roles" */
  projectRolesStream: Array<ProjectRoles>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projectsAggregate: ProjectsAggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projectsByPk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projectsStream: Array<Projects>;
  /** An array relationship */
  roundRoles: Array<RoundRoles>;
  /** An aggregate relationship */
  roundRolesAggregate: RoundRolesAggregate;
  /** fetch data from the table: "round_roles" using primary key columns */
  roundRolesByPk?: Maybe<RoundRoles>;
  /** fetch data from the table in a streaming manner: "round_roles" */
  roundRolesStream: Array<RoundRoles>;
  /** An array relationship */
  rounds: Array<Rounds>;
  /** An aggregate relationship */
  roundsAggregate: RoundsAggregate;
  /** fetch data from the table: "rounds" using primary key columns */
  roundsByPk?: Maybe<Rounds>;
  /** fetch data from the table in a streaming manner: "rounds" */
  roundsStream: Array<Rounds>;
  /** execute function "search_projects" which returns "projects" */
  searchProjects: Array<Projects>;
  /** execute function "search_projects" and query aggregates on result of table type "projects" */
  searchProjectsAggregate: ProjectsAggregate;
};


export type Subscription_RootApplicationsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsOrderBy>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootApplicationsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
  roundId: Scalars['String']['input'];
};


export type Subscription_RootApplicationsPayoutsArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


export type Subscription_RootApplicationsPayoutsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationsPayoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ApplicationsPayoutsOrderBy>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


export type Subscription_RootApplicationsPayoutsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootApplicationsPayoutsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApplicationsPayoutsStreamCursorInput>>;
  where?: InputMaybe<ApplicationsPayoutsBoolExp>;
};


export type Subscription_RootApplicationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ApplicationsStreamCursorInput>>;
  where?: InputMaybe<ApplicationsBoolExp>;
};


export type Subscription_RootAttestationTxnsArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


export type Subscription_RootAttestationTxnsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationTxnsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationTxnsOrderBy>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


export type Subscription_RootAttestationTxnsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AttestationTxnsStreamCursorInput>>;
  where?: InputMaybe<AttestationTxnsBoolExp>;
};


export type Subscription_RootAttestationsArgs = {
  distinctOn?: InputMaybe<Array<AttestationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationsOrderBy>>;
  where?: InputMaybe<AttestationsBoolExp>;
};


export type Subscription_RootAttestationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AttestationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AttestationsOrderBy>>;
  where?: InputMaybe<AttestationsBoolExp>;
};


export type Subscription_RootAttestationsByPkArgs = {
  chainId: Scalars['Int']['input'];
  uid: Scalars['String']['input'];
};


export type Subscription_RootAttestationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AttestationsStreamCursorInput>>;
  where?: InputMaybe<AttestationsBoolExp>;
};


export type Subscription_RootDonationsArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


export type Subscription_RootDonationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DonationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DonationsOrderBy>>;
  where?: InputMaybe<DonationsBoolExp>;
};


export type Subscription_RootDonationsByPkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootDonationsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<DonationsStreamCursorInput>>;
  where?: InputMaybe<DonationsBoolExp>;
};


export type Subscription_RootEventsRegistryArgs = {
  distinctOn?: InputMaybe<Array<EventsRegistrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsRegistryOrderBy>>;
  where?: InputMaybe<EventsRegistryBoolExp>;
};


export type Subscription_RootEventsRegistryAggregateArgs = {
  distinctOn?: InputMaybe<Array<EventsRegistrySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<EventsRegistryOrderBy>>;
  where?: InputMaybe<EventsRegistryBoolExp>;
};


export type Subscription_RootEventsRegistryByPkArgs = {
  chainId: Scalars['Int']['input'];
};


export type Subscription_RootEventsRegistryStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<EventsRegistryStreamCursorInput>>;
  where?: InputMaybe<EventsRegistryBoolExp>;
};


export type Subscription_RootLegacyProjectsArgs = {
  distinctOn?: InputMaybe<Array<LegacyProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LegacyProjectsOrderBy>>;
  where?: InputMaybe<LegacyProjectsBoolExp>;
};


export type Subscription_RootLegacyProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<LegacyProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LegacyProjectsOrderBy>>;
  where?: InputMaybe<LegacyProjectsBoolExp>;
};


export type Subscription_RootLegacyProjectsByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLegacyProjectsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<LegacyProjectsStreamCursorInput>>;
  where?: InputMaybe<LegacyProjectsBoolExp>;
};


export type Subscription_RootPendingProjectRolesArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectRolesOrderBy>>;
  where?: InputMaybe<PendingProjectRolesBoolExp>;
};


export type Subscription_RootPendingProjectRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingProjectRolesOrderBy>>;
  where?: InputMaybe<PendingProjectRolesBoolExp>;
};


export type Subscription_RootPendingProjectRolesByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPendingProjectRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PendingProjectRolesStreamCursorInput>>;
  where?: InputMaybe<PendingProjectRolesBoolExp>;
};


export type Subscription_RootPendingRoundRolesArgs = {
  distinctOn?: InputMaybe<Array<PendingRoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingRoundRolesOrderBy>>;
  where?: InputMaybe<PendingRoundRolesBoolExp>;
};


export type Subscription_RootPendingRoundRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<PendingRoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PendingRoundRolesOrderBy>>;
  where?: InputMaybe<PendingRoundRolesBoolExp>;
};


export type Subscription_RootPendingRoundRolesByPkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPendingRoundRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PendingRoundRolesStreamCursorInput>>;
  where?: InputMaybe<PendingRoundRolesBoolExp>;
};


export type Subscription_RootProjectRolesArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


export type Subscription_RootProjectRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectRolesOrderBy>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


export type Subscription_RootProjectRolesByPkArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  projectId: Scalars['String']['input'];
  role: Scalars['project_role_name']['input'];
};


export type Subscription_RootProjectRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProjectRolesStreamCursorInput>>;
  where?: InputMaybe<ProjectRolesBoolExp>;
};


export type Subscription_RootProjectsArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootProjectsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


export type Subscription_RootProjectsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProjectsStreamCursorInput>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootRoundRolesArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


export type Subscription_RootRoundRolesAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundRolesOrderBy>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


export type Subscription_RootRoundRolesByPkArgs = {
  address: Scalars['String']['input'];
  chainId: Scalars['Int']['input'];
  role: Scalars['round_role_name']['input'];
  roundId: Scalars['String']['input'];
};


export type Subscription_RootRoundRolesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RoundRolesStreamCursorInput>>;
  where?: InputMaybe<RoundRolesBoolExp>;
};


export type Subscription_RootRoundsArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


export type Subscription_RootRoundsAggregateArgs = {
  distinctOn?: InputMaybe<Array<RoundsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RoundsOrderBy>>;
  where?: InputMaybe<RoundsBoolExp>;
};


export type Subscription_RootRoundsByPkArgs = {
  chainId: Scalars['Int']['input'];
  id: Scalars['String']['input'];
};


export type Subscription_RootRoundsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<RoundsStreamCursorInput>>;
  where?: InputMaybe<RoundsBoolExp>;
};


export type Subscription_RootSearchProjectsArgs = {
  args: SearchProjectsArgs;
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};


export type Subscription_RootSearchProjectsAggregateArgs = {
  args: SearchProjectsArgs;
  distinctOn?: InputMaybe<Array<ProjectsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
  where?: InputMaybe<ProjectsBoolExp>;
};

export type GetProjectNamesQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
}>;


export type GetProjectNamesQuery = { __typename?: 'query_root', applications: Array<{ __typename?: 'Applications', project?: { __typename?: 'Projects', chainId: number, name?: string | null, id: string } | null }> };

export type GetProjectQueryVariables = Exact<{
  projectIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetProjectQuery = { __typename?: 'query_root', projects: Array<{ __typename?: 'Projects', name?: string | null, metadata?: any | null, applications: Array<{ __typename?: 'Applications', id: string, totalAmountDonatedInUsd?: any | null, totalDonationsCount?: number | null, uniqueDonorsCount?: number | null, chainId: number, round?: { __typename?: 'Rounds', id: string, donationsEndTime?: any | null, donationsStartTime?: any | null, roundMetadata?: any | null } | null, donations: Array<{ __typename?: 'Donations', id: string, chainId?: number | null, amountInUsd?: any | null, transactionHash?: string | null, donorAddress?: string | null, tokenAddress?: string | null, timestamp?: any | null, round?: { __typename?: 'Rounds', id: string, roundMetadata?: any | null } | null }> }> }> };


export const GetProjectNamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectNames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"APPROVED","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"projectId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"200"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"project"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetProjectNamesQuery, GetProjectNamesQueryVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectIds"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectIds"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"applications"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"APPROVED"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"totalAmountDonatedInUsd"}},{"kind":"Field","name":{"kind":"Name","value":"totalDonationsCount"}},{"kind":"Field","name":{"kind":"Name","value":"uniqueDonorsCount"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"donationsEndTime"}},{"kind":"Field","name":{"kind":"Name","value":"donationsStartTime"}},{"kind":"Field","name":{"kind":"Name","value":"roundMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"donations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chainId"}},{"kind":"Field","name":{"kind":"Name","value":"amountInUsd"}},{"kind":"Field","name":{"kind":"Name","value":"transactionHash"}},{"kind":"Field","name":{"kind":"Name","value":"donorAddress"}},{"kind":"Field","name":{"kind":"Name","value":"round"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roundMetadata"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tokenAddress"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;