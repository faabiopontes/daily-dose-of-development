import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import api from './services/api';

import './App.css';
// import backgroundImage from './assets/rocks.jpeg';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  const handleAddProject = async () => {
    let project = {
      title: `New project ${Date.now()}`,
      owner: 'Fabio Pontes',
    };

    let response = await api.post('projects', project);
    project = response.data;

    setProjects([...projects, project]);
  };

  return (
    <>
      <Header title="Projects" />

      {/* <img width="300" src={backgroundImage} /> */}

      <ul>
        {projects.map(({ id, title, owner }) => (
          <li key={id}>{`${title} - ${owner}`}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
