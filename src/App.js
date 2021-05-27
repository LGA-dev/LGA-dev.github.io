import { HandleOpenProvider } from './context/HandleOpenContext'
import Home from "./pages/Home";

function App() {
  return (
    <HandleOpenProvider>
      <Home />
    </HandleOpenProvider>
  );
}

export default App;
