
import Carrossel from './Carrossel'
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
    return (
        <>
            <Carrossel/>
            <div id="bottomcarroussel">
                <Image id="crime" 
                className='mt-6'
                src="/images/abandono-de-animais---crime-federal-dyp64t3hrm.webp" 
                alt="Crime-related image"
                 width={1000} height={300} />
            </div>
        </>
    );
};

export default Main;