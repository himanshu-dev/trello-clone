import React from 'react'
import './styles/App.css'
import { AppContainer } from './styles/styles'
import { Column } from './components/Column'
import { AddItem } from './components/AddItem'
import { useAppState } from './state'

const App = () => {
  const { lists } = useAppState()
  return (
    <AppContainer>
      {lists.map(list => (
        <Column key={list.id} id={list.id} title={list.title} />
      ))}

      <AddItem dark={false} text={'Add another list'} onAdd={console.log} />
    </AppContainer>
  )
}

export default App
