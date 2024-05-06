import { AddButton, ColumnContainer, ColumnTitle } from '../styles/styles'
import { Card } from './Card'
import { AddItem } from './AddItem'
import { useAppState } from '../state'

type ColumnProps = {
  id: string
  title: string
}

export const Column = ({ id, title }: ColumnProps) => {
  const { getTasksByListId } = useAppState()
  const tasks = getTasksByListId(id)
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map(task => (
        <Card key={task.id} id={task.id} text={task.text} />
      ))}
      <AddItem dark={true} text={'Add another item'} onAdd={console.log} />
    </ColumnContainer>
  )
}

Column.displayName = 'Column'
