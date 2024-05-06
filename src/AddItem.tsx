import {AddButton} from "./styles";
import {useState} from "react";
import {NewItemForm} from "./NewItemForm";

type AddItemProps = {
  text: string,
  dark?: boolean,
  onAdd(): void
}

export const AddItem = (props: AddItemProps) => {
  const {text, dark, onAdd} = props
  const [showForm, setShowForm] = useState(false)

  const handleClick = () => {
    setShowForm(true)
  }

  const handleAdd = () => {
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
  }

  if (showForm) {
    return <NewItemForm onAdd={handleAdd} />
  }

  return (
    <AddButton dark={dark} onClick={handleClick}>
      + {text}
    </AddButton>
  )
}