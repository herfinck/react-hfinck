import React from 'react';
import './App.css';
import NavBar from './Components/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer'


const App = () => {
  
  return(
    <>
    <NavBar />
    <ItemListContainer value='ARTICULO' />
    </>
  )
}

export default App;
