import Notiflix from 'notiflix';


const API_KEY = '27675022-eae91b965f306fbe1611b8e88';
const refs = {
    searchBtn: document.querySelector('#search-btn'),
    loadBtn: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
  inputForm: document.querySelector('.input-form'),
  galleryEl: document.querySelector('.gallery'),
}

let page = 0;
let inputValue = null;

refs.searchForm.addEventListener('submit', (e) => e.preventDefault());
refs.searchBtn.addEventListener('click', onSearchBtnClick )
refs.loadBtn.addEventListener('click', onLoadMoreBtnClick)

function onSearchBtnClick() {
  refs.galleryEl.innerHTML = "";
  refs.loadBtn.style.display = 'none';
    page = 1;
    inputValue = refs.inputForm.value;
    refs.searchBtn.textContent = 'Searching...';
    refs.searchBtn.setAttribute('disabled', 'disabled')
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
      .then((r) => {
        if (r.status !== 200) {
          throw new Error
        }
        return r.json()
      })
      .then((r) => {
        if (r.hits.length === 0) {
          throw new Error
          }
           return r.hits.map((el) => {
             return `<div class="photo-card">
              <div class="image-box">
  <img src="${el.webformatURL}" alt="${el.tags}" class="card-image" loading="lazy" />
  </div>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>${el.likes}
    </p>
    <p class="info-item">
      <b>Views</b><br>${el.views}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${el.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${el.downloads}
    </p>
  </div>
</div>`
           }).join("")
      })
      .then((r) => {
        refs.galleryEl.insertAdjacentHTML('beforeend', r)
        refs.loadBtn.style.display = 'block';
      })
      .catch((r) => Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."))
      .finally((r) => {
                  refs.searchBtn.textContent = 'Search',
          refs.searchBtn.removeAttribute('disabled')
      }
    )
}

async function onLoadMoreBtnClick() {
  refs.searchBtn.textContent = 'Loading...';
  refs.searchBtn.setAttribute('disabled', 'disabled')
  page += 1
  const fetchResult = await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`);
  const results = await fetchResult.json();
  const htmlParsed = await results.hits.map((el) => {
    return `<div class="photo-card">
              <div class="image-box">
  <img src="${el.webformatURL}" alt="${el.tags}" class="card-image" loading="lazy" />
  </div>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>${el.likes}
    </p>
    <p class="info-item">
      <b>Views</b><br>${el.views}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${el.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${el.downloads}
    </p>
  </div>
</div>`
  }).join('');

  await refs.galleryEl.insertAdjacentHTML('beforeend', htmlParsed);

    refs.searchBtn.textContent = 'Load more';
  refs.searchBtn.removeAttribute('disabled');
}