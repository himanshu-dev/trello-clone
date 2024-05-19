import { Action, AppState } from '../types'
import { nanoid } from 'nanoid'
import { findItemIndexById, moveItem } from '../utils'

export const appStateReducer = (
  draft: AppState,
  action: Action,
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({ id: nanoid(5), text: action.payload, tasks: [] })
      break
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload
      const targetListIndex = findItemIndexById(draft.lists, listId)
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(5),
        text,
      })
      break
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload
      const dragIndex = findItemIndexById(draft.lists, draggedId)
      const hoverIndex = findItemIndexById(draft.lists, hoverId)
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex)
      break
    }
    case 'MOVE_TASK': {
      const { draggedCardId, hoverCardId, sourceColumnId, targetColumnId } =
        action.payload
      const sourceListIndex = findItemIndexById(draft.lists, sourceColumnId)
      const targetListIndex = findItemIndexById(draft.lists, targetColumnId)
      const dragIndex = findItemIndexById(
        draft.lists[sourceListIndex].tasks,
        draggedCardId,
      )
      const hoverIndex = hoverCardId
        ? findItemIndexById(draft.lists[sourceListIndex].tasks, hoverCardId)
        : 0

      const itemToMove = draft.lists[sourceListIndex].tasks[dragIndex]
      if (itemToMove) {
        draft.lists[sourceListIndex].tasks.splice(dragIndex, 1)
        draft.lists[targetListIndex].tasks.splice(hoverIndex, 0, itemToMove)
      }
      break
    }
    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload
      break
    }
  }
}
