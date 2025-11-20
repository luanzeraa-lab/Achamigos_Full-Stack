'use client';

import styles from './CadastroAnimais.module.scss';
import { Container, Image, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

const AlterarAnimal = () => {
  const router = useRouter();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [animal, setAnimal] = useState({
    nome: '',
    idade: '',
    raca: '',
    sexo: '',
    porte: '',
    peso: '',
    castrado: '',
    img: '',
  });

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const res = await axios.get(`http://localhost:3002/animais/${id}`, {
          headers: { 'x-api-key': '1234' },
        });

        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar animal:', err);
        alert('Erro ao buscar dados do animal');
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setAnimal({ ...animal, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3002/animais/${id}`,
        animal,
        { headers: { 'x-api-key': '1234' } }
      );

      alert('Animal atualizado com sucesso!');
      router.push('/GerenciarAnimais');
    } catch (err) {
      console.error(err);
      alert('Erro ao atualizar animal');
    }
  };

  if (loading) {
    return <p>Carregando dados...</p>;
  }

  return (
    <Container className={styles.formContainer}>
      <h1>Alterar Animal</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="nome"
            value={animal.nome}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Idade</Form.Label>
          <Form.Control
            name="idade"
            value={animal.idade}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Raça</Form.Label>
          <Form.Control
            name="raca"
            value={animal.raca}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Sexo</Form.Label>
          <Form.Control
            name="sexo"
            value={animal.sexo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Porte</Form.Label>
          <Form.Control
            name="porte"
            value={animal.porte}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Peso</Form.Label>
          <Form.Control
            name="peso"
            value={animal.peso}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Castrado</Form.Label>
          <Form.Select
            name="castrado"
            value={animal.castrado}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="mt-3">
          Atualizar
        </Button>
      </Form>
    </Container>
  );
};

export default AlterarAnimal;
