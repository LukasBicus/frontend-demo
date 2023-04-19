import { LoadingProvider } from '@/components/common/LoadingProvider'
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  )
}
