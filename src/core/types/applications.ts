/* eslint-disable @typescript-eslint/no-explicit-any */

export interface GroupedApplications {
  key: string;
  applications: Application[];
}

export interface Application {
  id: string;
  projectId: string;
  roundId: string;
  status: string;
  amountUSD: number;
  votes: number;
  uniqueContributors: number;
  metadata: Metadata;
  createdAtBlock: number;
  statusUpdatedAtBlock: number;
  statusSnapshots: StatusSnapshot[];
}

interface Metadata {
  signature: string;
  application: MetadataApplication;
}

interface MetadataApplication {
  round: string;
  recipient: string;
  project: Project;
  answers: Answer[];
}

interface Project {
  lastUpdated: number;
  createdAt: number;
  id: string;
  title: string;
  description: string;
  website: string;
  bannerImg?: string;
  logoImg?: string;
  metaPtr: MetaPtr;
  userGithub?: string;
  projectTwitter: string;
  credentials: Credentials;
  projectGithub?: string;
}

interface MetaPtr {
  protocol: string;
  pointer: string;
}

interface Credentials {
  twitter?: Twitter;
  github?: Github;
}

interface Twitter {
  '@context': string[];
  type: string[];
  credentialSubject: CredentialSubject;
  issuer: string;
  issuanceDate: string;
  proof: Proof;
  expirationDate: string;
}

interface CredentialSubject {
  id: string;
  '@context': Context[];
  hash: string;
  provider: string;
}

interface Context {
  hash: string;
  provider: string;
}

interface Proof {
  type: string;
  proofPurpose: string;
  verificationMethod: string;
  created: string;
  jws: string;
}

interface Github {
  '@context': string[];
  type: string[];
  credentialSubject: CredentialSubject2;
  issuer: string;
  issuanceDate: string;
  proof: Proof2;
  expirationDate: string;
}

interface CredentialSubject2 {
  id: string;
  provider: string;
  hash: string;
  '@context': Context2[];
}

interface Context2 {
  hash: string;
  provider: string;
}

interface Proof2 {
  type: string;
  proofPurpose: string;
  verificationMethod: string;
  created: string;
  jws: string;
}

interface Answer {
  questionId: number;
  question: string;
  type: string;
  hidden: boolean;
  encryptedAnswer?: EncryptedAnswer;
  answer: any;
}

interface EncryptedAnswer {
  ciphertext: string;
  encryptedSymmetricKey: string;
}

interface StatusSnapshot {
  status: string;
  statusUpdatedAtBlock: number;
}
