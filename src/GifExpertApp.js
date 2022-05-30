import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function GifExpertApp() {
  //const categories = ['One Puch','HunterxHunter','Bleach'];  
  const [categories, setCategories] = useState(['Bleach']);
  // const handleAdd = () => {
  //   //operador spread agrega elementos anteriores mas el nuevo
  //   //setCategories([...categories,"ssss"]);
  //   //callback
  //   setCategories( cats => [...cats,"Dragon Ball"]);
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr/>
      {/* <button type="button" onClick={handleAdd}>Agregar</button> */}
      <ol>
            {
            categories.map(c =>(
                //propiedad key no es visible para los navegadores, agrega logica a los elementos por si sufren un cambio
                //<li key={c}>  {c}  </li>;
                <GifGrid key={c} category={c}/>
            ))
            
            }
      </ol>
    </>
  );
}

export default GifExpertApp;