import { Loading } from '@carbon/react'
import { noop } from 'lodash'
import React, { useCallback, useContext, useState } from 'react'

const LoadingContext = React.createContext({
  showLoading: noop,
  hideLoading: noop,
})

interface ILoadingProviderProps {
  children: React.ReactNode
}

export const LoadingProvider: React.FC<ILoadingProviderProps> = ({
  children,
}: ILoadingProviderProps) => {
  // todo: set initial loading based on pageProps coming from _app.tsx
  const [loading, setLoading] = useState(true)
  const showLoading = useCallback(() => {
    setLoading(true)
  }, [])
  const hideLoading = useCallback(() => {
    setLoading(false)
  }, [])
  return (
    <LoadingContext.Provider
      value={{
        showLoading,
        hideLoading,
      }}
    >
      {children}
      <Loading active={loading} description="Loading..." withOverlay />
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
