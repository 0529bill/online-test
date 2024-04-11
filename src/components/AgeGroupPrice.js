import AgeGroupSelect from "./AgeGroupSelect";
import PriceInput from "./PriceInput";
import styled from "styled-components";
import validateList from "../utils/validateList";

const AgeGroupPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AgeGroupSelectWrapper = styled.div`
  margin: 0px 10px;
`;

const PriceInputWrapper = styled.div`
  margin: 0px 10px;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 30px;
`;

function AgeGroupPrice({
  index,
  onRemove,
  onAgeGroupChange,
  onPriceChange,
  errors,
  item,
}) {
  const handleGroupChange = (age) => {
    onAgeGroupChange(index, age);
  };

  const handlePriceChange = (price) => {
    onPriceChange(index, price);
  };
  return (
    <AgeGroupPriceContainer>
      <AgeGroupSelectWrapper>
        <h5>年齡</h5>
        <AgeGroupSelect
          handleGroupChange={handleGroupChange}
          ageGroup={item?.ageGroup}
        />
        {errors
          .filter((error) => error?.index === index)
          .map((error, errorIndex) => (
            <div key={errorIndex} style={{ color: "red" }}>
              {error.message.age}
            </div>
          ))}
      </AgeGroupSelectWrapper>
      <PriceInputWrapper>
        <h5>入住費用（每人每晚）</h5>
        <PriceInput handlePriceChange={handlePriceChange} />
        {errors
          .filter((error) => error?.index === index)
          .map((error, errorIndex) => (
            <div key={errorIndex} style={{ color: "red" }}>
              {error.message.price}
            </div>
          ))}
      </PriceInputWrapper>

      <StyledButton onClick={() => onRemove(index)}>Remove</StyledButton>
    </AgeGroupPriceContainer>
  );
}

export default AgeGroupPrice;
