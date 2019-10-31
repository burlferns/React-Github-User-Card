import React from 'react';
import styled from "styled-components";

const DivCard = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;
`;

const StylImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
`;

const StylH3 = styled.h3`
  font-size: 3.4rem;
`;

const StylP = styled.p`
  font-size: 1.4rem;
  margin-bottom: 3px;
`;

const StylPUName = styled.p`
  font-size: 1.8rem;
  font-style: italic;
  margin: 3px 0 10px;
`;

class UserCard extends React.Component {

  render() {
    const {data} = this.props;

    return ( 
      <DivCard>
        <StylImg src={data.avatar_url} />
        <div>
          <StylH3>{data.name}</StylH3>
          <StylPUName>{data.login}</StylPUName>
          <StylP>{data.location}</StylP>
          <StylP>Profile:
            <a href={data.html_url}>{data.html_url}</a>
          </StylP>
          <StylP>{`Followers: ${data.followers}`}</StylP>
          <StylP>{`Following: ${data.following}`}</StylP>
          <StylP>{`Bio: ${data.bio}`}</StylP>
        </div>
      </DivCard>

    );
  
  }
  
}
  
export default UserCard;