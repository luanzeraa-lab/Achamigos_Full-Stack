'use client'

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useState } from "react";
import Nav2 from "@/components/Nav2";
import Footer from "@/components/Footer";

const createEvento = (nomeEvento: string, data_Publicacao: Date, data_Exclusao : Date, tipo_Evento: string, texto: string,
     eventoStatus: string, imagem: File | undefined
) => {
    const formData = new FormData();
    formData.append("nomeEvento", nomeEvento);
    formData.append("data_Publicacao", data_Publicacao.toISOString());
    formData.append("data_Exclusao", data_Exclusao.toISOString());
    formData.append("tipo_Evento", tipo_Evento);
    formData.append("texto", texto);
    formData.append("eventoStatus", eventoStatus);
    if (imagem) {
        formData.append("imagem", imagem);
    }

    axios.post("http://localhost:3002/cadastroeventos", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })

    .then((res) => {
      console.log(JSON.stringify(res.data));
      if (res.status === 200) {
        alert("Evento cadastrado com sucesso!");
      } else {
        alert("Falha ao tentar cadastrar o evento");
      }
    })
    .catch(() => {
      alert("Falha ao tentar cadastrar o animal");
    });
};

const CadastroEventos = () => {
    

    const [nomeEvento, setNomeEvento] = useState<string>("");
    const [data_Publicacao, setData_Publicacao] = useState<string>("");
    const [data_Exclusao , setData_Exclusao ] = useState<string>("");
    const [tipo_Evento, setTipo_Evento] = useState<string>("");
    const [texto, setTexto] = useState<string>("");
    const [eventoStatus, setEventoStatus] = useState<string >("");
    const [imagemEvento, setImagemEvento] = useState<File | undefined>(undefined);

    return (
    
          
          <>
          <div className="min-h-screen flex flex-col bg-[#ffeccf]">
          <Nav2 /> 
          <Form>
            <div >
              <Form.Label>Nome do Evento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o nome do evento"
                value={nomeEvento}
                onChange={(e) => setNomeEvento(e.target.value)}
              />
            </div>
            
            <div >
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                placeholder="Insira o telefone"
                value={data_Publicacao}
                onChange={(e) => setData_Publicacao(e.target.value)}
              />
            </div>

            <div >
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                placeholder="Insira o CNPJ"
                value={data_Exclusao }
                onChange={(e) => setData_Exclusao (e.target.value)}
              />
            </div>

            <div >
              <Form.Label>Tipo do evento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira o tipo do evento"
                value={tipo_Evento}
                onChange={(e) => setTipo_Evento(e.target.value)}
              />
            </div>

            <div >
              <Form.Label>Texto de explicação</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insira a explicação do evento"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
              />
            </div>

            <div >
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                value={eventoStatus}
                onChange={(e) => setEventoStatus(e.target.value)}
              />
            </div>

            <div className="droparea-wrapper">
                             <h5>📷 Foto do Evento</h5>
                            <div >
                                    
                                    <Form.Control
                                        type="file"
                                        id="imagem"
                                        name="imagem"
                                        accept="image/*"
                                        onChange={(event)=>{
                                             const file = (event.target as HTMLInputElement).files?.[0];
                                            setImagemEvento(file);
                                        }}
                                    />
                                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M34.9552 18.0221C34.97 18.022 34.985 18.022 35 18.022C39.9706 18.022 44 22.0588 44 27.0386C44 31.6796 40.5 35.5016 36 36M34.9552 18.0221C34.9848 17.6921 35 17.3579 35 17.0202C35 10.9339 30.0752 6 24 6C18.2465 6 13.5247 10.4253 13.0408 16.0638M34.9552 18.0221C34.7506 20.2952 33.8572 22.3692 32.4856 24.033M13.0408 16.0638C7.96796 16.5475 4 20.8278 4 26.0366C4 30.8834 7.43552 34.9264 12 35.8546M13.0408 16.0638C13.3565 16.0337 13.6765 16.0183 14 16.0183C16.2516 16.0183 18.3295 16.7639 20.001 18.022"
                                        stroke="#D6D3D1"  
                                       />
                                    <path
                                        d="M24 26V42M24 26C22.5996 26 19.9831 29.9886 19 31M24 26C25.4004 26 28.017 29.9886 29 31"
                                        stroke="#D6D3D1" 
                                         />
                                </svg>
                                    <p>Clique aqui para <br /> selecionar arquivos</p>
                                    </div>
                                </div>
                        
                        <Button  type="button"
                        onClick={()=>{
                            createEvento(nomeEvento, new Date(data_Publicacao), new Date(data_Exclusao), tipo_Evento, texto, eventoStatus, imagemEvento);
                        }}>Finalizar cadastro</Button>
          </Form>
          <Footer />
          </div>
          </>
  )

};

export default CadastroEventos;