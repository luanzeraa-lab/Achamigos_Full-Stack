import Image from 'next/image';
import React, { useState } from 'react';

type SearchBarProps = {
  placeholder?: string;
  onSearch: (value: string) => void;
};

function SearchBar({ placeholder = 'Pesquisar...', onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div
      className="flex flex-row px-4 py-2 items-center gap-3 shadow-sm w-[28.125rem] h-[2.625rem]
     max-[1270px]:w-[20.125rem] max-[67.4375rem]:w-[10.75rem] max-[1000px]:hidden  bg-white border-1 border-solid
      focus-within:border-[#a1a1aa] border-[#d4d4d8] rounded-[.5rem]"
    >
      <button
        type="submit"
        className="border-none flex appearance-none bg-transparent h-[1rem] w-[1rem] items-center"
      >
        <div>
          <Image
            src="/icons/search.svg"
            alt="botão de pesquisa"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </button>
      <input
        type="text"
        name="search"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="outline-none border-none bg-transparent w-[24.125rem] h-[2.625rem] text-[0.9375rem] "
      />
    </div>
  );
}

export { SearchBar };
