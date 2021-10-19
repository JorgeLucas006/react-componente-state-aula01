import { useState } from "react";
import "./App.css";

const Contador = () => {
  const [num, setNum] = useState(0);

  return (
    <>
      <div className="container">
        <h3>Contador = {num}</h3>
      </div>
      <button onClick={()=> setNum(num+5)}>Somar</button>
      <button onClick={()=> setNum(num-3)}>Subtrair</button>
    </>
  );
};

export default Contador;
