import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/appLogo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <Header>
          <img src="https://avatars3.githubusercontent.com/u/2223935?s=460&u=cea782b4b2009e470e5166cee67b2d03ebc21e47&v=4" alt="faabiopontes" />
          <div>
            <strong>faabiopontes/daily-dose-of-development</strong>
            <p>descrição do repositório</p>
          </div>
        </Header>
        <ul>
          <li>
            <strong>0</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="fsp">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
