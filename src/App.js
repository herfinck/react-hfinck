import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { ItemListContainer } from './Containers/ItemListContainer/ItemListContainer'


const App = () => {
  
  return(
    <>
    <NavBar />
    <ItemListContainer value='HOLA MUNDOOOOO' />
    </>
  )
}

export default App;
