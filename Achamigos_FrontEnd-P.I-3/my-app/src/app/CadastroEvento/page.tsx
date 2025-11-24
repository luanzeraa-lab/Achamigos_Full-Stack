'use client';
import styles from './CadastroEventos.module.scss';
import { Button } from '../../components/Button';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import Nav2 from '@/components/Navbar';
import Footer from '@/components/Footer';
import eventosService from '../../services/eventoService';
import { IEvento } from './IEvento';
import { useRouter } from 'next/navigation';

const CadastroEventos = () => {
  const [formData, setFormData] = useState<IEvento>({
    tipo_Evento: '',
    texto: '',
    data: '',
    linkEvento: ''
  });
  const router = useRouter();
  const [imagem, setImagem] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImagem(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();
      dataToSend.append('tipo_Evento', formData.tipo_Evento);
      dataToSend.append('texto', formData.texto);
      dataToSend.append('data', formData.data);
      dataToSend.append('linkEvento', formData.linkEvento);

      if (imagem) dataToSend.append('imagem', imagem);

      await eventosService.create(dataToSend);

      alert('Evento cadastrado com sucesso!');
      setFormData({ tipo_Evento: '', texto: '', data: '', linkEvento: '' });
      setImagem(null);
      router.push('/Eventos');
    } catch (error) {
      console.error('Erro ao cadastrar evento:', error);
      alert('Erro ao cadastrar evento.');
    }
  };
  return (
    <>
    <Nav2 />
      <div className="flex flex-col items-center gap-0 mt-[2.5rem]">
        <h1 className='text-[700] text-center'>Cadastro de eventos</h1> 
        <div className="w-full max-w-3xl px-4">    
        </div>
        <Form onSubmit={handleSubmit} className='max-[850px]:w-[35.625rem] max-[600px]:w-[20.625rem]  shadow-sm rounded-[.5rem] h-[85rem] w-[50rem] flex flex-col gap-2 bg-[#f5f5f4] p-4 mb-[4rem]'>
          <div>
            <Form.Label>Nome do Evento</Form.Label>
            <Form.Control
              type="text"
              name='tipo_Evento'
              placeholder="Insira o nome do evento"
              value={formData.tipo_Evento}
              onChange={handleChange}
            />
          </div>

          <div>
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="date"
              name='data'
              value={formData.data}
              onChange={handleChange}
            />
          </div>

          <div>
            <Form.Label>Texto de explicação</Form.Label>
            <Form.Control
            as="textarea" rows={4}
              type="text"
              name='texto'
              placeholder="Digite sobre o evento..."
              value={formData.texto}
              onChange={handleChange}
            />
          </div>

            <div>
            <Form.Label>Link do Evento</Form.Label>
            <Form.Control
              type="text"
              name='linkEvento'
              required
              placeholder="Insira o link da publicação do evento"
              value={formData.linkEvento}
              onChange={handleChange}
            />
          </div>

          <div className="droparea-wrapper">
           <Form.Label>📷 Foto do evento</Form.Label>
            <div className={styles['droparea']}>
              <Form.Control
              className={styles['inputcontrol']}
                type="file"
                id="imagem"
                name="imagem"
                accept="image/*"
                onChange={handleFileChange}
              />
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.9552 18.0221C34.97 18.022 34.985 18.022 35 18.022C39.9706 18.022 44 22.0588 44 27.0386C44 31.6796 40.5 35.5016 36 36M34.9552 18.0221C34.9848 17.6921 35 17.3579 35 17.0202C35 10.9339 30.0752 6 24 6C18.2465 6 13.5247 10.4253 13.0408 16.0638M34.9552 18.0221C34.7506 20.2952 33.8572 22.3692 32.4856 24.033M13.0408 16.0638C7.96796 16.5475 4 20.8278 4 26.0366C4 30.8834 7.43552 34.9264 12 35.8546M13.0408 16.0638C13.3565 16.0337 13.6765 16.0183 14 16.0183C16.2516 16.0183 18.3295 16.7639 20.001 18.022"
                  stroke="#D6D3D1"
                />
                <path
                  d="M24 26V42M24 26C22.5996 26 19.9831 29.9886 19 31M24 26C25.4004 26 28.017 29.9886 29 31"
                  stroke="#D6D3D1"
                />
              </svg>
              <p>
                Clique aqui para <br /> selecionar arquivos
              </p>
            </div>
          </div>

          <Button
          title='Finalizar Cadastro'
          className='w-full mt-auto'
          type='submit'
          />
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default CadastroEventos;
