import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';

const Signin: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="App Logo" />

      <form>
        <h1>Faça seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="/">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default Signin;
