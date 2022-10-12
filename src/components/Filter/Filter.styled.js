import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  width: 100%;
  font-size: 16px;
`;

export const Input = styled.input`
  font-size: 14px;
  margin-top: 5px;
  padding: 5px;
  border: 1px solid gray;
  outline: none;
  line-height: 1.25;
  border-radius: 5px;

  &:hover {
    border-color: rgb(59, 59, 59);
    box-shadow: 0px 0px 3px 0px lightblue;
    transition: border-color 400ms, box-shadow 400ms;
  }

  &:focus {
    border-color: lightblue;
    box-shadow: 0px 0px 4px 0px lightblue;
    transition: border-color 600ms, box-shadow 600ms;
  }
`;
