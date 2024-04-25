import { GridColumn } from '@glideapps/glide-data-grid';

export const GQL_ENDPOINT = 'https://grants-stack-indexer-v2.gitcoin.co/graphql';

export const STALETIME = {
  DEFAULT: 1000 * 60 * 60, // 1 hr
};

export const IPFS_URL = 'https://d16c97c2np8a2o.cloudfront.net/ipfs';

export const CHAINS = [
  {
    id: '1',
    name: 'Ethereum',
    url: 'https://ethereum.org/en/',
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    explorer: 'https://etherscan.io/tx/',
  },
  {
    id: '10',
    name: 'Optimism',
    url: 'https://www.optimism.io/',
    logo: 'https://cryptologos.cc/logos/optimism-ethereum-op-logo.png',
    explorer: 'https://optimistic.etherscan.io/tx/',
  },
  {
    id: '137',
    name: 'Polygon',
    url: 'https://polygon.technology/',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    explorer: 'https://polygonscan.com/tx/',
  },
  {
    id: '250',
    name: 'Fantom',
    url: 'https://fantom.foundation/',
    logo: 'https://cryptologos.cc/logos/fantom-ftm-logo.png',
    explorer: 'https://ftmscan.com/tx/',
  },
  {
    id: '280',
    name: 'zkSync Era Goerli Testnet (deprecated)',
    url: 'https://zksync.io',
    logo: 'https://raw.githubusercontent.com/bxpana/zksync-community-brand-assets/main/zkSync/zkSync%20Era%E2%88%8E%20/Icons/icon_zkSync_Era.png',
    explorer: 'https://goerli.explorer.zksync.io/tx/',
  },
  {
    id: '324',
    name: 'zkSync',
    url: 'https://zksync.io',
    logo: 'https://raw.githubusercontent.com/bxpana/zksync-community-brand-assets/main/zkSync/zkSync%20Era%E2%88%8E%20/Icons/icon_zkSync_Era.png',
    explorer: 'https://explorer.zksync.io/tx/',
  },
  {
    id: '42161',
    name: 'Arbitrum',
    url: 'https://arbitrum.io/',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
    explorer: 'https://arbiscan.io/tx/',
  },
  {
    id: '421613',
    name: 'Arbitrum Goerli',
    url: 'https://arbitrum.io/',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg',
    explorer: 'https://sepolia.arbiscan.io/',
  },
  {
    id: '424',
    name: 'Public Goods Network (PGN)',
    url: 'https://publicgoods.network/',
    logo: 'https://assets-global.website-files.com/647f92a0f2ef1e7c88494a60/64ef3db3ca11efa33bd2e032_Logo%20circle%20Black.svg',
    explorer: 'https://pgn.superscan.network/tx/',
  },
  {
    id: '43114',
    name: 'Avalanche',
    url: 'https://www.avax.network/',
    logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    explorer: 'https://subnets.avax.network/c-chain/tx/',
  },
  {
    id: '80001',
    name: 'Mumbai (Polygon)',
    url: 'https://polygon.technology/',
    logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png',
    explorer: 'https://mumbai.polygonscan.com/tx/',
  },
  {
    id: '8453',
    name: 'Base',
    url: 'https://www.base.org/',
    logo: 'https://icons.llamao.fi/icons/chains/rsz_base.jpg',
    explorer: 'https://basescan.org/tx/',
  },
];

