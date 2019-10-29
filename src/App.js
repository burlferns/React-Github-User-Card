import React from 'react';
import styled from "styled-components";

import Header from "./components/Header";

const StylDiv = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {
  return (
    <StylDiv>
      <Header/>


    </StylDiv>
  );
}

export default App;
