import Image from 'next/image';

const comoUsar = () => {
  return (
    <>
      <div className="relative mb-4">
        <h1 className="text-[2.5rem] font-[700] max-[480px]:text-[2rem] text-[#292929] text-center mb-4">
          Como encontrar o seu novo pet no nosso site?
        </h1>
        <div className="grid grid-cols-2 gap-4  max-[900px]:grid-cols-1">
          <div
            className=" px-4 py-4 ml-auto max-[900px]:m-auto w-[25rem] h-[25rem] max-[420px]:w-[20rem] max-[420px]:h-[20rem] bg-gradient-to-b
           from-[#3b82f6] to-[#60a5fa] rounded-[1rem]"
          >
            <p className="text-[3rem] font-[700] text-white mb-0">1</p>
            <p className="text-[1rem] font-[600] text-white text-justify">
              O 1º passo para encontrar seu novo amigo é clicar em "Animais" na
              barra de navegação logo no início do site, para ser redirecionado
              para a página onde está os pets disponíveis para adoção e suas
              respectivas casas.
            </p>
          </div>
          <div
            className="flex flex-col px-4 py-4 max-[900px]:m-auto w-[25rem] h-[25rem] max-[420px]:w-[20rem] max-[420px]:h-[20rem] bg-gradient-to-b
           from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]"
          >
            <p className="text-[3rem] font-[700] self-end max-[900px]:self-start text-white mb-0">
              2
            </p>
            <p className="text-[1rem] font-[600] text-white text-justify">
              O seu 2º passo pode ser filtrar os pets por localidade, porte,
              idade, cidade e o tipo de animal que você procura.
            </p>
          </div>
          <div className="shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <Image
              src="/images/dog-.jpg"
              alt="Imagem de um cachorro"
              width={320}
              height={260}
              className="image-pet rounded-full shadow-lg object-cover"
            />
          </div>
          <div
            className=" px-4 py-4 ml-auto max-[900px]:m-auto w-[25rem] h-[25rem] max-[420px]:w-[20rem] max-[420px]:h-[20rem] bg-gradient-to-b
           from-[#e6732e] via-[#ff8e3c] to-[#ffb86c] rounded-[1rem]"
          >
            <p className="text-[3rem] font-[700] text-white mb-0">3</p>
            <p className="text-[1rem] font-[600] text-white text-justify">
              {' '}
              O 3º passo é visualizar os animais que aparecerão de acordo com o
              seu filtro e clicar em saber mais no animal desejado, para obter
              mais informações sobre.
            </p>
          </div>
          <div
            className="flex flex-col px-4 max-[900px]:m-auto py-4 w-[25rem] h-[25rem] max-[420px]:w-[20rem] max-[420px]:h-[20rem]  bg-gradient-to-b
           from-[#3b82f6] to-[#60a5fa] rounded-[1rem]"
          >
            <p className="text-[3rem] font-[700] self-end max-[900px]:self-start text-white mb-0 text-justify">
              4
            </p>
            <p className="text-[1rem] font-[600] text-white text-justify">
              {' '}
              Caso você se interesse pelo animal e queira adota-lo, basta entrar
              contato com a casa responsável pelo animal, para começar as etapas
              de adoção responsável.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default comoUsar;
