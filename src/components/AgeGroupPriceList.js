import { useEffect, useState } from "react";

import AgeGroupPrice from "./AgeGroupPrice";
import { isFullAgeRangeCovered } from "../utils/functions";
import styled from "styled-components";
import validateList from "../utils/validateList";

const StyledButton = styled.button`
  margin: 35px 35px;
`;

const StyledPriceListContainer = styled.div`
  padding: 18px;
`;

function AgeGroupPriceList({ onChange }) {
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleAdd = () => {
    const newList = [...list, { ageGroup: [0, 20], price: 0 }];
    setList(newList);
    onChange(newList);
  };

  const handleRemove = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
    onChange(newList);
  };
  const handleAgeGroupChange = (index, ageGroup) => {
    const newList = [...list];
    newList[index].ageGroup = ageGroup;
    setList(newList);
    onChange(newList);
  };

  const handlePriceChange = (index, price) => {
    const newList = [...list];
    newList[index].price = price;
    setList(newList);
    onChange(newList);
  };

  useEffect(() => {
    const errors = validateList(list);
    setErrors(errors);
  }, [list]);

  return (
    <div>
      {list.map((item, index) => (
        <StyledPriceListContainer key={index}>
          <h3>價格設定 - {index}</h3>
          <AgeGroupPrice
            index={index}
            onRemove={handleRemove}
            onAgeGroupChange={handleAgeGroupChange}
            onPriceChange={handlePriceChange}
            errors={errors}
            item={item}
          />
        </StyledPriceListContainer>
      ))}
      <StyledButton onClick={handleAdd} disabled={isFullAgeRangeCovered(list)}>
        Add
      </StyledButton>
    </div>
  );
}

export default AgeGroupPriceList;
