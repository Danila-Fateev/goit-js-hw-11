!function(){var n={searchBtn:document.querySelector("#search-btn"),loadBtn:document.querySelector(".load-more"),searchForm:document.querySelector("#search-form"),inputForm:document.querySelector(".input-form"),galleryEl:document.querySelector(".gallery")},e=0,t=0;n.searchForm.addEventListener("submit",(function(n){return n.preventDefault()})),n.searchBtn.addEventListener("click",(function(){e+=1,console.log(e),t=1;var o=n.inputForm.value;fetch("https://pixabay.com/api/?key=".concat("27675022-eae91b965f306fbe1611b8e88","&q=").concat(o,"&image_type=photo&orientation=horizontal&safesearch=true&page=").concat(t,"&per_page=40")).then((function(n){if(200!==n.status)throw new Error;return n.json()})).then((function(n){if(0===n.hits.length)throw new Error;return n.hits.map((function(n){return'<div class="photo-card">\n              <div class="image-box">\n  <img src="'.concat(n.webformatURL,'" alt="').concat(n.tags,'" class="card-image" loading="lazy" />\n  </div>\n  <div class="info">\n    <p class="info-item">\n      <b>Likes</b><br>').concat(n.likes,'\n    </p>\n    <p class="info-item">\n      <b>Views</b><br>').concat(n.views,'\n    </p>\n    <p class="info-item">\n      <b>Comments</b><br>').concat(n.comments,'\n    </p>\n    <p class="info-item">\n      <b>Downloads</b><br>').concat(n.downloads,"\n    </p>\n  </div>\n</div>")})).join("")})).then((function(e){return n.galleryEl.insertAdjacentHTML("beforeend",e)})).catch(console.log)}))}();
//# sourceMappingURL=index.37041b45.js.map