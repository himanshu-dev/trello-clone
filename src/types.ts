export type Task = {
  id: string
  text: string
}

export type List = {
  id: string
  title: string
  tasks: Task[]
}

export type AppState = {
  lists: List[]
}

export type AppStateContextProps = {
  lists: List[]
  getTasksByListId(id: string): Task[]
}
