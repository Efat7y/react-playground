import { useState } from "react";
import useToggle from "../../../Hooks/useToggle";
import ToggleButton from "../ToggleButton";
import Paginations from "./Paginations";

const PaginationApp = () => {
  const products = [
    "iPhone",
    "Samsung",
    "Huawei",
    "Oppo",
    "Xiaomi",
    "Nokia",
    "Realme",
    "Honor",
    "Google Pixel",
    "OnePlus",
    "Sony",
    "Motorola",
    "iPhone1",
    "Samsung1",
    "Huawei1",
    "Oppo1",
    "Xiaomi1",
    "Nokia1",
    "Realme1",
    "Honor1",
    "Google Pixel1",
    "OnePlus1",
    "Sony1",
    "Motorola1",
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, toggleOpen] = useToggle(true);

  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-full flex flex-col">
      <ToggleButton isOpen={isOpen} onToggle={toggleOpen} />

      {isOpen && (
        <div className="p-5 max-w-[600px] w-full my-0 mx-auto">
          <h2>My Products Item</h2>
          <ul className="p-0">
            {currentItems.map((item, index) => (
              <li key={index} className="p-[10px] border-b">
                {item}
              </li>
            ))}
          </ul>
          <Paginations
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};
export default PaginationApp;
