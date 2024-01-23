import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import App from './App';
import '@/styles/fonts/font.css';
import '@/styles/index.css';
import worker from './mocks/browser';

const queryClient = new QueryClient();

if (process.env.NODE_ENV === 'development') {
  worker.stop();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <BrowserRouter>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </React.StrictMode>
      </BrowserRouter>
    </RecoilRoot>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
