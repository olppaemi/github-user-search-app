import styled from "styled-components";
import rem from "styles/utils/rem";

const Header = styled.header`
  width: 100%;
  height: ${rem(38)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rem(36)};

  h1 {
    font-size: ${rem(26)};
  }
`;

export default Header;
