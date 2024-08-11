import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { useWeb3Modal } from '@web3modal/wagmi/react'
// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId from https://cloud.walletconnect.com
const projectId = '466743c3f815aa3a9922c8af2ea35a72'

// 2. Create wagmiConfig
const metadata = {
  name: 'Jacaton',
  description: 'Jacaton Description',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  metadata,
  wagmiConfig: config,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export function AppKitProvider({ children }) {
  const w3m = useWeb3Modal();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <button style={{backgroundColor:"#0b51c1"}} onClick={w3m.open}>Connect Wallet</button>
        </QueryClientProvider>
    </WagmiProvider>
  )
}