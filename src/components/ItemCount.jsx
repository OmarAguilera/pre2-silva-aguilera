import { useState } from "react";

export function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="cc">
      <div className="counter">
        <button onClick={restar}>-</button>
        <h3>{count}</h3>
        <button onClick={sumar}>+</button>
      </div >
      <button className="buy" onClick={() => onAdd(count)}>Buy</button>
    </div>
  );
}
