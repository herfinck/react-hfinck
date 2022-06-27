import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ value }) => {
    const stock = 5
    const Inicial= 1
  
    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    
    return (
        <>
            <div>ItemListContainer</div>
            <div> {value} </div>
            <ItemCount stock={stock} inicial={Inicial} onAdd={onAdd}/>
        </>
         
    )
}

export default ItemListContainer