const Actions = () => {
  return (
    <section className="bg-[#5c3d2e] py-6">
      <div className="flex justify-center gap-4">
        <select className="rounded-full bg-[#fff3bf] px-6 py-2 outline-none">
          <option>SORT BY PACKED STATUS</option>
        </select>

        <button className="rounded-full bg-[#fff3bf] px-6 py-2 font-semibold transition hover:scale-105">
          CLEAR LIST
        </button>
      </div>
    </section>
  );
};

export default Actions;
