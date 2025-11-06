'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MenuMobile = () => {
  const [abrir, setAbrir] = useState(false);

  const abrirMenu = () => {
    setAbrir(!abrir);
  };

  return (
    <>
      <div className={`flex flex-col ${abrir ? 'w-[10rem]' : 'w-fit'}`}>
        <button
          className="bg-transparent border-none w-fit"
          onClick={abrirMenu}
        >
          <Menu size={32} />
        </button>
        <div className={`w-full flex flex-col gap-4 ${abrir ? 'flex' : 'hidden'}`}>
          <AnimatePresence>
            {abrir && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="absolute top-0 max-[500px]:mr-[1rem] right-10 w-[10rem] bg-[#fffffe] flex flex-col gap-4  mt-4 items-center py-4 shadow-lg z-40"
              >
                <button
                  className="bg-transparent border-none w-fit"
                  onClick={abrirMenu}
                >
                  <X size={32} />
                </button>
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
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
export default MenuMobile;
