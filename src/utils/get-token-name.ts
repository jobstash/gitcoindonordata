import { TOKENS } from '@/core/constants';

export const getTokenName = (chainId: number | undefined, address: string | undefined) => {
  const tokenKey = `${chainId}:${address?.toLowerCase()}`;
  const token =
    address && tokenKey in TOKENS ? TOKENS[tokenKey as keyof typeof TOKENS] : tokenKey;

  return token;
};
