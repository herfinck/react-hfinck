import React, { useState } from 'react'
import { useEffect } from 'react';
import ItemCount from '../../Components/ItemCount/ItemCount'


const initialProducts = [
    {id: 1, name: 'Remera Mujer', price: 1900, stock: 10, pictureUrl: '../../assets/remeramujer.png'},
    {id: 2, name: 'Remera Hombre', price: 1900, stock: 15, pictureUrl: '../../assets/remerhombre.png'},
    {id: 3, name: 'Campera Mujer', price: 4700, stock: 20, pictureUrl: '../../assets/camperamujer.png'},
    {id: 4, name: 'Campera Hombre', price: 4700, stock: 30, pictureUrl: '../../assets/camperahombre.png'},
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
            {products.map((product) => <h2 style={style.container} key={product.id}>{product.name} </h2> )}
            {products.map((product) => <h3 style={style.container} key={product.id}>Valor $ {product.price} </h3>)}
            {products.map((product) => <div key={product.id}> <img src={product.pictureUrl} alt={product.name} /></div>)}
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
        paddingright: 50
    }
}