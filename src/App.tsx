import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Section from './Section/Section';

function App() {
  return (
    <div className="App">
      <Layout>
        <Section></Section>
      </Layout>
    </div>
  );
}

export default App;
