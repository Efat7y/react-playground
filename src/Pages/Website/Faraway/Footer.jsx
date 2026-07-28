const Footer = ({ items }) => {
  if (!items.length)
    return (
      <em className="bg-[#7dd3c7] py-6 text-center text-3xl italic font-semibold">
        Start adding some items to your packing list ✈️
      </em>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="bg-[#7dd3c7] py-6 text-center">
      {" "}
      <em className="text-3xl italic font-semibold text-[#4b2d1f]">
        {percentage === 100
          ? "You Got Everything ! Ready To Go ✈️"
          : `👜You Have ${numItems} Items On Your List, And You Already Packed
          ${numPacked} (${percentage} %)`}
      </em>
    </footer>
  );
};

export default Footer;
