import React from 'react';

import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import RootRouter from '@homework-task/router/root';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RootRouter />
            <ToastContainer />
        </QueryClientProvider>
    </React.StrictMode>
);
