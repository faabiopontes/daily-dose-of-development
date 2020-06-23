import React, { useState } from 'react';
import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([
    'App Development',
    'Front-end web',
  ]);
  // useState returns array with two positions
  // [0] = Variable with initial value
  // [1] = Function to update value

  const handleAddProject = () => {
    let project = `New project ${Date.now()}`;

    setProjects([...projects, project]);

  };

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
