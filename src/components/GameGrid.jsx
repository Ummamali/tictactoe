import "./gameGrid.css";

export default function GameGrid({
  currentSymbol,
  dispatchSymbolMark,
  board,
  conclude,
}) {
  return (
    <div className="game-grid">
      {board.map((b, i) => (
        <button
          className={`box ${
            conclude !== null
              ? conclude.situation.includes(i)
                ? "won"
                : ""
              : ""
          }`}
          key={b + i}
          data-idx={i}
          onClick={(e) =>
            dispatchSymbolMark(currentSymbol, parseInt(e.target.dataset.idx))
          }
          disabled={b !== null || conclude !== null}
        >
          {b !== null ? b : null}
        </button>
      ))}
    </div>
  );
}
