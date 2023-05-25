import React from 'react'

interface IInlineErrorProps {
  errorMessage: string
}

export const InlineError: React.FC<IInlineErrorProps> = ({ errorMessage }) => {
  return <div>{errorMessage}</div>
}
