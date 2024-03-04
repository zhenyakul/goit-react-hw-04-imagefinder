import { useState } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import css from './App.module.css';
export const App = () => {
  const [input, setInput] = useState();
  const [page, setPage] = useState(1);
  const [OnLoader, setOnLoader] = useState(false);

  const getInputValue = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setPage(1);
    setInput(form[1].value);
  };
  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.app}>
      <SearchBar onSubmit={getInputValue} />
      {input && <ImageGallery input={input} page={page} loader={setOnLoader} />}
      {OnLoader && <Loader />}
      {input && <Button onClick={loadMore} />}
    </div>
  );
};
