import styled from "styled-components";
import { breakpointDown } from "styles/utils/breakpoints";
import rem from "styles/utils/rem";

const Wrapper = styled.div`
  width: ${rem(730)};

  ${breakpointDown.lg`
    width: max(${rem(550)}, ${(573 / 768) * 100}%);
  `}

  ${breakpointDown.sm`
    width: ${(327 / 375) * 100}%;
    margin: ${rem(32)} auto;    
  `}
`;

export default Wrapper;