export const TOKENS = {
  '1:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48': 'USDC',
  '1:0x6b175474e89094c44da98b954eedeac495271d0f': 'DAI',
  '1:0x0000000000000000000000000000000000000000': 'ETH',
  '1:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': 'ETH',
  '10:0x7f5c764cbc14f9669b88837ca1490cca17c31607': 'USDC',
  '10:0xda10009cbd5d07dd0cecc66161fc93d7c9000da1': 'DAI',
  '10:0x4f604735c1cf31399c6e711d5962b2b3e0225ad3': 'USDGLO',
  '10:0x93a5347036f69bc6f37ed2b59cbcdda927719217': 'GIST',
  '10:0x0000000000000000000000000000000000000000': 'ETH',
  '10:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': 'ETH',
  '10:0x4200000000000000000000000000000000000042': 'OP',
  '1:0x8db0f9ee54753b91ec1d81bf68074be82ed30feb': 'DAI',
  '1:0xa9dd7983b57e1865024d27110bab098b66087e8f': 'DAI',
  '1:0x78e0d07c4a08adffe610113310163b40e7e47e81': 'USDC',
  '250:0x04068da6c83afcfa0e13ba15a6696662335d5b75': 'USDC',
  '250:0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e': 'DAI',
  '250:0x0000000000000000000000000000000000000000': 'FTM',
  '250:0x83791638da5eb2faa432aff1c65fba47c5d29510': 'GcV',
  '1:0x5fbdb2315678afecb367f032d93f642f64180aa3': 'DAI',
  '1:0x7c6b91d9be155a6db01f749217d76ff02a7227f2': 'GTC',
  '1:0x6c121674ba6736644a7e73a8741407fe8a5ee5ba': 'DAI',
  '42161:0xaf88d065e77c8cc2239327c5edb3a432268e5831': 'USDC',
  '42161:0x912ce59144191c1204e64559fe8253a0e49e6548': 'ARB',
  '42161:0x4f604735c1cf31399c6e711d5962b2b3e0225ad3': 'USDGLO',
  '42161:0x0000000000000000000000000000000000000000': 'ETH',
  '42161:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': 'ETH',
  '1:0x7f9a7db853ca816b9a138aee3380ef34c437dee0': 'GTC',
  '1:0x9999f7fea5938fd3b1e26a12c3f2fb024e194f97': 'USDC',
  '1:0x3c499c542cef5e3811e1192ce70d8cc03d5c3359': 'USDC',
  '1:0x3a9a81d576d83ff21f26f325066054540720fc34': 'DATA',
  '1:0x833589fcd6edb6e08f4c7c32d4f71b54bda02913': 'USDC',
  '1:0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4': 'USDC',
  '1:0x493257fd37edb34451f62edf8d2a0c418852ba4c': 'USDT',
  '1:0x4b9eb6c0b6ea15176bbf62841c6b2a8a398cb656': 'DAI',
  '1:0x503234f203fc7eb888eec8513210612a43cf6115': 'LUSD',
  '1:0x0e97c7a0f8b2c9885c8ac9fc6136e829cbc21d42': 'MUTE',
  '1:0x8fd03cd97da068cc242ab7551dc4100dd405e8c7': 'TEST',
  '43114:0x0000000000000000000000000000000000000000': 'AVAX',
  '43114:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': 'AVAX',
  '1:0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e': 'USDC',
  '1:0xc2332031de487f430fae3290c05465d907785eda': 'MTK',
  '1:0x06efdbff2a14a7c8e15944d1f4a48f9f95f663a4': 'USDC',
  '713715:0x0000000000000000000000000000000000000000': 'SEI',
  '713715:0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee': 'SEI',
  '713715:0x26841a0a5d958b128209f4ea9a1dd7e61558c330': 'WSEI',
  '424:0x0000000000000000000000000000000000000000': 'ETH',
  '424:0x6c121674ba6736644a7e73a8741407fe8a5ee5ba': 'DAI',
  '324:0x0000000000000000000000000000000000000000': 'ETH',
};

export const ENS_ENDPOINT = 'https://gitcoin.enstate.rs';

export const DONATIONS_COLUMNS: GridColumn[] = [
  {
    id: 'timestamp' as const,
    title: 'DATE',
    grow: 1,
  },
  {
    id: 'roundId',
    title: 'ROUND',
    grow: 1,
  },
  {
    id: 'transactionHash',
    title: 'TXN HASH',
    grow: 1,
  },
  {
    id: 'donorAddress',
    title: 'VOTER ADDRESS',
    grow: 1,
  },
  {
    id: 'tokenAddress',
    title: 'TOKEN',
    grow: 1,
  },
  {
    id: 'amountInUsd',
    title: 'USD',
    grow: 1,
  },
] as const;
