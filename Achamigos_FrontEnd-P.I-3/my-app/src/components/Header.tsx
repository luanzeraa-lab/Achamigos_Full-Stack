"use client";



import {  Button } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState} from 'react';



const Header = () => {

    const router = useRouter();
    const [clicado, setClicado] = useState(false);

    const clicar =()=>{
        setClicado(true);
    }

    const desfocar =()=>{
        setClicado(false);
    }

    
    const [visivel, setVisivel] = useState(false);

    const visibilidade =()=>{
    setVisivel(true);
    }
   

    

    return (
        
       
        <>
                <div className="flex flex-row justify-between items-center mt-4 p-4">
                        <a
                            className="text-decoration-none text-black rounded-full px-5 py-2 border-2 bg-[#ff8110] hover:scale-150 transition-transform"
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                            router.push("/login");
                            }}
                        >
                            Login
                        </a>

                        
                </div>


                        <div className="  hidden fixed top-11 right-0 z-50 md:flex items-center rounded-full justify-center w-auto sm:w-auto lg:order-3"
                         >


                            <input
                                className={` border-2 rounded-full placeholder:text-center text-black py-2 px-4 w-full sm:w-auto
                                    ${clicado ? `bg-[#ff8110]` : `bg-[#ff8110]/20` 
                                     }`}

                                     onFocus={clicar}
                                     onBlur={desfocar}


                                id="pesquisar"
                                placeholder="Pesquisar..."
                            />
                            <Button className=" border-2 border-black" variant="light">
                            <Image 
                            className="w-full h-8 mr-2 "
                            src="/images/gatinho.png" 
                            width={800}
                            height={200}
                            alt="Ícone de Pesquisa"  />
                                
                            </Button>
                        </div>    

            <div className="flex justify-center p-4">
                    
                    <Image 
                        className=""
                        src="/images/logocerto.png"
                        width={650}
                        height={200}
                        alt="logo"
                        onMouseEnter={visibilidade}
                    />

            </div>     
        </>
    );
}

export default Header;