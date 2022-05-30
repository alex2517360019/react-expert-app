import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
  const [state, setState] = useState({
        data: [],
        loading: true
  });
  useEffect(()=>{
    getGifts(category).then(imgs =>{
        setTimeout(() => {
            //console.log(imgs);
            setState({
                data: imgs,
                loading: false
            });
        }, 3000);
    });
  },[category]);
//   setTimeout(() => {
//       setState({
//         data: [1,2,3,4,5,6,7,8,9,10],
//         loading: false
//       })
//   }, 1500);
  return state;
}
