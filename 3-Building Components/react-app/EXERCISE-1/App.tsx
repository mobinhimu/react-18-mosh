import { type MouseEvent } from "react";
import Button from "./components/Button";

function App() {
  function handleOnClick(eve: MouseEvent) {
    console.log((eve.target as HTMLElement).textContent);
  }

  return (
    <div className="container">
      <Button onClick={handleOnClick} buttonType="primary">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="secondary">
        Button Secondary
      </Button>
      <Button onClick={handleOnClick} buttonType="success">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="danger">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="warning">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="info">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="light">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="dark">
        Button Primary
      </Button>
      <Button onClick={handleOnClick} buttonType="link">
        Button Primary
      </Button>
    </div>
  );
}

export default App;
