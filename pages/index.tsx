import * as React from "react";
import { useRouter } from "next/router";

const App = () => {
  const [name, setName] = React.useState("");
  const router = useRouter();

  const handleMoveTomato = () => {
    router.push("/tomato");
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleMoveName = () => {
    router.push(`/vegetable/${name}`);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={handleMoveTomato}>
        이동 1
      </button>
      <input type="text" onChange={handleChangeName} />
      <button type="button" onClick={handleMoveName}>
        {name}으로 이동
      </button>
    </React.Fragment>
  );
};

export default App;
