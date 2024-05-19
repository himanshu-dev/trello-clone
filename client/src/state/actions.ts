import { Action, DragItem } from '../types'

export const addTask = (text: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { text, listId },
})

export const addList = (text: string): Action => ({
  type: 'ADD_LIST',
  payload: text,
})

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: 'MOVE_LIST',
  payload: {
    draggedId,
    hoverId,
  },
})

export const moveTask = (
  draggedCardId: string,
  hoverCardId: string | null,
  sourceColumnId: string,
  targetColumnId: string,
): Action => ({
  type: 'MOVE_TASK',
  payload: {
    draggedCardId,
    hoverCardId,
    sourceColumnId,
    targetColumnId,
  },
})

export const setDraggedItem = (draggedItem: DragItem | null): Action => ({
  type: 'SET_DRAGGED_ITEM',
  payload: draggedItem,
})
