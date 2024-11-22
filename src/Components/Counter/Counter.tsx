import { useState } from "react";

import cl from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className={cl.btn} type="button" onClick={() => {
        setCount(currentCount => currentCount + 1);
      }}>increment</button>
    </div>
  )
}
