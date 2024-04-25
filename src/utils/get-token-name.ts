import { TOKENS } from '@/core/constants';

export const getTokenName = (chainId: number, address: string) => {
  const tokenKey = `${chainId}:${address?.toLowerCase()}`;
  const token =
    address && tokenKey in TOKENS ? TOKENS[tokenKey as keyof typeof TOKENS] : tokenKey;

  return token;
};
