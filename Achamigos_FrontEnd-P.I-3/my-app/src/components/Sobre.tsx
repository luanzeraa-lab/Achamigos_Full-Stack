import Image from 'next/image';
const Sobre = () => {
  return (
    <>
      <div
        className="relative mt-[2.5rem] mb-[2.5rem] flex  max-[800px]:mb-[8rem] max-[800px]:flex-col gap-4 relative bg-[#fffbeb] h-[32rem] rounded-tl-[30%]
   rounded-tr-[30%] rounded-bl-[30%] rounded-br-[30%]"
      >
        <Image
          src="/images/cachorropatacima.png"
          alt="Imagem de um cachorro com uma pata pra cima"
          width={550}
          height={550}
          className="h-[34.375rem] w-[34.375rem] max-[1400px]:h-[13.375rem] max-[1400px]:w-[13.375rem] max-[800px]:h-[9.375rem] max-[800px]:w-[9.375rem]"
        />

        <div className="mx-auto mt-4">
          <h1 className="w-fit text-[3rem] max-[800px]:text-center max-[800px]:text-[2.5rem] font-[700] m-auto text-[#292929]">
            Objetivo do site
          </h1>
          <p className="font-[600] text-justify text-[1.5rem] max-[800px]:text-center max-[800px]:text-[1rem] mt-4 text-[#292929]">  
            O principal objetivo do nosso site é ajudar você a encontrar seu
            novo melhor amigo de forma simples e rápida. Contamos com parceiros
            (casas de adoção) que têm animais prontos para receber carinho e
            amor. Aqui, você pode filtrar e encontrar o pet que mais combina com
            o seu estilo de vida, sem perder tempo navegando em vários
            sites.{' '}
          </p>
        </div>
        
        <Image
          src="/images/gatopracima.png"
          alt="Imagem de um gato com a pata pra cima"
          width={550}
          height={550}
          className="image-gato h-[34.375rem] w-[34.375rem] max-[800px]:h-[9.375rem] max-[800px]:w-[9.375rem]
          max-[1400px]:h-[13.375rem] max-[1400px]:w-[13.375rem] max-[800px]:ml-auto max-[400px]:hidden"
        />
      </div>
    </>
  );
};

export default Sobre;
