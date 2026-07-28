import { faqs } from "@/Data/faqs";
import AccordionItem from "./AccordionItem";

const Accordion = ({ selected, setSelected }) => {
  return (
    <div className="mx-auto max-w-3xl space-y-5 px-5">
      <h1 className="mb-10 text-center text-4xl font-bold text-slate-800">
        React FAQ
      </h1>

      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </div>
  );
};
export default Accordion;
