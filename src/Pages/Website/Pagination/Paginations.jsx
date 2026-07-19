import { btnStyle, pageStyle } from "../../../styles";
const Paginations = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex gap-4 justify-center mt-5">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
        className={btnStyle}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`${pageStyle} ${
            currentPage === page ? "border-b-2 border-gray-500" : ""
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
        className={btnStyle}
      >
        Next
      </button>
    </div>
  );
};
export default Paginations;
