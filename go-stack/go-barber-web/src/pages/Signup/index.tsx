import { FC, useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import { Container, Content, Background, AnimationContainer } from './styles';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface FormInputs {
  name: string;
  email: string;
  password?: string;
}

const Signup: FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { push: historyPush } = useHistory();

  const handleSubmit = useCallback(
    async (data: FormInputs): Promise<void> => {
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

        await api.post('/users', data);
        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer logon no GoBarber!',
        });
        historyPush('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError && formRef.current) {
          const parsedErrors = getValidationErrors(err);
          formRef.current.setErrors(parsedErrors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadatro, tente novamente',
        });
      }
    },
    [addToast, historyPush],
  );

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
