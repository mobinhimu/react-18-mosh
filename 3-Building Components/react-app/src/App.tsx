import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [isActiveAlert, setIsActiveAlert] = useState(true);

  return (
    <div className="container">
      {isActiveAlert && (
        <Alert>
          <span>Hello Mobin</span>
          <Button buttonType="close" onClick={() => setIsActiveAlert(false)} />
        </Alert>
      )}
      <Button
        onClick={() => setIsActiveAlert((prevAlert) => !prevAlert)}
        buttonType="dark"
      >
        {isActiveAlert ? "Hide Alert" : "Show Alert"}
      </Button>
    </div>
  );
}

export default App;
