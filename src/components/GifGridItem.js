import React from 'react';

export const GifGridItem = ({id, title,url}) => {
  return (
    <div className="card  animate__animated animate__bounce animate__slow" id={id} >
       {/* {img.title} */}
       <img src={url} alt={title} />
       <p>{title}</p>
    </div>
  )
}
