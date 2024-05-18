import React from 'react'
import './styles/App.css'
import { AppContainer } from './styles'
import { Column } from './components/Column'
import { AddItem } from './components/AddItem'
import { useAppState } from './state'
import { addList } from './state/actions'

const App = () => {
  const { lists, dispatch } = useAppState()

  const handleAdd = (text: string) => {
    dispatch(addList(text))
  }

  return (
    <AppContainer>
      {lists.map(list => (
        <Column key={list.id} id={list.id} text={list.text} />
      ))}

      <AddItem dark={false} text={'Add another list'} onAdd={handleAdd} />
    </AppContainer>
  )
}

export default App
