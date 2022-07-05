import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemCount from '../../Components/ItemCount/ItemCount'
import pictureUrl1 from '../../assets/remeramujer.png'
import pictureUrl2 from '../../assets/remerahombre.png'
import pictureUrl3 from '../../assets/camperamujer.png'
import pictureUrl4 from '../../assets/camperahombre.png'

const initialProducts = [
    {id: 1, name: 'Remera Mujer', price: 1900, stock: 10, pictureUrl: pictureUrl1},
    {id: 2, name: 'Remera Hombre', price: 1900, stock: 15, pictureUrl: pictureUrl2},
    {id: 3, name: 'Campera Mujer', price: 4700, stock: 20, pictureUrl: pictureUrl3},
    {id: 4, name: 'Campera Hombre', price: 4700, stock: 30, pictureUrl: pictureUrl4},
]


console.log(initialProducts)

const promesa = new Promise((resolve, rejet) => {
    setTimeout(() => {
        resolve(initialProducts)
    },2000)
    
});


const ItemListContainer = ({ value }) => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        promesa.then((data)=> {
            setProducts(data);
        }).catch(()=> {
            console.log('TODO MAL')
        }).finally(()=> {
            console.log('SIEMPRE LO HAGO')
        })
    },[])


    const onAdd = (cantidad) => {
        console.log("hola la cantidad es: " + cantidad);
    }

    
    return (
        <>
            <h1 style={style.container}>{value}</h1>;
            <div> {value} </div>;
            <ItemCount stock={10} inicial={1} onAdd={onAdd}/>
            {products.map((product) => 
            <>
                <h2 style={style.container} key={product.id}>{product.name} </h2>
                <h3 style={style.container} key={product.id}>Valor $ {product.price} </h3>
                <div style={style.container} key={product.id}>
                     <img src={product.pictureUrl} alt={product.name} />
                </div>
            </>
            )}
        </>
         
    )
}

export { ItemListContainer };

const style = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 50,
        paddingright: 50,
        
    }  
}


