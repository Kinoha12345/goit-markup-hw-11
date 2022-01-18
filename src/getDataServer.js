import axios from "axios";
const baseUrl = 'https://pixabay.com/api/';
const getDataServer =  function getDataServer(url,page){
 const  params = `?key=25285142-2756dd9fbbfad4490da234cf6&q=${url}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    return  axios.get(baseUrl  + params );
}

export default getDataServer;