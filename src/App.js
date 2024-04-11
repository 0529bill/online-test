import AgeGroupPriceList from "./components/AgeGroupPriceList";
import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 10px;
`;

function App() {
  const handleListChange = (result) => console.log(result);

  return (
    <AppContainer>
      <h1>UI test</h1>
      <AgeGroupPriceList onChange={handleListChange} />
    </AppContainer>
  );
}

export default App;
