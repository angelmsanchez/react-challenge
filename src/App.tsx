/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Profiler } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Router, Header } from './core/components';

function App() {
  const onRenderCallback = (
    id: string,
    phase: unknown,
    actualDuration: unknown,
    baseDuration: unknown,
    startTime: unknown,
    commitTime: unknown,
    interactions: unknown,
  ) => { };

  return (
    <Profiler id="profilerApp" onRender={onRenderCallback}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </Profiler>
  );
}

export default App;
