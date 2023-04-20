import React from 'react';
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  background-color: #f0f0f0;
  color: #333;

  &:hover {
    background-color: #ccc;
  }
`;

const Icon = styled.TouchableOpacity`
  margin-right: 0.5rem;
`;

export default function SearchButton() {
  return (
    <Button>
      <Icon>
        <FaSearch />
      </Icon>
      Search
    </Button>
  );
}
