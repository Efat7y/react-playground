import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);

  const show = () => setValue(true);
  const hide = () => setValue(false);

  return { value, toggle, show, hide };
};

export default useToggle;
