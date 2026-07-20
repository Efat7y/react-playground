import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Form = ({ onAddItem }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description.trim()) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <section className="bg-[#e67616] py-5">
      <div className="flex  flex-wrap items-center justify-center gap-4 px-5">
        <h2 className="text-2xl font-bold text-[#4b2d1f]">
          What do you need for your 😍 trip?
        </h2>
        <form
          className="flex  flex-wrap items-center justify-center gap-4 px-5"
          onSubmit={handleSubmit}
        >
          <Select
            value={String(quantity)}
            onValueChange={(value) => setQuantity(Number(value))}
          >
            <SelectTrigger
              className="
              h-12
              w-20
              rounded-full
              border-2
              border-[#f5a623]
              bg-[#fff3bf]
              text-[#4b2d1f]
              font-semibold
              shadow-md
              transition-all
              duration-300
              hover:border-[#7dd3c7]
              focus:ring-2
              focus:ring-[#7dd3c7]
            "
            >
              <SelectValue />
            </SelectTrigger>

            <SelectContent
              className="
              rounded-2xl
              border-2
              border-[#f5a623]
              bg-[#fff3bf]
              shadow-xl
            "
            >
              {Array.from({ length: 20 }, (_, i) => (
                <SelectItem
                  key={i + 1}
                  value={String(i + 1)}
                  className="
                  cursor-pointer
                  rounded-lg
                  font-medium
                  text-[#4b2d1f]
                  focus:bg-[#7dd3c7]
                  focus:text-[#4b2d1f]
                "
                >
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <input
            type="text"
            placeholder="Item..."
            className="
            h-12
            w-72
            rounded-full
            border-2
            border-[#f5a623]
            bg-[#fff3bf]
            px-5
            text-[#4b2d1f]
            placeholder:text-[#8b6b52]
            outline-none
            transition-all
            duration-300
            focus:border-[#7dd3c7]
            focus:ring-2
            focus:ring-[#7dd3c7]
          "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="
            h-12
            rounded-full
            bg-[#7dd3c7]
            px-8
            font-bold
            uppercase
            text-[#4b2d1f]
            shadow-lg
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-[#68c2b4]
            hover:shadow-xl
            active:scale-95
          "
          >
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
