import { useState } from "react";

export default function PlayerBox({ symbol, initialName, isActive, hasWon }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [name, setName] = useState(initialName);

  return (
    <li
      className={`flex-1 flex items-center py-3 px-6 rounded-sm gap-3 ${
        isActive ? "border border-orange-300/60" : ""
      } ${hasWon ? "bg-orange-300/40" : ""}`}
    >
      <p className="font-caprasimo text-lg">{symbol}</p>
      <input
        className="w-full flex-1 bg-white/10 px-3 py-1 disabled:bg-transparent"
        value={name}
        disabled={isDisabled}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? setIsDisabled(true) : null)}
      ></input>
      <button
        className="text-orange-300"
        onClick={() => setIsDisabled((prev) => !prev)}
      >
        {isDisabled ? "Edit" : "Save"}
      </button>
    </li>
  );
}
