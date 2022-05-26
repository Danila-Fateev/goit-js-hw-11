const API_KEY = '27675022-eae91b965f306fbe1611b8e88';
const refs = {
    searchBtn: document.querySelector('#search-btn'),
    loadBtn: document.querySelector('.load-more'),
    searchForm: document.querySelector('#search-form'),
    inputForm: document.querySelector('input-form')
}

let page = 0;

refs.searchForm.addEventListener('submit', (e) => e.preventDefault());
refs.searchBtn.addEventListener('click', (e) => {
    page = 1;
    const inputValue = refs.inputForm.value;
    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputValue}&image_type=photo`)
})

// refs.loadBtn.style.display = 'block';