"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    const router = useRouter();
    const [abrir, setAbrir] = useState(false); // Estado para controlar o menu

    // Função para alternar o estado do menu (abrir/fechar)
    const toggleMenu = () => {
        setAbrir(!abrir);
    };

    return (
        <div className="flex justify-center">
            <div className="w-full flex flex-col lg:w-2/3 lg:flex-row bg-[#ff8110] border-2 border-solid lg:rounded-full h-full py-2 items-center justify-evenly relative">

                {/* Ícone de Menu Hambúrguer (aparece em telas pequenas) */}
                <div className="lg:hidden flex items-center justify-between w-full">
                    <button
                        className="text-black"
                        onClick={toggleMenu}
                    >
                        {/* Ícone de "hambúrguer" */}
                        <span className="block w-6 h-1 bg-black mb-1"></span>
                        <span className="block w-6 h-1 bg-black mb-1"></span>
                        <span className="block w-6 h-1 bg-black"></span>
                    </button>
                </div>

                {/* Menu de navegação */}
                <div
                    className={`lg:flex lg:justify-evenly lg:w-full lg:flex-row flex-col items-center absolute lg:static bg-[#ff8110] w-full py-2 ${
                        abrir ? "flex" : "hidden"
                    }`} // Condicional para exibir ou esconder o menu em telas pequenas
                >
                    <a
                        href="index.html"
                        className="text-decoration-none text-black hover:scale-150 py-2"
                    >
                        Home
                    </a>
                    <a
                        className="text-decoration-none text-black hover:scale-150 py-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            router.push("/quemsomos");
                        }}
                    >
                        Quem Somos
                    </a>

                    <a
                        className="text-decoration-none text-black hover:scale-150 py-2"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                            router.push("/parceiros");
                        }}
                    >
                        Parceiros
                    </a>

                    <a
                        href="catalogo.html"
                        className="text-decoration-none text-black hover:scale-150 py-2"
                    >
                        Catálogo
                    </a>
                    <a
                        href="informações.html"
                        className="text-decoration-none text-black hover:scale-150 py-2"
                    >
                        Informações
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;