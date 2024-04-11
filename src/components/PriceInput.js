import { useEffect, useState } from "react";

function PriceInput({ handlePriceChange }) {
  const [value, setValue] = useState("0");

  const handleChange = (event: any) => {
    let num = event.target.value.replace(/,/g, "");
    if (num === "") {
      setValue("0");
    } else {
      if (value === "0" && num !== "0") {
        num = num.slice(1);
      }
      const _value = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      setValue(_value);
    }
  };

  useEffect(() => {
    handlePriceChange(value);
  }, [value]);

  return (
    <div>
      <label>TWD: </label>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}

export default PriceInput;
