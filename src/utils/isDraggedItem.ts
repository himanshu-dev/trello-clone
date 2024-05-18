import { DragItem } from '../types'

export const isDraggedItem = (
  draggedItem: DragItem | null,
  itemType: string,
  id: string,
) => {
  return Boolean(
    draggedItem && draggedItem.type === itemType && draggedItem.id === id,
  )
}
