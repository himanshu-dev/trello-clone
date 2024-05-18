import { useRef } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'
import { AddItem, CancelButton, Card } from './'
import { addTask, moveList, useAppState } from '../state'
import { useItemDrag } from '../utils/useItemDrag'
import { throttle } from 'throttle-debounce-ts'
import { useDrop } from 'react-dnd'
import { isDraggedItem } from '../utils'

type ColumnProps = {
  id: string
  text: string
}

export const Column = ({ id: listId, text }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState()
  const { drag } = useItemDrag({ type: 'COLUMN', id: listId, text })
  const ref = useRef<HTMLDivElement>(null)

  const [, drop] = useDrop({
    accept: 'COLUMN',
    hover: throttle(200, () => {
      if (!draggedItem) {
        return
      }

      if (draggedItem.type === 'COLUMN') {
        if (draggedItem.id === listId) {
          return
        }

        dispatch(moveList(draggedItem.id, listId))
      }
    }),
  })

  const tasks = getTasksByListId(listId)

  const handleAdd = (text: string) => {
    dispatch(addTask(text, listId))
  }

  const handleCancel = () => {}

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isDraggedItem(draggedItem, 'COLUMN', listId)}>
      <ColumnTitle>
        {text} <CancelButton onCancel={handleCancel} />
      </ColumnTitle>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddItem dark={true} text={'Add another item'} onAdd={handleAdd} />
    </ColumnContainer>
  )
}

Column.displayName = 'Column'
