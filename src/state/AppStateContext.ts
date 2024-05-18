import { AppState, AppStateContextProps } from '../types'
import { createContext, useContext } from 'react'

export const appState: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
  draggedItem: null,
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
)

export const useAppState = () => {
  return useContext(AppStateContext)
}
