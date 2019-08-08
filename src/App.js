import React from 'react';
import './css/style.css';
import ChatController from './js/controller/ChatController';

window.addEventListener('DOMContentLoaded', () => {
  ChatController.start();
});

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
