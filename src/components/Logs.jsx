export default function Logs({ logs }) {
  return (
    <ol className="text-center py-6 space-y-2 text-gray-800">
      {logs.map((text, i) => (
        <li key={text}>
          <span className="font-semibold mr-3">{i + 1}</span> {text}
        </li>
      ))}
    </ol>
  );
}
