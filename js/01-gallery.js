import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.addEventListener("click", onImageClick);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

let modal;

function createGalleryMarkup(items) {
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
function onImageClick(e) {
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();

  modal = basicLightbox.create(
    `
		<img src="${e.target.dataset.source}", alt="${e.target.alt}">
	`,
    {
      onShow: () => document.addEventListener("keydown", onEscPress),
      onClose: () => document.removeEventListener("keydown", onEscPress),
    }
  );
  // modal.show(document.addEventListener("keydown", onEscPress));
  modal.show();
}

function onEscPress(e) {
  if (e.code === "Escape") {
    modal.close();
    // modal.close(document.removeEventListener("keydown", onEscPress));
    console.log(e.code);
  }
}
