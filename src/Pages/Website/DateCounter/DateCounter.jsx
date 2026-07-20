import { useState } from "react";
import useToggle from "../../../Hooks/useToggle";
import ToggleButton from "../ToggleButton";
import Counter from "./Counter";

const DateCounter = () => {
  const [stepsDate, setStepsDate] = useState(1);
  const [count, setCount] = useState(0);
  const { value: isOpen, toggle: toggleOpen } = useToggle(true);

  function decreaseStep() {
    setStepsDate((s) => s - 1);
  }
  function increaseStep() {
    setStepsDate((s) => s + 1);
  }
  function decreaseCount() {
    if (count > stepsDate) setCount((c) => c - stepsDate);
  }
  function increaseCount() {
    setCount((c) => c + stepsDate);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="w-full flex flex-col">
      <ToggleButton isOpen={isOpen} onToggle={toggleOpen} />

      {isOpen && (
        <div className="mx-auto mt-5 max-w-xl w-full rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <Counter
            label="Step"
            value={stepsDate}
            handleMinus={decreaseStep}
            handlePlus={increaseStep}
          />
          <Counter
            label="Count"
            value={count}
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
          </div>
        </div>
      )}
    </div>
  );
};
export default DateCounter;
