import { LoadingProvider } from '@/components/common/LoadingProvider'
import { ToastProvider } from '@/components/common/ToastProvider'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokemons</title>
        <meta name="description" content="All pokemons page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <LoadingProvider>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </LoadingProvider>
    </>
  )
}
