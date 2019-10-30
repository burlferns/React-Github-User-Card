import React from 'react';
import styled from "styled-components";
import axios from 'axios';

import UserCard from "./UserCard";

// const followerList = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];

let compDidMount_count = 0;
let compDidUpdate_count = 0;
let render_count = 0;

const StylPloading = styled.p`
  font-size: 30px;
  margin:30px auto;
`;


class UserCardList extends React.Component {
  state = {
    myData : {},
    followerList: [],
    followerData : [],
  }

  componentDidMount() {
    console.log(`componentDidMount called and its count is: ${compDidMount_count}`);
    compDidMount_count++;

    // axios
    //   .get('https://api.github.com/users/tetondan')
    //   .then(res => {
    //     console.log("This is myData from the server",res.data);
    //     this.setState({
    //       myData : res.data
    //     });
    //   })
    //   .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/tetondan/followers')
      .then(res => {
        console.log("This is my followers from the server",res.data);
        const folAry = res.data.map( elm => elm.url)
        console.log("This is folAry data",folAry);  
        this.setState({
          followerList : folAry
        });
      })
      .catch(err => console.log(err));


    
  }


  componentDidUpdate() {
    console.log(`componentDidUpdate called and its count is: ${compDidUpdate_count}`);
    compDidUpdate_count++;

    // if(followerData.length===0) {
      // followerList.forEach( elem => {
      //   axios
      //     .get(`https://api.github.com/users/${elem}`)
      //     .then(res => {
      //       console.log("This is followerData from the server",res.data);
      //       this.setState({
      //         followerData : [ ...this.state.followerData, res.data ]
      //       });
      //     })
      //     .catch(err => console.log(err));

      // });

    // }




  }








  render() {
    console.log(`render called and its count is: ${render_count}`);
    render_count++;

    const {myData,followerData,followerList} = this.state;

    // console.log("myData is:",myData);
    // console.log("followerData is:",followerData);

    return ( <>
            
      {Object.keys(myData).length===0 
        ? <StylPloading>Loading my data ...</StylPloading>
        : <UserCard data={myData} />
      }

      { (followerList.length===0 || followerData.length!==followerList.length)
        ? <StylPloading>Loading follower data ...</StylPloading>
        : followerData.map( elem =>
          <UserCard data={elem} key={Date.now()} />
        )
      }

    </> );
  
  }
  
}
  
export default UserCardList;