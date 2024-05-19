import React, { useEffect, useState } from 'react'
import { AppState } from '../types'
import { load } from '../utils'

type InjectedProps = {
  initialState: AppState
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export const withInitialState =
  <TProps,>(
    WrappedComponent: React.ComponentType<
      PropsWithoutInjected<TProps> & InjectedProps
    >,
  ) =>
  (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      lists: [],
      draggedItem: null,
    })
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | undefined>()

    console.log('initialState', initialState, error, isLoading)
    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await load()
          setInitialState(data)
        } catch (e) {
          if (e instanceof Error) {
            setError(e)
          }
        }
        setIsLoading(false)
      }
      fetchInitialState()
    }, [])

    if (isLoading) {
      return <div>Loading</div>
    }

    if (error) {
      return <div>{error.message}</div>
    }

    return <WrappedComponent {...props} initialState={initialState} />
  }
