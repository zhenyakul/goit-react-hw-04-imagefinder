import css from './Modal.module.css';

export const Modal = ({ src, onClick }) => {
  return (
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};
