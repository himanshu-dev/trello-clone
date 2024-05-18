import { ColumnContainer, ColumnTitle } from '../styles'
import { Card } from './Card'
import { AddItem } from './AddItem'
import { useAppState } from '../state'
import { addTask } from '../state/actions'
import { CancelButton } from './CancelButton'

type ColumnProps = {
  id: string
  text: string
}

export const Column = ({ id: listId, text }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState()
  const tasks = getTasksByListId(listId)

  const handleAdd = (text: string) => {
    dispatch(addTask(text, listId))
  }

  const handleCancel = () => {}

  return (
    <ColumnContainer>
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
