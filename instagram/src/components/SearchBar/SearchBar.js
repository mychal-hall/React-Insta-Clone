import React from "react";

import "./SearchBar.css";
import instaCam from "../img/instacam.png";
import logo from "../img/logo.png";
import compass from "../img/compass.png";
import heart from "../img/heart.png";
import user from "../img/user.png";
import styled from "styled-components";


const Container = styled.div`
width: 1500px;
margin: 0 auto;
display: flex;
flex-direction: row;
height: 115px;
border-bottom: 2px solid lightgrey;
`

const Search = styled.form`
margin-left: 257px;
width: 330px;
`

const Input = styled.input`
height: 38px;
width: 315px;
margin-left: 5px;
margin-top: 38px;
background-color: rgb(250, 250, 250);
border: 2px solid rgb(221, 221, 221);
border-radius: 5px;

::placeholder {
  line-height: 32px;
  text-align: center;
  font-size: 22px;
}
`

const SearchBar = props => {
  return (
    <Container>
      <img className="camera" src={instaCam} alt="Instagram camera" />
      <div className="divider" />
      <img className="logo" src={logo} alt="Instagram logo" />
      <Search>
        <Input
          className="searchField"
          placeholder="Search"
          onKeyDown={props.searchPosts}
        />
      </Search>
      <img className="compass" src={compass} alt="Compass" />
      <img className="heart" src={heart} alt="heart" />
      <img className="user" src={user} alt="Profile Page" />
    </Container>
  );
};

export default SearchBar;
