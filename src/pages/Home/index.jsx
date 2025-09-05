import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api.js';

import { ContainerInputs, Form, Input, InputLabel, Title } from './styles.js';
import { Container } from './styles.js';

import  Button  from '../../components/Button';
import TopBackground from '../../components/TopBackground';


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate();

  async function registerNewUser() {
    await api.post('/users', {
        email: inputEmail.current.value,
        age: parseInt(inputAge.current.value),
        name: inputName.current.value,
      })
      alert('Usuário cadastrado com sucesso!')
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastro de Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>Nome<span> *</span></InputLabel>
              <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>Idade<span> *</span></InputLabel>
              <Input type='number' placeholder='Idade' ref={inputAge} />
            </div>
        </ContainerInputs>

          <div style={{ width: '100%' }}>
            <InputLabel>E-mail<span> *</span></InputLabel>
            <Input type='text' placeholder='E-mail do usuário' ref={inputEmail}/>
          </div>
  
        <Button type='button' onClick={registerNewUser} theme='primary'>
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type='button' onClick={() => navigate('/lista-de-usuarios')}>
          Listar Usuários
        </Button>
    </Container>
  )
}

export default Home
