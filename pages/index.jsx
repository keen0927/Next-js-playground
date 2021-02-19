import Link from "next/link";

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' page</h2>
      <Link href="/tomato" pass>
        <a>Move to '/tomato'</a>
      </Link>
      <br />
      <Link href="/vegetable/potato">
        <a>Move to '/vegetable/potato'</a>
      </Link>

      <Link href="/vegetable/potato2">
        <a>Move to '/vegetable/potato2'</a>
      </Link>
    </div>
  );
};

export default App;
