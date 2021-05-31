import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { HandleOpenProvider } from './context/HandleOpenContext'

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <HandleOpenProvider>
        <App />
      </HandleOpenProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
