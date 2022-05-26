const API_KEY = '27675022-eae91b965f306fbe1611b8e88';
const refs = {
    searchBtn: document.querySelector('#search-btn'),
    loadBtn: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
    inputForm: document.querySelector('.input-form')
}

let page = 0;

refs.searchForm.addEventListener('submit', (e) => e.preventDefault());
refs.searchBtn.addEventListener('click', (e) => {
    page = 1;
    const inputValue = refs.inputForm.value;
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`)
        .then((r) => {return r.json()})
        .then((r) => {
            r.map((el) => {
                return `<div class="photo-card">
  <img src="${el.webformatURL}" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`
            })
    })
})

// refs.loadBtn.style.display = 'block';