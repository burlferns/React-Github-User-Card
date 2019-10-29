import React from 'react';
import styled from "styled-components";
import axios from 'axios';

import UserCard from "./UserCard";

const followerList = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];

const StylPloading = styled.p`
  font-size: 30px;
  margin:30px auto;
`;


class UserCardList extends React.Component {
  state = {
    myData : {},
    followerData : [],
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/burlferns')
      .then(res => {
        console.log("This is myData from the server",res.data);
        this.setState({
          myData : res.data
        });
      })
      .catch(err => console.log(err));

    followerList.forEach( elem => {
      axios
        .get(`https://api.github.com/users/${elem}`)
        .then(res => {
          console.log("This is followerData from the server",res.data);
          this.setState({
            followerData : [ ...this.state.followerData, res.data ]
          });
        })
        .catch(err => console.log(err));

    });
  }



  render() {
    const {myData,followerData} = this.state;

    // console.log("myData is:",myData);
    // console.log("followerData is:",followerData);

    return ( <>
            
      {Object.keys(myData).length===0 
        ? <StylPloading>Loading my data ...</StylPloading>
        : <UserCard data={myData} />
      }

      {followerData.length!==followerList.length
        ? <StylPloading>Loading follower data ...</StylPloading>
        : followerData.map( elem =>
          <UserCard data={elem} key={Date.now()} />
        )
      }

    </> );
  
  }
  
}
  
export default UserCardList;