import React from 'react';
import styled from "styled-components";
import lambdalogo from "./assets/lambdalogo.png";
import githublogo from "./assets/githublogo.png";


const StylHead = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const StylImg = styled.img`
  width: 150px;
  height: 150px;
`;

const StylP = styled.p`
  font-size: 48px;
`;


class Header extends React.Component {

  render() {

    return (
      <>
        <StylHead>
          <StylImg src={lambdalogo} alt="Lambda Logo"/>
          <StylP><span role="img" aria-label="heart logo">❤️'s</span></StylP>
          <StylImg src={githublogo} alt="GitHub Logo" />
        </StylHead>
      </>

    );

  }

}

export default Header;
