'use client';

import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PaginaUsuario = () => {
  const router = useRouter();

  return (
    <>
    <Nav2 />
      <div className="my-[4rem] flex flex-col gap-[5rem] bg-[#fffffe]">
        <div className="flex m-auto items-center justify-center gap-4
         shadow-lg rounded-[0.75rem] w-[60rem] h-[8rem] max-[1000px]:w-[40rem] max-[700px]:w-[21.25rem]">
          <Image
            src="/icons/person-perfil.svg"
            alt="clique para ir para gerenciar perfil"
            width={60}
            height={60}
            onClick={() => {
              router.push('/CadastroAnimais');
            }}
            className="cursor-pointer max-[700px]:w-[2rem] max-[700px]:h-[2rem]"
          />
          <input
            className="bg-transparent border-none font-[600] text-left text-[2rem] w-[19.75rem]
             max-[700px]:text-[1.5rem] max-[700px]:w-[15rem]" 
            type="button"
            value={'Gerenciar Perfil'}
            onClick={() => {
              router.push('/CadastroAnimais');
            }}
          />
        </div>

        <div className="flex m-auto items-center justify-center gap-4 shadow-lg
         rounded-[0.75rem] w-[60rem] h-[8rem] max-[1000px]:w-[40rem] max-[700px]:w-[21.25rem]">
          <Image
            src="/icons/dog-perfil.svg"
            alt="clique para ir para cadastro de animais"
            width={60}
            height={60}
            onClick={() => {
              router.push('/CadastroAnimais');
            }}
            className="cursor-pointer max-[700px]:w-[2rem] max-[700px]:h-[2rem]"
          />
          <input
            className="bg-transparent border-none font-[600] text-[2rem] w-[19.75rem]
             max-[700px]:text-[1.5rem] max-[700px]:w-[15rem]"
            type="button"
            value={'Cadastro de animais'}
            onClick={() => {
              router.push('/CadastroAnimais');
            }}
          />
        </div>

        <div className="flex m-auto items-center justify-center gap-4 shadow-lg
         rounded-[0.75rem] w-[60rem] h-[8rem] max-[1000px]:w-[40rem] max-[700px]:w-[21.25rem]">
          <Image
            src="/icons/events-perfil.svg"
            alt="clique para ir para cadastro de eventos"
            width={55}
            height={55}
            onClick={() => {
              router.push('/CadastroEvento');
            }}
            className="cursor-pointer max-[700px]:w-[2rem] max-[700px]:h-[2rem]"
          />
          <input
            className="bg-transparent border-none font-[600] text-[2rem] w-[19.75rem]
             max-[700px]:text-[1.5rem] max-[700px]:w-[15rem]"
            type="button"
            value={'Cadastro de eventos'}
            onClick={() => {
              router.push('/CadastroEvento');
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default PaginaUsuario;
