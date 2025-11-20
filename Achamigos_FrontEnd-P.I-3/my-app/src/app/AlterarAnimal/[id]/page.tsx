'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AtualizarAnimal = () => {
  const { id } = useParams();
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [raca, setRaca] = useState('');
  const [sexo, setSexo] = useState('');
  const [porte, setPorte] = useState('');
  const [peso, setPeso] = useState('');
  const [castrado, setCastrado] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const animalData = { nome, idade, raca, sexo, porte, peso, castrado };

    try {
      
      await axios.put(`http://localhost:3002/animais/${id}`, animalData, {
        headers: {
          'x-api-key': '1234'}
      });

      alert('Animal atualizado com sucesso!');
      router.push('/Animais'); 
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar o animal.');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Atualizar Animal</h2>
      <p>ID do animal: {id}</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={nome} onChange={e => setNome(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Idade</Form.Label>
          <Form.Control value={idade} onChange={e => setIdade(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Raça</Form.Label>
          <Form.Control value={raca} onChange={e => setRaca(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sexo</Form.Label>
          <Form.Select value={sexo} onChange={e => setSexo(e.target.value)}>
            <option value="">Selecione...</option>
            <option value="macho">Macho</option>
            <option value="femea">Fêmea</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Porte</Form.Label>
          <Form.Select value={porte} onChange={e => setPorte(e.target.value)}>
            <option value="">Selecione...</option>
            <option value="pequeno">Pequeno</option>
            <option value="medio">Médio</option>
            <option value="grande">Grande</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Peso (kg)</Form.Label>
          <Form.Control value={peso} onChange={e => setPeso(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Castração</Form.Label>
          <div>
            <Form.Check
              inline
              type="radio"
              label="Sim"
              checked={castrado === true}
              onChange={() => setCastrado(true)}
            />
            <Form.Check
              inline
              type="radio"
              label="Não"
              checked={castrado === false}
              onChange={() => setCastrado(false)}
            />
          </div>
        </Form.Group>

        <Button type="submit">Salvar Alterações</Button>
      </Form>
    </Container>
  );
};

export default AtualizarAnimal;
