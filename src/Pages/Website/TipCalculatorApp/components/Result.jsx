const Result = ({ bill, tip, total }) => {
  const formattedTip = tip.toFixed(2);
  const formattedTotal = total.toFixed(2);
  return (
    <div
      className="
        rounded-xl
        bg-violet-50
        p-6
        text-center
      "
    >
      <p className="mt-2 text-slate-600">
        ( ${bill ? bill : 0} Bill +{" "}
        <span className="text-green-400">
          $<strong>{formattedTip}</strong> Tip
        </span>{" "}
        )
      </p>
      <h2 className="text-3xl font-bold text-violet-700">
        You Pay ${formattedTotal}
      </h2>
    </div>
  );
};
export default Result;
