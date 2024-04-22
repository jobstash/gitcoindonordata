export interface ApprovedProject {
  key: string; // Normalized title
  estimatedFunds: string;
  logo: string | undefined;
  banner: string | undefined;
  inputValue: string;
  projects: {
    id: string;
    title: string;
    projectId: string;
    roundId: string;
    amountUSD: number;
  }[];
}
