import { useState, memo, useMemo } from "react";

const list = new Array(20).fill(0).map(() => `Item - ${Math.random()}`);

const List = ({ list }) => {
  const [filter, setFilter] = useState("");
  const filteredList = list.filter((item) => item.includes(filter), [filter]);
  return (
    <>
      <ul>
        {filteredList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
    </>
  );
};

const Clicker = ({ children }) => {
  const [n, setN] = useState(0);

  return (
    <div data-count={n}>
      {children}
      <p>Clicked {n} times</p>
      <button onClick={() => setN(n + 1)}>Click me</button>
    </div>
  );
};

const Statistics = () => {
  return (
    <Clicker>
      <List list={list} />
    </Clicker>
  );
};

export default Statistics;
