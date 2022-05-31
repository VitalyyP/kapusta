import { useState, useEffect } from "react";

const Counter = () => {
  const [clicks, setClicks] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log("Render: ", clicks);
  });

  const showValue = () => {
    setTimeout(() => {
      alert(clicks);
    }, 3000);
  };
  return (
    <>
      <div>Clicked: {clicks}</div>
      <button onClick={() => setClicks(clicks + step)}>Click</button>
      <br />
      <button onClick={showValue}>Show value</button>
      <input
        type="number"
        name="step"
        value={step}
        onChange={(e) => setStep(+e.target.value)}
      ></input>
    </>
  );
};

export default Counter;
