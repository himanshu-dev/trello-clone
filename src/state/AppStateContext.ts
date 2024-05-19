import { AppState, AppStateContextProps } from '../types'
import { createContext, useContext } from 'react'
import data from './data.json'

export const appState: AppState = {
  lists: [...data.listWithTasks],
  draggedItem: null,
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
)

export const useAppState = () => {
  return useContext(AppStateContext)
}
