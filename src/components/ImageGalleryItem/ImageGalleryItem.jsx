import css from './ImageGalleryItem.module.css';
export const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className={css.galerryItem} id={image.id}>
      <img
        className={css.imageGalleryItemImage}
        src={image.webformatURL}
        alt=""
        data-src={image.largeImageURL}
        onClick={onClick}
      />
    </li>
  );
};
