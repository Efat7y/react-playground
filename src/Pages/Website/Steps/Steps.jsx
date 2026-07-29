import { useState } from "react";
import useToggle from "../../../Hooks/useToggle";
import ToggleButton from "../ToggleButton";
import Step from "./Step";
import { btnStyle } from "../../../styles";
import StarRaing from "../StarRating";

const Steps = () => {
  const [step, setStep] = useState(1);
  const { value: isOpen, toggle: toggleOpen } = useToggle(true);
  const [projctRating, setProjctRating] = useState(0);

  const messages = [
    "Learn React ⚛️",
    "ApplyFor Jops 👜",
    "Invest Your New Income 🤑",
  ];
  function handlePreviuos() {
    if (step > 1) setStep((step) => step - 1);
  }
  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <div className="mt-5 h-[320px] mt-8">
      <ToggleButton isOpen={isOpen} onToggle={toggleOpen} />

      {isOpen && (
        <div className="mx-auto mt-5 mb-5 max-w-3xl rounded-xl bg-gray-100 p-10 shadow">
          <div className="flex items-center justify-between">
            {messages.map((_, index) => (
              <Step key={index} number={index + 1} active={step >= index + 1} />
            ))}
          </div>
          <h2 className="mt-12 text-center text-3xl font-bold">
            Step {step}:{messages[step - 1]}
          </h2>
          <div className="mt-12 flex justify-between">
            <button
              onClick={handlePreviuos}
              disabled={step === 1}
              className={btnStyle}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={step === 3}
              className={btnStyle}
            >
              Next
            </button>{" "}
          </div>
          <div className="my-4 shadow-2xl p-4 w-100    rounded">
            <StarRaing
              maxRating={10}
              onSetRating={setProjctRating}
              size={20}
              color="#7008e7"
              messages={[
                "😖 Terrible",
                "😕 Very Bad",
                "🙁 Bad",
                "😐 Poor",
                "🙂 Average",
                "😊 Good",
                "😄 Very Good",
                "🤩 Great",
                "🔥 Excellent",
                "🏆 Masterpiece",
              ]}
            />
            <p>⭐ How would you rate this project?</p>
            <span>
              Your Rating: <strong>{projctRating} / 10</strong>
            </span>

            <p>Thank you for your feedback ❤️</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Steps;
