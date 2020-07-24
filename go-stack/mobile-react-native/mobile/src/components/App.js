import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

import api from '../services/api';

// Tags don't have semantical value (meaning)
// Don't have their own styling
// All components have by default "display: flex"
// Styles also don't have inheritance

// View: div, footer, header, main, aside, section...
// Text: p, span, strong, h1, h2, h3...

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api
      .get('projects')
      .then((response) => {
        console.log('resolve');
        console.log(response.data);
        setProjects(response.data);
      })
      .catch((response) => {
        console.log('catch');
        console.log(response);
      });
  }, []);

  async function handleAddProject() {
    console.log('handleAddProject');
    const response = await api.post('projects', {
      title: `New project ${Date.now()}`,
      owner: 'Fabio Pontes',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
        <TouchableOpacity activeOpacity={0.6} style={styles.button}>
          <Text style={styles.buttonText} onPress={handleAddProject}>
            Add project
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project: {
    color: '#FFF',
    fontSize: 30,
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
