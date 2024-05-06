import { AppState, AppStateContextProps } from '../types'
import { createContext, useContext } from 'react'

export const appData: AppState = {
  lists: [
    {
      id: '0',
      title: 'To Do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
}

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
)

export const useAppState = () => {
  return useContext(AppStateContext)
}
