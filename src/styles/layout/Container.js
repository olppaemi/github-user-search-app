import styled from "styled-components";
import { breakpointUp } from "styles/utils/breakpoints";
import rem from "styles/utils/rem";

const Container = styled.div`
  max-width: ${rem(1440)};
  margin: 0 auto;

  ${breakpointUp.sm`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export default Container;
