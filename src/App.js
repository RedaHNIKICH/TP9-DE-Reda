import React from 'react';
import './App.css';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  return (
    <div>
      <CompteForm />
      <CompteList />
    </div>
  );
}

export default App;
