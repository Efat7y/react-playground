import Header from "./Header";
import Form from "./Form";
import PackingList from "./PackingList";
import Actions from "./Actions";
import Footer from "./Footer";
import { useState } from "react";
import { initialItems } from "@/Data/Data";

const Faraway = () => {
  const [items, setItems] = useState(initialItems);
  function handleAddItem(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleTogglePacked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item,
      ),
    );
  }
  return (
    <div className="min-h-screen  bg-[#5c3d2e]">
      <Header />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onTogglePacked={handleTogglePacked}
      />
      <Actions items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
};

export default Faraway;
