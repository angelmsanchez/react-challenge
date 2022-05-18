import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router, Header } from './core/components';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
