import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { App } from './components'
import { AppStateProvider } from './state'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <DndProvider backend={HTML5Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  // </React.StrictMode>,
)
