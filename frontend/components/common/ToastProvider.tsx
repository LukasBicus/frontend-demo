import styles from '@/styles/toast.module.scss'
import { ToastNotification } from '@carbon/react'
import { noop } from 'lodash'
import React, { useCallback, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ToastContext = React.createContext({
  showToast: noop,
})

interface IToastProviderProps {
  children: React.ReactNode
}

export enum ToastKind {
  Error = 'error',
  Info = 'info',
  InfoSquare = 'info-square',
  Success = 'success',
  Warning = 'warning',
  WarningAlt = 'warning-alt',
}
export interface Toast {
  kind: ToastKind
  id: string
  subtitle?: string
  title: string
  timeout: number
}

export const ToastProvider: React.FC<IToastProviderProps> = ({
  children,
}: IToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback(
    ({
      kind = ToastKind.Success,
      timeout = 3000,
      subtitle,
      title,
    }: {
      kind?: ToastKind
      title: string
      subtitle?: string
      timeout?: number
    }) => {
      setToasts((prevState) => [
        ...prevState,
        {
          kind,
          timeout,
          subtitle,
          title,
          id: uuidv4(),
        },
      ])
    },
    [],
  )
  const getToastCloseHandler = useCallback(
    (id: string) => () => {
      setToasts((prevState) => prevState.filter((t) => t.id !== id))
    },
    [],
  )
  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}
      <div className={styles.toastsBox}>
        {toasts.map((toast) => (
          <ToastNotification
            key={toast.id}
            {...toast}
            onClose={getToastCloseHandler(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToastContext = () => useContext(ToastContext)
