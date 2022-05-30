import React /*, { useEffect, useState }*/ from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    //costum hook
    //reenombrar desestructuracion
    const {data:images,loading} = useFetchGifs(category);
    //console.log(loading);
    //const [count, setCount] = useState(0);
    //si no hay cambios en el componente no se reenderiza otravez usando [] en el segundo argumento del useEffect
    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //   getGifts(category).then( setImages );
    // },[category]);
    
  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Cargando...</p>}
    {/* {loading ? 'Cargando...' : 'Datos de cargados'} */}
    {/* <div className="card-grid">
         //<p>{count}</p>
        //<button onClick={ () => setCount(count+1)}>Presioname! </button> 
            {
            // retorna objeto con ()    
            images.map( img =>(
              <GifGridItem key={img.id} {...img} />
            ))
            }  
    </div> */}
    <div className="card-grid">
            { 
            images.map( img =>(
              <GifGridItem key={img.id} {...img} />
            ))
            }  
    </div>
    </>
  )
}
