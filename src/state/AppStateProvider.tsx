import React, { FC } from 'react'
import { appState, AppStateContext } from './'
import { useImmerReducer } from 'use-immer'
import { appStateReducer } from './'

type AppStateProviderProps = {
  children: React.ReactNode
}

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appState)
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

  return (
    <AppStateContext.Provider value={context}>
      {children}
    </AppStateContext.Provider>
  )
}
