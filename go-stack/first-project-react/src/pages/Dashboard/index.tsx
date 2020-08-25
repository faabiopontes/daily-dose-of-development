import React from 'react';
import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/appLogo.svg';
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Dashboard</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/2223935?s=460&u=cea782b4b2009e470e5166cee67b2d03ebc21e47&v=4"
            alt="Profile"
          />
          <div>
            <strong>faabiopontes/daily-dose-of-development</strong>
            <p>Here are my daily learnings of web development.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/2223935?s=460&u=cea782b4b2009e470e5166cee67b2d03ebc21e47&v=4"
            alt="Profile"
          />
          <div>
            <strong>faabiopontes/daily-dose-of-development</strong>
            <p>Here are my daily learnings of web development.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/2223935?s=460&u=cea782b4b2009e470e5166cee67b2d03ebc21e47&v=4"
            alt="Profile"
          />
          <div>
            <strong>faabiopontes/daily-dose-of-development</strong>
            <p>Here are my daily learnings of web development.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
