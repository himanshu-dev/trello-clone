import {
  ButtonRow,
  CancelIconButton,
  FormContainer,
  NewItemButton,
  NewItemInput,
} from '../styles/styles'
import { FormEvent, useEffect, useState } from 'react'
import { ReactComponent as CrossIcon } from '../assets/cross.svg'
import { useFocus } from '../utils/useFocus'

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
        <CancelIconButton onClick={onCancel}>
          <CrossIcon height={20} width={20} />
        </CancelIconButton>
      </ButtonRow>
    </FormContainer>
  )
}
