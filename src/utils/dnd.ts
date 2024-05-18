import { DragItem } from '../types'
import { moveCard, moveList, setDraggedItem, useAppState } from '../state'
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

export const useItemDrop = (item: DragItem) => {
  const { dispatch, draggedItem } = useAppState()
  const [, drop] = useDrop({
    accept: item.type,
    hover: throttle(200, () => {
      if (isDraggedItem(draggedItem, item.type, item.id)) return
      if (item.type === 'COLUMN') {
        dispatch(moveList((draggedItem as DragItem).id, item.id))
      } else if (item.type === 'CARD') {
        dispatch(moveCard((draggedItem as DragItem).id, item.id))
      }
    }),
  })
  return { drop }
}
