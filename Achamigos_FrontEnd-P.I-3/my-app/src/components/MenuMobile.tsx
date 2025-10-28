'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const MenuMobile = () => {
  const [abrir, setAbrir] = useState(false);

  const abrirMenu = () => {
    setAbrir(!abrir);
  };

  return (
    <>
      <div className="flex flex-col">
        <button className="bg-transparent border-none" onClick={abrirMenu}>
          <Image
            src="/icons/menu.svg"
            alt="botão para abrir menu"
            width={32}
            height={32}
          />
        </button>

        <div
          className={`w-full flex flex-wrap gap-4 bg-[#ffffe]  ${abrir ? 'flex' : 'hidden'}`}
        >
          <Link
            href="/parceiros"
            className="no-underline p-0 h-fit text-[.75rem] text-[#0d0d0d] hover:text-[#d9376e]
             hover:underline underline-offset-1"
          >
            Parceiros
          </Link>

          <Link
            href="/animais"
            className="no-underline p-0 h-fit text-[.75rem] text-[#0d0d0d] hover:text-[#d9376e]
             hover:underline underline-offset-1"
          >
            Animais
          </Link>

          <Link
            href="/Eventos"
            className=" no-underline p-0 text-[.75rem] h-fit text-[#0d0d0d] hover:text-[#d9376e]
             hover:underline underline-offset-1"
          >
            Eventos
          </Link>

          <Link
            href="/login"
            className="no-underline p-0 h-fit text-[.75rem] text-[#0d0d0d] hover:text-[#d9376e]
             hover:underline underline-offset-1 min-[490px]:hidden"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};
export default MenuMobile;
