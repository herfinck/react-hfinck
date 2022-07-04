import React, {useState, useEffect} from 'react';


const ItemCount = ({ stock, inicial, onAdd }) => {
    
    const [ contador, setContador ]  = useState(inicial);
//    const [ usuarios, setUsuarios] = useState([{name: 'Jorge'},{name: 'Carlos'}])
    
    
    const handlerClick = () => {
        if (contador < stock){
            return (setContador(contador + 1));
        }
        alert("NO QUEDA MAS PRODUCTO")
    }

    const handlerClickRestar = () => {
        if (contador > 0){
            return (setContador(contador - 1));
        }
        alert("no puede ser menor a cero");
        
    }
    const handlerClickResetear = () => {
        setContador(inicial);
       
    }

    const onAdds = () => {
        onAdd(contador);
    }
    
    return (
        <>
            
            <h1>Contador={contador}</h1>
            <button onClick={handlerClickRestar}>-</button>
            <button onClick={handlerClickResetear}>Reset</button>
            <button onClick={handlerClick}>+</button>
            <button onClick={onAdds}>Agregar al Carrito</button> 
        </>
    )
}

export default ItemCount
