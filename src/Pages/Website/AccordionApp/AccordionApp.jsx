import { useState } from "react";
import Accordion from "./components/Accordion";

const AccordionApp = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-slate-100 py-16">
      <Accordion selected={selected} setSelected={setSelected} />
    </div>
  );
};
export default AccordionApp;
