import { useState, useCallback } from "react";

function useInput(initialForm) {
  const [value, setValue] = useState(initialForm);

  const handleChange = useCallback(
    (event) => {
      setValue(event.target.value);
    },
    [value]
  );

  return {
    value,
    setValue,
    onChange: handleChange,
  };
}

export default useInput;
