import { Project } from "@/gql/graphql";
export type WithValue<T = string> = { value: T };

export interface DonationRow {
  id: string;
  timestamp: string;
  round: {
    id: string;
    roundMetadata: {
      name: string;
    };
  };
  transactionHash: string;
  donorAddress: string;
  tokenAddress: string;
  chainId: number;
  amountInUsd: number;
}


  
export type SearchProjectsResponse = { data: { searchProjects: Project[] }, isFetching: boolean };

export type { Project };
