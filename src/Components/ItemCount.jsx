import React, {useState} from 'react'



const ItemCount = ({ stock, inicial, onAdd }) => {
    
    const [ contador, setContador ]  = useState(1);
    
    /* Lo de arriba resume lo resaltado
    const resultado = useState(0);
    const contador = resultado[0];
    const setContador = resultado[1];
    */
    const handlerClick = () => {
        if (contador < stock){
            return (setContador(contador + 1))
        }
        alert("NO QUEDA MAS PRODUCTO")
    }

    const handlerClickRestar = () => {
        if (contador > 0){
            return (setContador(contador - 1))
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
            <div>ItemCount</div>
            <h1>{contador}</h1>
            <button onClick={handlerClick}>Sumame</button>
            <button onClick={handlerClickRestar}>Restame</button>
            <button onClick={handlerClickResetear}>Reset</button>
            <button onClick={onAdds}>Agregar al Carrito</button> 
        </>
    )
}

export default ItemCount
