import { Overlay } from './Loader.styled';
import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Overlay>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Overlay>
  );
};

export default Loader;
