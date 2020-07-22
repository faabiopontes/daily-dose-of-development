import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

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
    api.get('projects').then(response => {
      console.log("resolve");
      console.log(response.data);
      setProjects(response.data);
    }).catch(response => {
      console.log("catch");
      console.log(response);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.container}
          data={projects}
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>

      {/* <View style={styles.container}>
        {projects.map(project => (
        <Text key={project.id} style={styles.project}>{project.title}</Text>
        ))}
      </View> */}
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
});
