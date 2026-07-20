import Item from "./Item";

const PackingList = ({ items, onDeleteItem, onTogglePacked }) => {
  return (
    <main className=" bg-[#5c3d2e] px-8 py-8">
      <ul
        className="
    mx-auto
    max-w-7xl
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-5
    p-8
  "
      >
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
    </main>
  );
};

export default PackingList;
