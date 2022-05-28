const API_KEY = '27675022-eae91b965f306fbe1611b8e88';
const refs = {
    searchBtn: document.querySelector('#search-btn'),
    loadBtn: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
  inputForm: document.querySelector('.input-form'),
  galleryEl: document.querySelector('.gallery'),
}

let max = 0;
let page = 0;


refs.searchForm.addEventListener('submit', (e) => e.preventDefault());
refs.searchBtn.addEventListener('click', onSearchBtnClick )

  function onSearchBtnClick() {
  max += 1
  console.log(max)

    page = 1;
    const inputValue = refs.inputForm.value;
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
      .then((r) => refs.galleryEl.insertAdjacentHTML('beforeend', r))
      .catch(console.log)
}