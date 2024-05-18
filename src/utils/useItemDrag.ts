import { DragItem } from '../types'
import { useDrag } from 'react-dnd'
import { useAppState, setDraggedItem } from '../state'

export const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState()
  const [, drag] = useDrag({
    type: item.type,
    item: () => {
      dispatch(setDraggedItem(item))
      return item
    },
    end: () => {
      dispatch(setDraggedItem(null))
    },
  })
  return { drag }
}
