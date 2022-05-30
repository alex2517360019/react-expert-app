import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
      //console.log(e.target.value);
      setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
      //prevenir submit button
      e.preventDefault();
      //validacion gregar si tiene una letra como minimo 
      if(inputValue.trim().length > 1){
        setCategories(cats =>[inputValue,...cats]);
        //reseteamos el input 
        setInputValue('');
        //console.log('Agregado');
      }
    };
  return (
      <>
      <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} 
                 onChange={ handleInputChange} placeholder="search"
           />
      </form>
      
      </>
      );
}

//validaciones al componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}