import React from 'react';
import styled from 'styled-components';

const SelectBox = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Select onChange={handleChange}>
      {props.options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;

export const Select = styled.select`
  background: var(--bg-element1);
  height: 2rem;
  width: 12rem;
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: var(--text2);
  font-size: 0.875rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  cursor: pointer;
  padding-left: 0px;
  margin: 0px;
  position: absolute;
  option {
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
  }
`;
