const Actions = ({ setItems, setSortBy, sortBy }) => {
  const clearItems = () => {
    const confirmed = window.confirm(
      "Are You Sure You Want To Dleted List All Items?",
    );
    if (confirmed) setItems([]);
  };
  return (
    <section className="bg-[#5c3d2e] py-6">
      <div className="flex justify-center gap-4">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-full bg-[#fff3bf] px-6 py-2 outline-none"
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION STATUS</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>

        <button
          onClick={clearItems}
          className="rounded-full bg-[#fff3bf] px-6 py-2 font-semibold transition hover:scale-105"
        >
          CLEAR LIST
        </button>
      </div>
    </section>
  );
};

export default Actions;
