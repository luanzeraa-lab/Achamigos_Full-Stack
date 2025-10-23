'use client'

import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";

import { useRouter } from "next/navigation";


const PaginaUsuario =()=>{

    const router = useRouter();

    return(
        <>
        <div className="min-h-screen flex flex-col bg-[#ffeccf]">
          <Nav2 />
            <input className="m-4" type="button" value={"Gerenciar Perfil"} onClick={()=>{router.push('/CadastroAnimais')}} />
            <input className="m-4" type="button" value={"Cadastro de animais"} onClick={()=>{router.push('/CadastroAnimais')}} />
            <input className="m-4" type="button" value={"Cadastro de eventos"} onClick={()=>{router.push('/CadastroEvento')}} />
          <Footer />
        </div>  
        </>
    )
}
export default PaginaUsuario;