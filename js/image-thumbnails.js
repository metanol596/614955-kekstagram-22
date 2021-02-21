const thumbnailTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const getThumbnailsMarkup = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((picture, i) => {
    const clonedTemplate = thumbnailTemplate.cloneNode(true);
    const image = clonedTemplate.querySelector('.picture__img');
    const likes = clonedTemplate.querySelector('.picture__likes');
    const comments = clonedTemplate.querySelector('.picture__comments');

    image.dataset.number = i;
    image.src = picture.url;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;

    fragment.appendChild(clonedTemplate);
  });
  return fragment;
}

export { getThumbnailsMarkup };
