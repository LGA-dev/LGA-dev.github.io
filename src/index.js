import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { HandlerProvider } from './context/HandlerContext'
import customTheme from './customTheme';

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <React.StrictMode>
      <HandlerProvider>
        <App />
      </HandlerProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
