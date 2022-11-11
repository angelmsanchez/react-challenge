/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Profiler, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Router, Header } from './core/components';
import { InterceptorService } from './shared/services';

const theme = {
  grey: '#666666',
  greyDark: '#808080',
  greyLight: '#f1f1f1',
  main: '#0972d0',
  pink: '#E9657B',
  pinkLight: '#ff5a60',
  secondary: '#86d472',
  screenXs: '(min-width: 480px)',
  screenSm: '(min-width: 768px)',
  screenMd: '(min-width: 1024px)',
  screenLg: '(min-width: 1366px)',
  screenXlg: '(min-width: 1920px)',
};

const queryClient = new QueryClient();

function App() {
  const onRenderCallback = (
    id: string,
    phase: unknown,
    actualDuration: unknown,
    baseDuration: unknown,
    startTime: unknown,
    commitTime: unknown,
    interactions: unknown,
  ) => {};

  useEffect(() => {
    InterceptorService();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Profiler id='profilerApp' onRender={onRenderCallback}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Header />
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </Profiler>
    </QueryClientProvider>
  );
}

export default App;
