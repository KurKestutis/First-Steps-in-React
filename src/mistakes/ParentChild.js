import React, { Children, useState, useMemo } from "react";

export const Parent = () => {
  const [count, setCount] = useState(0);
  const name = {
    fname: "Bruce",
    lname: "Wane",
  };

  const MemoizedPerson = useMemo(() => name, []);

  console.log("Parent render");
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      <MemoizedChild name={MemoizedPerson} />
    </div>
  );
};

export const Child = ({ name }) => {
  console.log("Child render");
  return (
    <div>
      Child - {name.fname} {name.lname}
    </div>
  );
};

const MemoizedChild = React.memo(Child);
