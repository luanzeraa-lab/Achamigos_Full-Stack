import Carrossel from './Carrossel';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Carrossel />
        {/* <Image
          className="self-center mb-3"
          src="/images/abandono-de-animais---crime-federal-dyp64t3hrm.webp"
          alt="Crime-related image"
          width={1200}
          height={600}
        /> */}
      </div>
    </>
  );
};

export default Main;
