import React, { useEffect } from 'react'
import { AppStateContext, appStateReducer } from './index'
import { useImmerReducer } from 'use-immer'
import { AppState } from '../types'
import { withInitialState } from '../components/withInitialState'
import { save } from '../utils'

type AppStateProviderProps = {
  children: React.ReactNode
  initialState: AppState
}

export const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    console.log('state', initialState)
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState)
    const { lists, draggedItem } = state

    const getTasksByListId = (listId: string) => {
      return lists.find(list => list.id === listId)?.tasks || []
    }

    const context = {
      lists,
      getTasksByListId,
      dispatch,
      draggedItem,
    }

    useEffect(() => {
      save(state)
    }, [state])

    return (
      <AppStateContext.Provider value={context}>
        {children}
      </AppStateContext.Provider>
    )
  },
)
