import { AddButton } from '../styles/styles'
import { useState } from 'react'
import { NewItemForm } from './NewItemForm'

type AddItemProps = {
  text: string
  dark?: boolean
  onAdd(text: string): void
}

export const AddItem = (props: AddItemProps) => {
  const { text, dark, onAdd } = props
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(true)
  }

  const handleAdd = (text: string) => {
    setShowForm(false)
    onAdd(text)
  }

  const handleCancel = () => {
    setShowForm(false)
  }

  if (showForm) {
    return <NewItemForm onAdd={handleAdd} onCancel={handleCancel} dark={dark} />
  }

  return (
    <AddButton dark={dark} onClick={handleClick}>
      + {text}
    </AddButton>
  )
}
