const e={searchBtn:document.querySelector("#search-btn"),loadBtn:document.querySelector(".load-more"),searchForm:document.querySelector("#search-form"),inputForm:document.querySelector(".input-form"),galleryEl:document.querySelector(".gallery")};let n=0;e.searchForm.addEventListener("submit",(e=>e.preventDefault())),e.searchBtn.addEventListener("click",(t=>{n=1;const a=e.inputForm.value;fetch(`https://pixabay.com/api/?key=27675022-eae91b965f306fbe1611b8e88&q=${a}&image_type=photo&orientation=horizontal&safesearch=true&page=${n}&per_page=40`).then((n=>(200===n.status&&(e.loadBtn.style.display="block"),n.json()))).then((e=>e.hits.map((e=>`<div class="photo-card">\n              <div class="image-box">\n  <img src="${e.webformatURL}" alt="${e.tags}" class="card-image" loading="lazy" />\n  </div>\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b><br>${e.likes}\n    </p>\n    <p class="info-item">\n      <b>Views</b><br>${e.views}\n    </p>\n    <p class="info-item">\n      <b>Comments</b><br>${e.comments}\n    </p>\n    <p class="info-item">\n      <b>Downloads</b><br>${e.downloads}\n    </p>\n  </div>\n</div>`)).join(""))).then((n=>e.galleryEl.insertAdjacentHTML("beforeend",n)))}));
//# sourceMappingURL=index.4d45694b.js.map