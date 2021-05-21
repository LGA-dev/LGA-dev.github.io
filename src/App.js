import logo from './logo.svg';
import './App.css';
import { Box } from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </header>
    </div>
  );
}

export default App;
