import { Chain } from '@wagmi/core'
 
export const altheaL1 = {
  id: 417834,
  name: 'Althea L1',
  network: 'evm',
  nativeCurrency: {
    decimals: 18,
    name: 'Althea',
    symbol: 'aalthea',
  },
  rpcUrls: {
    public: { http: ['https://althea.zone'] },
    default: { http: ['https://althea.zone'] },
  },
  blockExplorers: {
    default: { name: 'Althea', url: 'https://althea.explorers.guru/blocks' },
  },
  contracts: {
    /*
     * puede ser util agregar cuentas de NFTs importantes
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
    */
  },
} as const satisfies Chain