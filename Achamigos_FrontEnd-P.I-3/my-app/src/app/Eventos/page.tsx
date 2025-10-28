import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
const Eventos = () => {


   return (
      <>
         <Nav2 />
         <main className=' mx-4 min-h-screen my-4 rounded-[1rem] flex flex-col items-center bg-[#f3f4f6] p-4'>
            <p className='self-start'>Próximos Eventos</p>

            <div className='flex flex-wrap gap-3'>
               <div className='hover:scale-105 rounded-[1rem] m-auto bg-[#fffffe] p-4 outline-1 outline-[#a3a3a3] flex flex-col gap-2'>

                  <Image
                     src="/images/vacinacao.png"
                     alt="imagem de evento de vacinação"
                     width={300}
                     height={220}
                     className='rounded-[1rem] w-full'
                  />

                  <p className='m-0 text-[#374151]'>10 de Novembro, 2025 - 14h</p>
                  <h1 className='font-[700] text-[1.5rem] m-0'>Campanha de vacinação</h1>
                  <p className='text-[#374151]'>📍 Rua Alberto de Morais, 552, Votorantim, SP</p>

               </div>

               <div className='hover:scale-105 rounded-[1rem] m-auto bg-[#fffffe] p-4 outline-1 outline-[#a3a3a3] flex flex-col gap-2'>

                  <Image
                     src="/images/feira_adocao.png"
                     alt="imagem de evento de feira de adoção"
                     width={300}
                     height={220}
                     className='rounded-[1rem] w-full'
                  />

                  <p className='m-0 text-[#374151]'>15 de Novembro, 2025 - 13h</p>
                  <h1 className='font-[700] text-[1.5rem] m-0'>Feira de adoção</h1>
                  <p className='text-[#374151]'>📍 Rua Alberto de Morais, 552, Votorantim, SP</p>

               </div>

               <div className='hover:scale-105 rounded-[1rem] m-auto bg-[#fffffe] p-4 outline-1 outline-[#a3a3a3] flex flex-col gap-2'>

                  <Image
                     src="/images/conscientizacao.png"
                     alt="imagem de evento de conscientização"
                     width={300}
                     height={220}
                     className='rounded-[1rem] w-full'
                  />

                  <p className='m-0 text-[#374151]'>20 de Novembro, 2025 - 14h</p>
                  <h1 className='font-[700] text-[1.5rem] m-0'>Evento de conscientização</h1>
                  <p className='text-[#374151]'>📍 Rua Alberto de Morais, 552, Votorantim, SP</p>

               </div>

            </div>


         </main>

         <Footer/>
        
      </>

   )
}


export default Eventos;
