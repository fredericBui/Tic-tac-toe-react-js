import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [playerOneTurn, setPlayerOneTurn] = useState(false);
  const [board, setBoard] = useState({
    line1: ["", "", ""],
    line2: ["", "", ""],
    line3: ["", "", ""],
  });

  const rows1 = [];
  for (let i = 1; i < 4; i++) {
    rows1.push(
      <Square
        key={i}
        id={i}
        symbol={"-"}
        data={playerOneTurn}
        setData={setPlayerOneTurn}
        data2={board}
      />
    );
  }
  const rows2 = [];
  for (let i = 4; i < 7; i++) {
    rows2.push(
      <Square
        key={i}
        id={i}
        symbol={"-"}
        data={playerOneTurn}
        setData={setPlayerOneTurn}
        data2={board}
      />
    );
  }
  const rows3 = [];
  for (let i = 7; i < 10; i++) {
    rows3.push(
      <Square
        key={i}
        id={i}
        symbol={"-"}
        data={playerOneTurn}
        setData={setPlayerOneTurn}
        data2={board}
      />
    );
  }

  return (
    <div className="App">
      <h1 className="text-center">Tic-Tac-Toe</h1>
      <table>
        <tbody>
          <tr>{rows1}</tr>
          <tr>{rows2}</tr>
          <tr>{rows3}</tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
