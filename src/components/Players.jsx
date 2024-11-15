import React, { useState } from "react";
import PlayerBox from "./PlayerBox";

export default function Players({ currentSymbol, conclude }) {
  return (
    <ul className="w-full flex text-gray-300 gap-16 ">
      <PlayerBox
        symbol="X"
        isActive={currentSymbol === "x" && conclude === null}
        initialName="Player One"
        hasWon={conclude !== null && conclude.symbol === "x"}
      />
      <PlayerBox
        symbol="O"
        isActive={currentSymbol === "o" && conclude === null}
        initialName="Player Two"
        hasWon={conclude !== null && conclude.symbol === "o"}
      />
    </ul>
  );
}
