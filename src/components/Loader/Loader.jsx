import css from './Loader.module.css';
import { LineWave } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LineWave
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass={css.loader}
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};
