import React from 'react';
import './App.css';
import {AppContainer} from "./styles";
import {Column} from "./Column";
import {AddItem} from "./AddItem";

const App = () => {
  return (
    <AppContainer>
    <Column title={'Todo:'}/>
    <AddItem dark={false} text={'Add another list'} onAdd={() => null}/>
  </AppContainer>
  )
}

export default App;
