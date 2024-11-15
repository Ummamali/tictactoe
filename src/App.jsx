import { useEffect, useState } from "react";
import "./App.css";
import MainBoard from "./components/MainBoard";
import MainHeader from "./components/MainHeader";
import Logs from "./components/Logs";
import { getwinner } from "./utils/tictactoe";

const PLAYERS = ["x", "o"];

function App() {
  // state of the application
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currSymIdx, setCurrSymIdx] = useState(
    Math.floor(Math.random() * PLAYERS.length)
  );
  const [logs, setLogs] = useState([]);
  const [conclude, setConclude] = useState(null);

  useEffect(() => {
    const winner = getwinner(board);
    if (winner !== null) {
      setConclude(winner);
    }
  }, [board]);

  // Some major functions for application
  function dispatchSymbolMark(sym, idx) {
    // markign the board state
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard];
      newBoard[idx] = sym;
      return newBoard;
    });
    // move for the next player
    setCurrSymIdx((prev) => (prev + 1) % PLAYERS.length);
    // logging the move
    setLogs((prev) => [
      ...prev,
      `Player ${sym.toUpperCase()} marked on position ${idx + 1}`,
    ]);
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrSymIdx(Math.floor(Math.random() * PLAYERS.length));
    setLogs([]);
    setConclude(null);
  }

  return (
    <main className="main-section min-h-screen ">
      <div className="bg"></div>
      <div className="relative">
        <MainHeader />
        <MainBoard
          currentSymbol={PLAYERS[currSymIdx]}
          board={board}
          dispatchSymbolMark={dispatchSymbolMark}
          conclude={conclude}
          resetGame={resetGame}
        />
        <Logs logs={logs} />
      </div>
    </main>
  );
}

export default App;
