"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


const Navbarr =()=>{

    const router = useRouter();
    const [abrir, setAbrir] = useState(false);

    const abrirMenu =()=>{
        setAbrir(!abrir);
    };

    return(
            
        <div className="flex justify-center ">
            <div className="w-full flex flex-col  md:w-2/3 md:flex-row  md:rounded-full h-full py-2 items-center justify-evenly ">
                
                <div className="md:hidden flex items-center justify-between w-2/3">
                    <button 
                        className="bg-[#ff8110] border-2  text-xs p-2 w-full h-auto"
                        onClick={abrirMenu}>

                    ☰</button>
                    
                </div>

                <div className={`w-full flex-col  md:flex md:flex-row bg-[#ff8110] border-2 border-solid md:rounded-full h-full py-2 items-center justify-evenly ${abrir ? "flex" : "hidden"}`}>

                <a className=" text-center text-decoration-none text-black hover:scale-150 py-2"
                    style={{cursor:'pointer'}} 
                    onClick={()=>{
                        router.push("/")
                    }}>Home</a>

                    <a className=" text-center text-decoration-none text-black hover:scale-150 py-2"
                    style={{cursor:'pointer'}} 
                    onClick={()=>{
                        router.push("/quemsomos")
                    }}>Quem Somos</a>

                    <a className="text-decoration-none text-black hover:scale-150  py-2 "
                    style={{cursor:'pointer'}} 
                    onClick={()=>{
                        router.push("/parceiros")
                    }}>Parceiros</a>
                    
                    <a className=" text-center text-decoration-none text-black hover:scale-150 py-2"
                    style={{cursor:'pointer'}} 
                    onClick={()=>{
                        router.push("/catalogo")
                    }}>Catálogo</a>

                    <a className=" text-center text-decoration-none text-black hover:scale-150 py-2"
                    style={{cursor:'pointer'}} 
                    onClick={()=>{
                        router.push("/informacoes")
                    }}>Informações</a>
                </div>    
            </div>
        </div>
    )
};
export default Navbarr;