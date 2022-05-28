const API_KEY = '27675022-eae91b965f306fbe1611b8e88';
const refs = {
    searchBtn: document.querySelector('#search-btn'),
    loadBtn: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
  inputForm: document.querySelector('.input-form'),
  galleryEl: document.querySelector('.gallery')
}

let page = 0;

refs.searchForm.addEventListener('submit', (e) => e.preventDefault());
refs.searchBtn.addEventListener('click', (e) => {
    page = 1;
    const inputValue = refs.inputForm.value;
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
      .then((r) => {
        if (r.status === 200) {
          refs.loadBtn.style.display = 'block';
        }
        return r.json()
      })
        .then((r) => {
           return r.hits.map((el) => {
              return `<div class="photo-card">
  <img src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
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
    }).then((r) => refs.galleryEl.insertAdjacentHTML('beforeend', r))
})

// refs.loadBtn.style.display = 'block';