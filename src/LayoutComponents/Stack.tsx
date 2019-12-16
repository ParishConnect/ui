import React, { createContext, ReactNode } from 'react'
import { Theme } from '../theme'

export const StackingContext = createContext(new Theme().stackingOrder.default)

export type StackProps = {
  value: number
  children: (value: number) => ReactNode
}

export function Stack({ children, value }: StackProps) {
  return (
    <StackingContext.Consumer>
      {previousValue => {
        const currentValue = Math.max(value, previousValue)
        const nextValue = currentValue + 1
        return (
          <StackingContext.Provider value={nextValue}>
            {children(currentValue)}
          </StackingContext.Provider>
        )
      }}
    </StackingContext.Consumer>
  )
}

Stack.defaultProps = {
  value: new Theme().stackingOrder.default,
}
