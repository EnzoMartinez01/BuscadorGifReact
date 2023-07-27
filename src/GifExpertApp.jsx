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
  return (
    <>
        {/*titutlo*/}
        <h1>GifExpertApp</h1>

        {/*Input*/}
        <AddCategory 
            onNewCategory={(event) => onAddCategory(event)}
            currentCategories={categories}
        />

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
