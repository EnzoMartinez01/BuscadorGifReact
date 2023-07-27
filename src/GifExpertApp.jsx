import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['']);

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        //  setCateories(cat => [...cat, 'Valorant']);
    }

    const eliminarCategory = (busquedaEliminar) => {
        setCategories((prevBusquedas) =>
            prevBusquedas.filter((categories) => categories !== busquedaEliminar));
    };

    const elimnarBusqueda = () => {
        setCategories("");
    }

  return (
    <>
        {/*titutlo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        
        <AddCategory 
            onNewCategory={(event) => onAddCategory(event)}
            currentCategories={categories}
        />
        {categories.map((categories, index) => (
            <div key={index}>
                {categories}
                <button onClick={() => eliminarCategory(categories)}>Eliminar Busqueda</button>
            </div>
        ))}

        {/*Listado de Gif */}
        {
            categories.map((category) => (
                <GifGrid 
                    key={category} 
                    category={category}
                />
            ))
        }
    </>
  )
}
