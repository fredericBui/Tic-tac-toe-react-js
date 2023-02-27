import "./Square.css";
function Square({ id, symbol, data, setData, data2 }) {
  return (
    <td
      id={id}
      onClick={(e) =>
        fillBoardWithPlayerChoice(e.target, id, data, setData, data2)
      }
    >
      {symbol}
    </td>
  );
}

function fillBoardWithPlayerChoice(target, id, data, setData, data2) {
  let symbol = "";
  data === true ? (symbol = "X") : (symbol = "O");
  target.innerHTML = symbol;
  setData(!data);
  switch (id) {
    case 1:
      data2.line1[0] = symbol;
      break;
    case 2:
      data2.line1[1] = symbol;
      break;
    case 3:
      data2.line1[2] = symbol;
      break;
    case 4:
      data2.line2[0] = symbol;
      break;
    case 5:
      data2.line2[1] = symbol;
      break;
    case 6:
      data2.line2[2] = symbol;
      break;
    case 7:
      data2.line3[0] = symbol;
      break;
    case 8:
      data2.line3[1] = symbol;
      break;
    case 9:
      data2.line3[2] = symbol;
      break;
  }

  console.log(data2);

  // Victoire horizontale
  function horizontalVictory(data2, symbol) {
    if (
      data2.line1[0] === symbol &&
      data2.line1[1] === symbol &&
      data2.line1[2] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire horizontale haute");
    } else if (
      data2.line2[0] === symbol &&
      data2.line2[1] === symbol &&
      data2.line2[2] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire horizontale milieu");
    } else if (
      data2.line3[0] === symbol &&
      data2.line3[1] === symbol &&
      data2.line3[2] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire horizontale basse");
    }
  }

  // Victoire verticale
  function verticalVictory(data2, symbol) {
    if (
      data2.line1[0] === symbol &&
      data2.line2[0] === symbol &&
      data2.line3[0] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire verticale gauche");
    } else if (
      data2.line1[1] === symbol &&
      data2.line2[1] === symbol &&
      data2.line3[1] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire verticale milieu");
    } else if (
      data2.line1[2] === symbol &&
      data2.line2[2] === symbol &&
      data2.line3[2] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire verticale droite");
    }
  }

  // Victoire diagonale
  function diagonalVictory(data2, symbol) {
    if (
      data2.line1[0] === symbol &&
      data2.line2[1] === symbol &&
      data2.line3[2] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire diagonale descendante gauche");
    } else if (
      data2.line1[2] === symbol &&
      data2.line2[1] === symbol &&
      data2.line3[0] === symbol
    ) {
      showWinner(symbol);
      alert("Victoire diagonale descendante droite");
    }
  }

  function showWinner(symbol) {
    symbol === "X" ? alert("Joueur 1 Gagne :") : alert("Joueur 2 Gagne :");
  }

  horizontalVictory(data2, "X");
  horizontalVictory(data2, "O");
  verticalVictory(data2, "X");
  verticalVictory(data2, "O");
  diagonalVictory(data2, "X");
  diagonalVictory(data2, "O");
}

export default Square;
