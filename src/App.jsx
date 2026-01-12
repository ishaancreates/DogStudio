import { useState } from "react";
import "./App.css";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas>
        <Dog />
      </Canvas>
    </>
  );
}

export default App;
