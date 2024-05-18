import { useRef } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles'
import { addTask, useAppState } from '../state'
import { isDraggedItem, useItemDrag, useItemDrop } from '../utils'
import { CancelButton } from './CancelButton'
import { Card } from './Card'
import { AddItem } from './AddItem'

type ColumnProps = {
  id: string
  text: string
  isPreview?: boolean
}

export const Column = ({ id: listId, text, isPreview }: ColumnProps) => {
  const { getTasksByListId, dispatch, draggedItem } = useAppState()
  const { drag } = useItemDrag({ type: 'COLUMN', id: listId, text })
  const { drop } = useItemDrop({ type: 'COLUMN', id: listId, text })
  const ref = useRef<HTMLDivElement>(null)

  const tasks = getTasksByListId(listId)

  const handleAdd = (text: string) => {
    dispatch(addTask(text, listId))
  }

  const handleCancel = () => {}

  drag(drop(ref))

  return (
    <ColumnContainer
      ref={ref}
      isPreview={isPreview}
      isHidden={isDraggedItem(draggedItem, 'COLUMN', listId) && !isPreview}>
      <ColumnTitle>
        {text} <CancelButton onCancel={handleCancel} />
      </ColumnTitle>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} listId={listId} />
      ))}
      <AddItem dark={true} text={'Add another item'} onAdd={handleAdd} />
    </ColumnContainer>
  )
}

Column.displayName = 'Column'
