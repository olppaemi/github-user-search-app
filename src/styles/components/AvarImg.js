import styled from "styled-components";
import { breakpointDown } from "styles/utils/breakpoints";
import rem from "styles/utils/rem";

const AvatarImg = styled.img`
  width: ${rem(117)};
  height: ${rem(117)};
  border-radius: 50%;

  ${breakpointDown.sm`
    width: ${rem(70)};
    height: ${rem(70)};
  `}
`;

export default AvatarImg;
