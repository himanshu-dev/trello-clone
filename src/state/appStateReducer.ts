import { Action, AppState } from '../types'
import { nanoid } from 'nanoid'
import { findItemIndexById, moveItem } from '../utils'

export const appStateReducer = (
  draft: AppState,
  action: Action,
): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({ id: nanoid(), text: action.payload, tasks: [] })
      break
    }
    case 'ADD_TASK': {
      const { text, listId } = action.payload
      const targetListIndex = findItemIndexById(draft.lists, listId)
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text,
      })
      break
    }
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload
      const draggedIndex = findItemIndexById(draft.lists, draggedId)
      const hoverIndex = findItemIndexById(draft.lists, hoverId)
      draft.lists = moveItem(draft.lists, draggedIndex, hoverIndex)
      break
    }
    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload
      break
    }
  }
}
