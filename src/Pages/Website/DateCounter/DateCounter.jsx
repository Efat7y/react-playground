import { useState } from "react";
import useToggle from "../../../Hooks/useToggle";
import ToggleButton from "../ToggleButton";
import Counter from "./Counter";

const DateCounter = () => {
  const [stepsDate, setStepsDate] = useState(1);
  const [count, setCount] = useState("");
  const { value: isOpen, toggle: toggleOpen } = useToggle(true);

  function decreaseCount() {
    setCount((c) => c - stepsDate);
  }
  function increaseCount() {
    setCount((c) => c + stepsDate);
  }
  const handelDate = () => {
    setStepsDate(1);
    setCount("");
  };
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="w-full flex flex-col mt-8">
      <ToggleButton isOpen={isOpen} onToggle={toggleOpen} />

      {isOpen && (
        <div className="mx-auto mt-5 max-w-xl w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <div className="flex flex-wrap items-center">
            <span className=" font-bold">Step : {stepsDate}</span>
            <input
              type="range"
              min={1}
              max={10}
              value={stepsDate}
              onChange={(e) => setStepsDate(Number(e.target.value))}
              className="w-96 flex justify-center m-auto"
            />
          </div>

          <Counter
            label="Count"
            value={count}
            onChange={setCount}
            handleMinus={decreaseCount}
            handlePlus={increaseCount}
          />

          <div className="mt-10 text-center">
            <p className="text-3xl font-bold text-gray-800">
              <span>
                {count === 0
                  ? "Today Is"
                  : count > 0
                    ? `${count} Days From Today Is`
                    : `${count} Days Ago Was `}{" "}
              </span>

              <span className="mt-3 text-xl block font-semibold text-violet-600">
                {date.toDateString()}
              </span>
            </p>
            <button
              className="rounded  bg-violet-600 px-3 py-1 text-2xl mt-4 font-semibold text-white transition hover:bg-violet-700"
              onClick={handelDate}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default DateCounter;
