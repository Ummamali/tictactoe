import Logo from "../assets/game-logo.png";

export default function MainHeader() {
  return (
    <header className="text-center py-4">
      <img
        src={Logo}
        alt="Tic Tac Toe Logo"
        className="max-w-28 block mx-auto mb-3"
      />
      <h1 className="text-3xl font-caprasimo">Tic Tac Toe</h1>
    </header>
  );
}
