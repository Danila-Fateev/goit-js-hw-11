!function(){var e={searchBtn:document.querySelector("#search-btn"),loadBtn:document.querySelector(".load-more"),searchForm:document.querySelector("#search-form"),inputForm:document.querySelector(".input-form"),galleryEl:document.querySelector(".gallery")},n=0;e.searchForm.addEventListener("submit",(function(e){return e.preventDefault()})),e.searchBtn.addEventListener("click",(function(){e.galleryEl.innerHTML="",n=1;var t=e.inputForm.value;e.searchBtn.textContent="Searching...",e.searchBtn.setAttribute("disabled","disabled"),fetch("https://pixabay.com/api/?key=".concat("27675022-eae91b965f306fbe1611b8e88","&q=").concat(t,"&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(n,"&per_page=40")).then((function(e){if(200!==e.status)throw new Error;return e.json()})).then((function(e){if(0===e.hits.length)throw new Error;return e.hits.map((function(e){return'<div class="photo-card">\n              <div class="image-box">\n  <img src="'.concat(e.webformatURL,'" alt="').concat(e.tags,'" class="card-image" loading="lazy" />\n  </div>\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b><br>').concat(e.likes,'\n    </p>\n    <p class="info-item">\n      <b>Views</b><br>').concat(e.views,'\n    </p>\n    <p class="info-item">\n      <b>Comments</b><br>').concat(e.comments,'\n    </p>\n    <p class="info-item">\n      <b>Downloads</b><br>').concat(e.downloads,"\n    </p>\n  </div>\n</div>")})).join("")})).then((function(n){return e.galleryEl.insertAdjacentHTML("beforeend",n)})).catch(console.log).finally((function(n){e.searchBtn.textContent="Search",e.searchBtn.removeAttribute("disabled")}))}))}();
//# sourceMappingURL=index.cbeda29f.js.map