import axios from "axios";

const baseUrl = 'https://pixabay.com/api/';
const getDataServer =  function getDataServer(url){
 const  params = `?key=25285142-2756dd9fbbfad4490da234cf6&q=${url}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
    console.log(url)
    return  axios.get(baseUrl  + params );
    
}

export default getDataServer;