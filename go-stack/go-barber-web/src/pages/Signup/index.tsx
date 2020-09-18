import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';

interface FormInputs {
  name?: string;
  email?: string;
  password?: string;
}

const Signup: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: FormInputs): Promise<void> => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({});
      }

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      if (formRef.current) {
        const parsedErrors = getValidationErrors(err);
        formRef.current.setErrors(parsedErrors);
      }
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="App Logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>

            <Link to="/">
              <FiArrowLeft />
              Voltar para logon
            </Link>
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
