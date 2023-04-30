import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryRef = document.querySelector(".gallery");

const galleryItemsToStr = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a></li>`
  )
  .join("");

galleryRef.innerHTML += galleryItemsToStr;


galleryRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img width="900" height="550" src="${evt.target.dataset.source}">`,
    {
      closable: true,
      onShow() {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose() {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();

  function onCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
