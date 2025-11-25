'use client';
import styles from './CadastroAnimais.module.scss'
import { useRouter } from 'next/navigation';
import { Container, Image, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { link } from 'fs';

interface IVacina {
  id: string;
  nome: string;
}

const CadastroAnimais = () => {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      router.push("/Login");
    } else {
      setUserId(id);
    }
  }, []);



  const [nomeAnimal, setNomeAnimal] = useState('');
  const [idadeAnimal, setIdadeAnimal] = useState<number | ''>('');
  const [racaAnimal, setRacaAnimal] = useState('');
  const [sexoAnimal, setSexoAnimal] = useState('');
  const [porteAnimal, setPorteAnimal] = useState('');
  const [pesoAnimal, setPesoAnimal] = useState<number | ''>('');
  const [vacinas, setVacinas] = useState<IVacina[]>([]);
  const [vacinaAnimal, setVacinaAnimal] = useState<string[]>([]);
  const [obsAnimal, setObsAnimal] = useState('');
  const [linkAnimal, setLinkAnimal] = useState('');
  const [tipo, setTipo] = useState('');
  const [castrado, setCastrado] = useState(false);
  const [imgAnimal, setImgAnimal] = useState<File | undefined>(undefined);

  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const res = await axios.get('https://vacinaspringboot.onrender.com/api/vacinas');
        console.log('Vacinas recebidas:', res.data);
        setVacinas(res.data);
      } catch (err) {
        console.error('Erro ao buscar vacinas', err);
      }
    };
    fetchVacinas();
  }, []);

  const vacinaChecada = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setVacinaAnimal([...vacinaAnimal, value]);
    } else {
      setVacinaAnimal(vacinaAnimal.filter((v) => v !== value));
    }
  };

  const createAnimal = async (
  nome: string,
  idade: number | '',
  raca: string,
  sexo: string,
  porte: string,
  peso: number | '',
  vacinasIds: string[],
  observacoes: string,
  linkAnimal: string,
  castracao: boolean,
  tipo: string,
  imagem: File | undefined
) => {
  const formData = new FormData();
  formData.append('nome', nome);
  if (idadeAnimal !== '') formData.append('idade', idadeAnimal.toString());
  formData.append('raca', raca);
  formData.append('sexo', sexo);
  formData.append('porte', porte);
  if (pesoAnimal !== '') formData.append('peso', pesoAnimal.toString());
  formData.append('observacoes', observacoes);
  formData.append('linkAnimal', linkAnimal);
  formData.append('castracao', castracao ? 'true' : 'false');
  formData.append('tipo', tipo);
  formData.append('userId', userId || '');

  if (imagem) formData.append('imagem', imagem);

  const vacinasCompletas = vacinasIds.map(vId => { 
  const vacinaObj = vacinas.find(v => v.id === vId); 
  return { id: vId, nome: vacinaObj?.nome || 'Desconhecida' };
});
formData.append('vacinas', JSON.stringify(vacinasCompletas));
 
  try {
    
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/animais`, 
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          'x-api-key': 1234,
        },
      }
    );
    const idAnimal = res.data._id;

    if (res.status === 201 || res.status === 200) {
      console.log('FormData:');
for (const [key, value] of formData.entries()) {
  console.log(key, value);
}
      try {
        await axios.post(`https://vacinaspringboot.onrender.com/vacinacao/gerar/${idAnimal}`);
        alert(`Animal cadastrado com sucesso! ID: ${idAnimal}`);
        router.push('/PaginaUsuario');
      } catch (err) {
  
        alert('Animal cadastrado, mas falha ao tentar gerar as vacinas.');
        console.error('Falha ao gerar vacinas:', err);
      }
    } else {
      alert('Falha ao tentar cadastrar o animal');
    }
  } catch (err) {
    
    alert('Falha ao tentar cadastrar o animal');
    console.error('Erro no cadastro inicial do animal:', err);
    if (axios.isAxiosError(err) && err.response) {
        console.error('Detalhe do Erro do Servidor (400):', err.response.data);
    }
  }
};
  

  return (
    <Container fluid id={styles['allpage']}>
      <div id={styles['main_']}>
        <div className={styles['main-container']}>
          <div className={styles['back']}>
            <Image
              src="/icons/arrow-left-02.svg"
              alt="Icone de Voltar"
              width={32}
              height={32}
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/PaginaUsuario')}
            />
            <span>Voltar</span>
          </div>

          <h1>Formulário de cadastro</h1>
          <p className="my-6">
            Preencha os dados abaixo para cadastrar o amiguinho no achamigos &hearts;
          </p>

          <Form>
            
            <div className={styles['dog-info']}>
              <h5>🐾 Informações do amiguinho</h5>
              <div className={styles['input-wrapper']}>
                <Form.Label htmlFor="name">Nome</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Insira o nome"
                  value={nomeAnimal}
                  onChange={(e) => setNomeAnimal(e.target.value)}
                />
              </div>

              <div className={styles['select-wrapper']}>
                <Form.Label htmlFor="gender">Tipo</Form.Label>
                <Form.Select
                  id="gender"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Outro">Outro</option>
                </Form.Select>
              </div>

              <div className={styles['input-wrapper']}>
                <Form.Label htmlFor="age">Idade (Anos de vida)</Form.Label>
                <Form.Control
                  id="age"
                  type="number"
                  placeholder="Insira a idade"
                  value={idadeAnimal}
                  onChange={(e) => setIdadeAnimal(e.target.value === '' ? '' : parseInt(e.target.value))}

                />
              </div>

              <div className={styles['input-wrapper']}>
                <Form.Label htmlFor="race">Raça</Form.Label>
                <Form.Control
                  id="race"
                  type="text"
                  placeholder="Insira a raça"
                  value={racaAnimal}
                  onChange={(e) => setRacaAnimal(e.target.value)}
                />
              </div>

              <div className={styles['select-wrapper']}>
                <Form.Label htmlFor="gender">Sexo</Form.Label>
                <Form.Select
                  id="gender"
                  value={sexoAnimal}
                  onChange={(e) => setSexoAnimal(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="macho">Macho</option>
                  <option value="femea">Fêmea</option>
                </Form.Select>
              </div>

              <div className={styles['select-wrapper']}>
                <Form.Label htmlFor="size">Porte</Form.Label>
                <Form.Select
                  id="size"
                  value={porteAnimal}
                  onChange={(e) => setPorteAnimal(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  <option value="pequeno">Pequeno</option>
                  <option value="medio">Médio</option>
                  <option value="grande">Grande</option>
                </Form.Select>
              </div>

              <div className={styles['input-wrapper']}>
                <Form.Label htmlFor="weight">Peso (kg)</Form.Label>
                <Form.Control
                  id="weight"
                  type="number"
                  step="0.1"
                  placeholder="Peso em kg"
                  value={pesoAnimal}
                  onChange={(e) => setPesoAnimal(e.target.value === '' ? '' : parseFloat(e.target.value))}
                />
              </div>
            </div>

            
            <div className={styles['dog-health']}>
              <h5>💉 Vacinas</h5>
              {vacinas.map((v) => (
              <Form.Check
                key={v.id}          
                label={v.nome}
                value={v.id}        
                checked={vacinaAnimal.includes(v.id)} 
                onChange={vacinaChecada}
              />
            ))}

              
              <Form.Label htmlFor="observations" className="mt-3 mb-0.5">
                🐶 Observações
              </Form.Label>
              <Form.Control
                id="observations"
                as="textarea"
                rows={5}
                placeholder="Escreva informações adicionais sobre o animal"
                value={obsAnimal}
                onChange={(e) => setObsAnimal(e.target.value)}
              />

              <Form.Label htmlFor="linkAnimal" className="mt-3 mb-0.5">
                🔗 Link para mais informações sobre o animal
              </Form.Label>
              <Form.Control
                id="linkAnimal"
                type="text"
                placeholder="Escreva informações adicionais sobre o animal"
                value={linkAnimal}
                onChange={(e) => setLinkAnimal(e.target.value)}
              />

              
              <Form.Label className="mt-3 mb-0.5">✂️ Castração</Form.Label>
              <Form.Check
                type="radio"
                id="castrado-sim"
                name="castracao"
                label="Sim"
                checked={castrado === true}
                onChange={() => setCastrado(true)}
              />
              <Form.Check
                type="radio"
                id="castrado-nao"
                name="castracao"
                label="Não"
                checked={castrado === false}
                onChange={() => setCastrado(false)}
              />
            </div>

            
            <div className="droparea-wrapper">
              <h5>📷 Foto do animal</h5>
              <div className={styles['droparea']}>
                <Form.Control
                  className={styles['inputcontrol']}
                  type="file"
                  id="imagem"
                  name="imagem"
                  accept="image/*"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setImgAnimal(event.target.files ? event.target.files[0] : undefined);
                  }}
                />
                <p>
                  Clique aqui para <br /> selecionar arquivos
                </p>
              </div>
            </div>

            
            <div className={styles['action-wrapper']}>
              <Button
                className={styles['btn-primary']}
                type="button"
                disabled={!userId}
                onClick={() =>
                  createAnimal(
                    nomeAnimal,
                    idadeAnimal,
                    racaAnimal,
                    sexoAnimal,
                    porteAnimal,
                    pesoAnimal,
                    vacinaAnimal,
                    obsAnimal,
                    linkAnimal,
                    castrado,
                    tipo,
                    imgAnimal
                  )
                }
              >
                Finalizar cadastro
              </Button>
            </div>
          </Form>
        </div>
      </div>

      <aside className={styles['asideee']}>
        <div className={styles['aside-container']}>
          <header>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logoprojetoachamigos_processed.png"
                alt="Logo achamigos"
                width={32}
                height={32}
              />
              <h3 className="my-auto">achamigos</h3>
            </div>

            <h2>
              Porque, para nós, toda <span> adoção </span> importa
            </h2>

            <p>
              Cadastre um amiguinho para que possamos ajudá-lo a encontrar um
              ambiente acolhedor, seguro e cheio de amor.
            </p>
          </header>
          <Image
            className={styles['logoprincipal']}
            src="/images/logocerto.png"
            width={500}
            height={200}
            alt="logo achamigos"
          />
        </div>
      </aside>
    </Container>
  );
};

export default CadastroAnimais;
