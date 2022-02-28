import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const imgList = document.querySelector('.imgList')
const container = document.querySelector('.tui-pagination');

const options = {
  totalItems: 10,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 5,
  // centerAlign: false,
  // firstItemClassName: 'tui-first-child',
  // lastItemClassName: 'tui-last-child',
  // template: {
  //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
  //   currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
  //   moveButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</a>',
  //   disabledMoveButton:
  //     '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
  //       '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //     '</span>',
  //   moreButton:
  //     '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
  //       '<span class="tui-ico-ellip">...</span>' +
  //     '</a>'
  // }
};
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage()
// console.log("🚀 ~ file: pagination.js ~ line 36 ~ page", page)

fetchImg(page)
.then(({img, count}) => {
  // console.log(img)
  markupImg (img)
  pagination.reset(count)
  // console.log(count)
})

async function fetchImg (page){
  const url = `https://pixabay.com/api/?key=24370055-d2ad965050e4b028a1e78f6a0&q=city&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=20`
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status);
  }
  const data = await response.json();
  return ({ img: data.hits, count: data.totalHits });
}


function markupImg (img) {
  const markup = img.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
  `<a href="${largeImageURL}">
  <div class="photo-card">
    <div class="thumb">
<img src="#" data-lazy="${webformatURL}" alt="${tags}" height="300px" />
</div>
<div class="info">
  <p class="info-item">
    <b>Likes</b>
    <span>${likes}</span>
  </p>
  <p class="info-item">
    <b>Views</b>
    <span>${views}</span>
  </p>
  <p class="info-item">
    <b>Comments</b>
    <span>${comments}</span>
  </p>
  <p class="info-item">
    <b>Downloads</b>
    <span>${downloads}</span>
  </p>
</div>
</div>
</a>`
).join("")

imgList.insertAdjacentHTML("beforeend", markup)

const image = document.querySelectorAll('.image-list img');
  // console.log(image);
  lazyLoad(image);

}

pagination.on('afterMove', ({ page }) => fetchImg(page).then(({image}) => {
  
  markupImg (image)
}));

function lazyLoad(targets) {
  const option = {
    rootMargin: "100px",
  }
  const onEntry = (entries, observer) => {
    entries.forEach( entry => { if(entry.isIntersecting) {
      const image = entry.target;
      // console.log(image)
      const src = image.dataset.lazy;
      image.src = src;
      observer.unobserve(image);
    }      
    });
  }
  const io = new IntersectionObserver(onEntry, option);
  targets.forEach(target => io.observe(target));
}


