const AccordionItem = ({
  faq: { id, title, content },
  selected,
  setSelected,
}) => {
  const isActive = selected === id;

  function handleClick() {
    setSelected(isActive ? null : id);
  }

  const textColor = isActive ? "text-violet-600" : "text-slate-600";

  const borderStyle = isActive
    ? "border-t-[4px] border-violet-600"
    : "border border-gray-200";

  return (
    <div
      onClick={handleClick}
      className={`
        rounded
        bg-white
        shadow-lg
        overflow-hidden
        cursor-pointer
        ${borderStyle}
      `}
    >
      <div
        className="
          flex
          items-center
          justify-between
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-5">
          <span className={`text-3xl font-bold ${textColor}`}>
            {String(id).padStart(2, "0")}
          </span>

          <h2 className={`text-3xl font-bold ${textColor}`}>{title}</h2>
        </div>

        <span className={`text-3xl font-bold ${textColor}`}>
          {isActive ? "-" : "+"}
        </span>
      </div>

      {isActive && (
        <div className="px-6 py-5">
          <p className="leading-8 text-slate-600">{content}</p>
        </div>
      )}
    </div>
  );
};
export default AccordionItem;
