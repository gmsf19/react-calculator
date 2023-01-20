import styled from "styled-components";

export const StyledButton = styled.span`
  display: flex;
  width: 100px;
  height: 100px;
  background: #808080;
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    transition: 0.2s;
    box-shadow: 0px 0px 0px 1px white;
  }
`;
