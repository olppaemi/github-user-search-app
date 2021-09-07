import styled from "styled-components";
import rem from "styles/utils/rem";

export const Button = styled.button`
  font-family: inherit;
  font-size: ${rem(16)};
  font-weight: bold;
  width: auto;
  height: ${rem(50)};
  background: var(--deep-sky-blue);
  color: var(--white);
  border: none;
  border-radius: ${rem(10)};
  cursor: pointer;

  &:hover {
    background: var(--crystal-blue);
  }
`;

export default Button;
