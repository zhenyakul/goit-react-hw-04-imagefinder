import { useEffect, useState } from 'react';
import { fetchDataFromPixabay } from 'components/api/api';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ input, page, loader }) => {
  const [data, setData] = useState([]);
  const [OnModal, setOnModal] = useState(false);
  const [modalURL, setModalURL] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      loader(true);
      try {
        const data = await fetchDataFromPixabay(input, page);
        if (page === 1) {
          setData(data);
        } else {
          setData(prevData => [...prevData, ...data]);
        }
      } catch (e) {
        console.error('Error fetching data:', e);
      } finally {
        loader(false);
      }
    };
    fetchData();
  }, [input, page, loader]);

  const modalOnClick = evt => {
    setOnModal(true);
    const img = evt.target;
    setModalURL(img.dataset.src);
  };
  const modalOff = () => {
    setOnModal(false);
  };
  return (
    <>
      <ul className={css.imageGallery}>
        {data.map(image => {
          return <ImageGalleryItem image={image} onClick={modalOnClick} />;
        })}
      </ul>
      {OnModal && <Modal src={modalURL} onClick={modalOff} />}
    </>
  );
};
