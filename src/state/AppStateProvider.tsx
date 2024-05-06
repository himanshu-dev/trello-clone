import React, { FC } from 'react'
import { appData, AppStateContext } from './'

type AppStateProviderProps = {
  children: React.ReactNode
}

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
  const { lists } = appData

  const getTasksByListId = (listId: string) => {
    return lists.find(list => list.id === listId)?.tasks || []
  }

  const state = {
    lists,
    getTasksByListId,
  }

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  )
}
