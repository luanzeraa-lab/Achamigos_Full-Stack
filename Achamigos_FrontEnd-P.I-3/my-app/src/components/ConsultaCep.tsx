'use client'

import React, { useState, useEffect } from "react";
import { ViaCep } from "./ViaCep";
import Form from 'react-bootstrap/Form';
import { IEndereco } from "@/app/CadastroUsuario/IEndereco";

function ConsultaCep() {
  const { data, loading, error, fetchCep } = ViaCep();

 
  const [cepUser, setCepUser] = useState<string>("");
  const [cidadeUser, setCidadeUser] = useState<string>("");
  const [ruaUser, setRuaUser] = useState<string>("");
  const [numeroUser, setNumeroUser] = useState<string>("");
  
  useEffect(() => {
    if (data) {
      setCepUser(data.cep || "");
      setCidadeUser(data.localidade || "");
      setRuaUser(data.logradouro || "");
      setNumeroUser("");
    }
  }, [data]);

  useEffect(() => {
    window.getEndereco = (): IEndereco => ({
      cep: cepUser,
      cidade: cidadeUser,
      rua: ruaUser,
      numero: numeroUser
    });
  }, [cepUser, cidadeUser, ruaUser, numeroUser]);


  return (
    <div>
      <Form.Label>CEP</Form.Label>
      <Form.Control
        type="text"
        value={cepUser}
        onChange={(e) => setCepUser(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={() => fetchCep(cepUser)} disabled={loading}>
        {loading ? "Buscando..." : "Buscar CEP"}
      </button>

      {error && <p style={{ color: "red" }}>Erro ao buscar CEP.</p>}

      <Form.Label>Cidade</Form.Label>
      <Form.Control
        type="text"
        value={cidadeUser}
        onChange={(e) => setCidadeUser(e.target.value)}
      />

      <Form.Label>Rua</Form.Label>
      <Form.Control
        type="text"
        value={ruaUser}
        onChange={(e) => setRuaUser(e.target.value)}
      />
    </div>
  );
}

export default ConsultaCep;
