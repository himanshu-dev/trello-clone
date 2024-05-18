import {
  ButtonRow,
  FormContainer,
  NewItemButton,
  NewItemInput,
} from '../styles'
import { FormEvent, useState } from 'react'
import { useFocus } from '../utils'
import { CancelButton } from './'

type NewItemFormProps = {
  onAdd(text: string): void
  onCancel(): void
  dark?: boolean
}

export const NewItemForm = (props: NewItemFormProps) => {
  const { onAdd, onCancel, dark } = props
  const [value, setValue] = useState('')
  const ref = useFocus()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onAdd(value)
  }

  return (
    <FormContainer dark={dark} onSubmit={handleSubmit}>
      <NewItemInput
        ref={ref}
        // autoFocus={true}
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder={'Enter a title'}
      />
      <ButtonRow>
        <NewItemButton type={'submit'} onClick={handleSubmit}>
          Add
        </NewItemButton>
        <CancelButton onCancel={onCancel} />
      </ButtonRow>
    </FormContainer>
  )
}
