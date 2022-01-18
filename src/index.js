import './sass/main.scss';
import Notiflix from 'notiflix';
import getDataServer from './getDataServer';

const refs = { 
    form: document.querySelector('#search-form'),
    input: document.querySelector('input'),
    btn: document.querySelector('.btn-sub'),
    galleryDiv: document.querySelector('.gallery')
}
refs.form.addEventListener('submit', createGellary)

function createGellary(e){
e.preventDefault()
const inputValue = refs.input.value;
console.log(refs.input.value)
getDataServer(inputValue).then(data=>{
 refs.galleryDiv.insertAdjacentHTML('afterbegin',createMarkup(data));
}).catch(console.log);

}

function createMarkup(data){
   
    return data.data.hits.map(item => `<div class="photo-card">
    <img src="${item.webformatURL}" alt="" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        ${item.likes}
      </p>
      <p class="info-item">
        <b>Views</b>
        ${item.views}
      </p>
      <p class="info-item">
        <b>Comments</b>
        ${item.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>
        ${item.downloads}
      </p>
    </div>
  </div>`).join("")
}