import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import MessageComponent from './components/MessageComponents';

function App(){
  const shouldShowMessage = true;

  return (
    <div className='App'>
      <h1>Welcome to the Conditional Rendering Demo</h1>
      <MessageComponent showMessage={shouldShowMessage}/>
    </div>
  );
}

export default App
