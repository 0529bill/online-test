import { useEffect, useState } from "react";

import styled from "styled-components";

const StyledAgeGroupSelectContainer = styled.div`
  display: flex;
`;

const StyledAgeWrapper = styled.div`
  margin: 0 5px;
`;

const StyledSelect = styled.select`
  min-width: 60px;
`;

function AgeGroupSelect({ handleGroupChange, ageGroup }) {
  let startAge = ageGroup[0];
  let endAge = ageGroup[1];

  const ageOptions = Array.from({ length: 21 }, (_, i) => i); // Creates an array [0, 1, 2, ..., 20]

  const handleStartAgeChange = (e) => {
    handleGroupChange([
      Number(e.target.value),
      Number(e.target.value) > endAge ? Number(e.target.value) : endAge,
    ]);
  };

  const handleEndAgeChange = (e) => {
    handleGroupChange([
      Number(e.target.value) < startAge ? Number(e.target.value) : startAge,
      Number(e.target.value),
    ]);
  };

  useEffect(() => {
    handleGroupChange([startAge, endAge]);
  }, [startAge, endAge]);

  return (
    <StyledAgeGroupSelectContainer>
      <StyledAgeWrapper>
        {/* <label>Start Age: </label> */}
        <StyledSelect value={startAge} onChange={handleStartAgeChange}>
          {ageOptions.map((age) =>
            age <= endAge ? (
              <option key={age} value={age}>
                {age}
              </option>
            ) : (
              <option key={age} value={age} disabled>
                {age}
              </option>
            )
          )}
        </StyledSelect>
      </StyledAgeWrapper>
      ~
      <StyledAgeWrapper>
        {/* <label>End Age: </label> */}
        <StyledSelect value={endAge} onChange={handleEndAgeChange}>
          {ageOptions.map((age) =>
            age >= startAge ? (
              <option key={age} value={age}>
                {age}
              </option>
            ) : (
              <option key={age} value={age} disabled>
                {age}
              </option>
            )
          )}
        </StyledSelect>
      </StyledAgeWrapper>
    </StyledAgeGroupSelectContainer>
  );
}

export default AgeGroupSelect;
