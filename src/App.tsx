import "./App.css";
import { startingBoard } from "./components/sodoku/boards";
import Sudoku from "./components/sodoku/sudoku";

function App() {
  return (
    <div className="App">
      <Sudoku startingBoard={startingBoard} />
    </div>
  );
}

export default App;

/* src/App.tsx: Este é o componente principal do React
do aplicativo. 
Começar a construir o aplicativo a partir daqui, 
adicionando mais componentes e lógica conforme necessário. */