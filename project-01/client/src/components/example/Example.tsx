/* eslint-disable no-inner-declarations */
import { FC, useState } from "react";
import "./example.css"

interface BoxProps {
  text: string;
}

const Example: FC<BoxProps> = ({ text }) => {
  try {
    const [counter, setCounter] = useState<number>(42);

    function handleClick() {
      setCounter((counter) => counter + 1);
    }

    return (
      <div className="box" onClick={handleClick}>
        {text}: {counter}
        <button>OK</button>
        <img src="dgdfg" />
      </div>
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default Example;
