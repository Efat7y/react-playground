import { useState } from "react";
import Actions from "./Actions";
import Result from "./Result";
import ServiceRating from "./ServiceRating";
import BillInput from "./BillInput";

const TipCalculator = () => {
  const [bill, setBill] = useState("");
  const [percentage1, setpercentage1] = useState(0);
  const [percentage2, setpercentage2] = useState(0);
  const numericBill = Number(bill);
  const averagePercentage = (percentage1 + percentage2) / 2;
  const tip = (numericBill * averagePercentage) / 100;
  const total = numericBill + tip;

  const handleReset = () => {
    setBill("");
    setpercentage1(0);
    setpercentage2(0);
  };
  return (
    <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-800">Tip Calculator</h1>

        <p className="mt-3 text-slate-500">Calculate your bill with tip.</p>
      </div>
      <BillInput bill={bill} onSetBill={setBill} />

      <ServiceRating
        percentage={percentage1}
        onSelect={setpercentage1}
        title="How did you like the service?"
      />

      <ServiceRating
        percentage={percentage2}
        onSelect={setpercentage2}
        title="How did your friend like the service?"
      />
      {bill > 0 && (
        <>
          <Result bill={bill} tip={tip} total={total} />

          <Actions onClick={handleReset} bill={bill} />
        </>
      )}
    </div>
  );
};
export default TipCalculator;
