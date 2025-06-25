import React from 'react'
import './App.css'
import { flashcards } from './data.js';
import { useState } from 'react';
import Learning from './modes/Learning.jsx';
import Testing from './modes/Testing.jsx';

function App() {
  const [mode, setMode] = useState('home'); // 'home', 'learning', or 'testing'

  return (
    <div className='App'>
      <div className='title'>Types of cats</div>
  
      {mode === 'home' && (
        <div className='buttons'>
          <button onClick={() => setMode('learning')}>Learning Mode</button>
          <button onClick={() => setMode('testing')}>Testing Mode</button>
        </div>
      )}

      {mode === 'learning' && (
        <Learning flashcards={flashcards} setMode={setMode} />
      )}

      {mode === 'testing' && (
        <Testing flashcards={flashcards} setMode={setMode} />
      )}
    </div>
  )
}
export default App