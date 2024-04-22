export interface Vote {
  id: string;
  transaction: string;
  blockNumber: number;
  projectId: string;
  applicationId: string;
  roundId: string;
  voter: string;
  grantAddress: string;
  token: string;
  amount: string;
  amountUSD: number;
  amountRoundToken: string;
}
