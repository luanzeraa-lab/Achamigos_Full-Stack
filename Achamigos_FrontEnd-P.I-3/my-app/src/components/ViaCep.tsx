import { useState } from "react";

interface IViaCepResponse {
  cep: string;
  logradouro: string;
  localidade: string;
}

export function ViaCep() {
  const [data, setData] = useState<IViaCepResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchCep = async (cep: string) => {
    if (!cep) return;
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const result: IViaCepResponse & { erro?: boolean } = await response.json();

      if (result.erro) {
        setError(true);
        setData(null);
      } else {
        setData(result);
      }
    } catch {
      setError(true);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchCep };
}