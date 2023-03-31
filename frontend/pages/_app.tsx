import 'reset-css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
// @ts-ignore
import { Theme } from '@carbon/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme theme="g100">
      <Component {...pageProps} />
    </Theme>
  )
}
