import React from 'react'
import '../styles/App.css'
import { AppContainer } from '../styles'
import { addList, useAppState } from '../state'
import { AddItem, Column } from './index'
import { CustomDragLayer } from './CustomDragLayer'

export const App = () => {
  const { lists, dispatch } = useAppState()

  const handleAdd = (text: string) => {
    dispatch(addList(text))
  }

  return (
    <AppContainer>
      <CustomDragLayer />

      {lists.map(list => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}

      <AddItem dark={false} text={'Add another list'} onAdd={handleAdd} />
    </AppContainer>
  )
}
