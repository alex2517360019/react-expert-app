export const getGifts= async (category) => {
    const lang = 'es';
    const rating = 'r';
    const limit = 8; 
    const key= 'BzagZZU71KiK1AvaqdvtgsBkaE5etX6a'
    const url =`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=${limit}&lang=${lang}&rating=${rating}`;
    //peticion a endpoint con fetch
    const resp = await fetch(url); 
    //json de la respuesta
    const {data} = await resp.json();
    //desesctructutacion de la data de la imagen
    const gifs = data.map(img => {
        return {
        id: img.id,
        title: img.title,
        //validar si las url traen imagenes con ? 
        url: img.images?.downsized_medium.url 
      }      
    });

    return gifs;
}  
//getGifts();