import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { HandlerProvider } from './context/HandlerContext'

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <HandlerProvider>
        <App />
      </HandlerProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
