import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createMarkup(galleryItems);
galleryRef.addEventListener("click", showModal);

galleryRef.innerHTML = galleryMarkup;

console.log(galleryItems);

function createMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

function showModal(e) {
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();

  const instance = basicLightbox.create(
    `
		<img src="${e.target.dataset.source}", alt="${e.target.alt}">
	`
  );
  instance.show(document.addEventListener("keydown", onEscPress));

  //   if (instance.visible()) {
  //     document.addEventListener("keydown", onEscPress);
  //   }

  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close(() => {
        document.removeEventListener("keydown", onEscPress);
      });

      //   document.removeEventListener("keydown", onEscPress);
    }
  }
}
