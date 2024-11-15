import GameGrid from "./GameGrid";
import Players from "./Players";

export default function MainBoard({
  currentSymbol,
  dispatchSymbolMark,
  board,
  conclude,
  resetGame,
}) {
  return (
    <div className="max-w-2xl mx-auto bg-zinc-800 px-14 p-8">
      <Players currentSymbol={currentSymbol} conclude={conclude} />
      <GameGrid
        board={board}
        currentSymbol={currentSymbol}
        dispatchSymbolMark={dispatchSymbolMark}
        conclude={conclude}
      />

      {conclude !== null ? (
        <button
          className="block mx-auto text-lg text-orange-300"
          onClick={resetGame}
        >
          Reset
        </button>
      ) : null}
    </div>
  );
}
