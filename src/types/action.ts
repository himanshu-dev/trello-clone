import { DragItem } from './'

export type AddListAction = {
  type: 'ADD_LIST'
  payload: string
}

export type AddTaskAction = {
  type: 'ADD_TASK'
  payload: { text: string; listId: string }
}

export type MoveListAction = {
  type: 'MOVE_LIST'
  payload: { draggedId: string; hoverId: string }
}

export type SetDraggedItemAction = {
  type: 'SET_DRAGGED_ITEM'
  payload: DragItem | null
}

export type Action =
  | AddListAction
  | AddTaskAction
  | MoveListAction
  | SetDraggedItemAction
