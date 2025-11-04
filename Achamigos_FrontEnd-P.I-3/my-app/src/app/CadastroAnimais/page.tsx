'use client';
import styles from './CadastroAnimais.module.scss';
import { useRouter } from 'next/navigation';
import { Container, Image, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface IVacina {
  id: string;
  nome: string;
}

const CadastroAnimais = () => {
  const router = useRouter();

  const [nomeAnimal, setNomeAnimal] = useState('');
  const [idadeAnimal, setIdadeAnimal] = useState('');
  const [racaAnimal, setRacaAnimal] = useState('');
  const [sexoAnimal, setSexoAnimal] = useState('');
  const [porteAnimal, setPorteAnimal] = useState('');
  const [pesoAnimal, setPesoAnimal] = useState('');
  const [vacinas, setVacinas] = useState<IVacina[]>([]);
  const [vacinaAnimal, setVacinaAnimal] = useState<string[]>([]);
  const [obsAnimal, setObsAnimal] = useState('');
  const [castrado, setCastrado] = useState(false);
  const [imgAnimal, setImgAnimal] = useState<File | undefined>(undefined);

  useEffect(() => {
    const fetchVacinas = async () => {
      try {
        const res = await axios.get('http://localhost:8081/api/vacinas');
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

  const createAnimal = (
    nome: string,
    idade: string,
    raca: string,
    sexo: string,
    porte: string,
    peso: string,
    vacinas: string[],
    observacoes: string,
    castracao: boolean,
    imagem: File | undefined
  ) => {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('idade', idade);
    formData.append('raca', raca);
    formData.append('sexo', sexo);
    formData.append('porte', porte);
    formData.append('peso', peso);
    formData.append('vacinas', JSON.stringify(vacinas));
    formData.append('observacoes', observacoes);
    formData.append('castracao', castracao ? 'true' : 'false');
    if (imagem) formData.append('imagem', imagem);

    axios
      .post('http://localhost:3002/animais', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        const idAnimal = res.data._id;
        if (res.status === 201) {
          axios
            .post('http://localhost:8081/vacinacao', { idAnimal, vacinas })
            .then(() => alert(`Animal cadastrado com sucesso! ID: ${idAnimal}`))
            .catch(() => alert('Falha ao tentar cadastrar as vacinas'));
        } else {
          alert('Falha ao tentar cadastrar o animal');
        }
      })
      .catch(() => alert('Falha ao tentar cadastrar o animal'));
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

              <div className={styles['input-wrapper']}>
                <Form.Label htmlFor="age">Idade</Form.Label>
                <Form.Control
                  id="age"
                  type="text"
                  placeholder="Insira a idade"
                  value={idadeAnimal}
                  onChange={(e) => setIdadeAnimal(e.target.value)}
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
                  type="text"
                  step="0.1"
                  placeholder="Peso em kg"
                  value={pesoAnimal}
                  onChange={(e) => setPesoAnimal(e.target.value)}
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
              <Button className={styles['btn-secondary']} type="button">
                Salvar respostas
              </Button>
              <Button
                className={styles['btn-primary']}
                type="button"
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
                    castrado,
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
