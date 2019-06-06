import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  margin-left: 10%;
  width: 638px;
  padding-top: 10px;
`;

const LogoHeader = styled.i`
  margin: 20px 3px;
  padding-top: 15px;
  padding-right: 15px;
  font-size: 1.4rem;
`;

const LogoText = styled.h1`
  font-family:'Grand Hotel', cursive;
  font-weight: normal;
  border-left: 1px solid #dfdcdc;
  padding-left: 10px;
  font-size: 1.6rem;
  padding-top: 10px;
`;

const Input = styled.input`
  margin: 30px 90px;
  padding: 0px 55px 0px 35px;
  border-radius: 2px;
  border: 1px solid #dfdcdc;
  background-color: #fafafa;
  width: 100px;
  text-align: center;
  color: grey;
  font-size: .65rem;
`;

const Icons = styled.i`
  margin: 20px 3px;
  padding-top: 15px;
  padding-right: 15px;
  font-size: 1.4rem;
`;

const SearchBar = props => {
  return (
    <Header>
      <LogoHeader className="fab fa-instagram"></LogoHeader>
      <LogoText>Instagram </LogoText> 
      <Input
        onChange={props.filterSearch}
        type="text"
        placeholder="	&#128269; Search"
        name="search"
      /> 
      <Icons className="far fa-compass"></Icons>
      <Icons className="far fa-heart"></Icons>
      <Icons className="fas fa-user-alt"></Icons>
    </Header>
  );
}

export default SearchBar;