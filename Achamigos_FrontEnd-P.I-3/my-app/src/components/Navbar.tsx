'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { Button } from './Button';
import MenuMobile from './MenuMobile';
import Link from 'next/link';

const Nav2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem('userId');
    setIsLogged(!!id); 
  }, []);
  
  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark');
  //   } else {
  //     document.body.classList.remove('dark');
  //   }
  //   localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  // }, [darkMode]);

  const router = useRouter();
  
  const [filtered, setFiltered] = useState<string[]>([]);
  const pages = ['Login', 'Parceiros', 'Informacoes', 'Catalogo'];

  const handleSearch = (value: string) => {
    const results = pages.filter((page) =>
      page.toLowerCase().includes(value.toLowerCase()),
    );
    setFiltered(results);
  };


  return (
    <>
      <nav className="flex justify-around items-center 
                bg-[#f3f4f6] 
                dark:bg-gray-900
                py-3">
                  
        <div className="flex gap-[1.5rem] items-center">
          <Image
            src="/images/logocerto.png"
            alt="logo"
            width={250}
            height={80}
            className="cursor-pointer w-[9.375rem] h-[4.375rem] max-[500px]:w-[7rem] h-[3.36rem]"
            onClick={() => router.push('/')}
          />

          <Image
            src="/icons/accessibility.svg"
            alt="botão de acessibilidade"
            width={32}
            height={32}
            className="cursor-pointer"
          />

        </div>
        <Image
          src="/icons/search.svg"
          alt="botão de pesquisa"
          width={24}
          height={24}
          className="hidden max-[850px]:hidden max-[999px]:flex cursor-pointer"
        />
    
        {/* <div>
          <SearchBar placeholder="Procurar" onSearch={handleSearch} />
        </div> */}
        

        <div className="flex gap-4 items-center">
          <div className="flex gap-4 max-[850px]:hidden">
            <Link
              href="/"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e] 
                 hover:underline underline-offset-1"
            >
              Home
            </Link>


            <Link
              href="/animais"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white  
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Animais
            </Link>

            <Link
              href="/Eventos"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Eventos
            </Link>
          </div>

          <div className="hidden max-[850px]:flex max-[850px]:justify-center cursor-pointer max-[500px]:ml-[1rem]">
            <MenuMobile />
          </div>

            <Link
              href="/Usuarios"
              className="no-underline p-0 h-fit 
                 text-gray-900
                 dark:text-white 
                 hover:text-[#d9376e]
                 hover:underline underline-offset-1"
            >
              Parceiros
            </Link>
           
          <div className="flex gap-2 items-center">
            {!isLogged && (
              <Button
                title="Login"
                className="max-[500px]:hidden"
                onClick={() => router.push('/login')}
              />
            )}

            {isLogged && (
              <>
                <Button
                  title="Minha Página"
                  className="max-[500px]:hidden "
                  onClick={() => router.push('/PaginaUsuario')}
                />
                <Button
                  title="Logout"
                  onClick={() => {
                    localStorage.removeItem('userId');
                    setIsLogged(false);
                    router.push('/login');
                  }}
                  className="max-[500px]:hidden"
                >
                  
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

          {/* <button className="fixed top-4 right-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50"
            onClick={() => {
              if (darkMode) {
              setDarkMode(false);
            }else {
              setDarkMode(true);
            }
            }}
          >{darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </button> */}
    </>
  );
};
export default Nav2;
