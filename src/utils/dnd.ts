import { CardDragItem, DragItem } from '../types'
import { moveTask, moveList, setDraggedItem, useAppState } from '../state'
import { useDrag, useDrop } from 'react-dnd'
import { throttle } from 'throttle-debounce-ts'
import { useEffect } from 'react'
import { getEmptyImage } from 'react-dnd-html5-backend'

export const isDraggedItem = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
) => {
  return Boolean(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id,
  )
}

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag, preview] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item
    },
    end: () => {
      dispatch(setDraggedItem(null))
    },
  })
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true })
  }, [preview])
  return { drag }
}

export const useColumnDrop = (item: DragItem) => {
  const { dispatch, draggedItem } = useAppState()
  const [, drop] = useDrop({
    accept: ['COLUMN', 'CARD'],
    hover: throttle(200, () => {
      if (isDraggedItem(draggedItem, item.type, item.id)) return

      if (draggedItem?.type === 'COLUMN') {
        dispatch(moveList(draggedItem.id, item.id))
        return
      }

      const _draggedItem = draggedItem as CardDragItem
      const { id } = item as CardDragItem

      if (_draggedItem.columnId === id) {
        return
      }

      dispatch(moveTask(_draggedItem.id, null, _draggedItem.columnId, id))
      dispatch(setDraggedItem({ ..._draggedItem, columnId: id }))
    }),
  })
  return { drop }
}

export const useCardDrop = (item: DragItem) => {
  const { dispatch, draggedItem } = useAppState()
  const [, drop] = useDrop({
    accept: item.type,
    hover: throttle(200, () => {
      if (isDraggedItem(draggedItem, item.type, item.id)) return

      const _draggedItem = draggedItem as CardDragItem
      const { id, columnId } = item as CardDragItem
      dispatch(moveTask(_draggedItem.id, id, _draggedItem.columnId, columnId))
      dispatch(setDraggedItem({ ..._draggedItem, columnId }))
    }),
  })
  return { drop }
}
