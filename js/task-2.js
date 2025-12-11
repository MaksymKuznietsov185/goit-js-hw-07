const gallery = document.querySelector(".gallery");

const markup = images
  .map(
    ({ url, alt }) =>
      `<li class="gallery-item">
         <img src="${url}" alt="${alt}" class="gallery-img">
       </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
