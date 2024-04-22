import { Chain } from './chains';

export interface ChainRoundsData {
  chain: Chain;
  rounds: Round[];
}

export interface RoundInfo {
  id: string;
  name: string;
  amountUSD: number;
  roundStartTime: string;
  roundEndTime: string;
  dateText: string;
  logo: string;
  chain: string;
}

export interface Round {
  id: string;
  amountUSD: number;
  votes: number;
  token: string;
  matchAmount: string;
  matchAmountUSD: number;
  uniqueContributors: number;
  applicationMetaPtr: string;
  applicationMetadata: ApplicationMetadata;
  metaPtr: string;
  metadata: Metadata;
  applicationsStartTime: string;
  applicationsEndTime: string;
  roundStartTime: string;
  roundEndTime: string;
  createdAtBlock: number;
  updatedAtBlock: number;
}

interface ApplicationMetadata {
  lastUpdatedOn: number;
  applicationSchema: ApplicationSchema;
  version: string;
}

interface ApplicationSchema {
  questions: Question[];
  requirements: Requirements;
}

interface Question {
  id: number;
  title: string;
  type: string;
  required: boolean;
  info: string;
  hidden: boolean;
  encrypted: boolean;
  choices?: string[];
}

interface Requirements {
  twitter: Twitter;
  github: Github;
}

interface Twitter {
  required: boolean;
  verification: boolean;
}

interface Github {
  required: boolean;
  verification: boolean;
}

interface Metadata {
  matchingFunds?: MatchingFunds;
  feesPercentage: number;
  feesAddress: string;
  name: string;
  support: Support;
  eligibility: Eligibility;
  programContractAddress: string;
  quadraticFundingConfig?: QuadraticFundingConfig;
  roundType?: string;
}

interface MatchingFunds {
  matchingCap: boolean;
  matchingFundsAvailable: number;
}

interface Support {
  type: string;
  info: string;
}

interface Eligibility {
  description: string;
  requirements: Requirement[];
}

interface Requirement {
  requirement: string;
}

interface QuadraticFundingConfig {
  matchingFundsAvailable: number;
  matchingCap: boolean;
  minDonationThreshold: boolean;
  sybilDefense: boolean;
  minDonationThresholdAmount?: number;
  matchingCapAmount?: number;
}
