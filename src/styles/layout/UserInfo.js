import styled from "styled-components";
import rem from "styles/utils/rem";
import iconLocation from "assets/icon-location.svg";
import iconTwiiter from "assets/icon-twitter.svg";
import iconWebsite from "assets/icon-website.svg";
import iconCompany from "assets/icon-company.svg";
import { breakpointDown } from "styles/utils/breakpoints";

export const UserInfoContainer = styled.div`
  width: 100%;
  height: ${rem(444)};
  background: ${({ theme }) => theme.colors.cardBg};
  padding: ${rem(48)};
  margin-top: ${rem(24)};
  border-radius: ${rem(15)};
  box-shadow: ${({ theme }) => theme.boxShadow};

  ${breakpointDown.lg`
    height: ${rem(481)};   
    padding: ${rem(40)}; 
  `}

  ${breakpointDown.sm`
    height: ${rem(517)};
    padding: ${rem(32)} ${rem(24)};
  `}
`;

const UserInfo = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: ${rem(117)} 1fr;
  grid-template-areas:
    "avatar title"
    "avatar bio"
    "blank stats"
    "blank profile";
  gap: 0 ${rem(37)};

  ${breakpointDown.lg`    
    grid-template-areas:
      "avatar title"
      "bio bio"
      "stats stats"
      "profile profile";
    gap: 0 ${rem(20)};    
  `}

  ${breakpointDown.sm`
    grid-template-columns: ${rem(70)} 1fr;
  `}
`;

export const AvatarContainer = styled.div`
  grid-area: avatar;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rem(20)};
  grid-area: title;

  ${breakpointDown.lg`
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;    
  `}
`;

export const UserName = styled.h1``;
export const Login = styled.h3``;
export const Bio = styled.p`
  margin-bottom: ${rem(32)};
  grid-area: bio;

  ${breakpointDown.lg`
    margin-top: ${rem(24)};
    margin-bottom: ${rem(32)};
  `}

  ${breakpointDown.sm`
    margin-top: ${rem(33)};
    margin-bottom: ${rem(23)};
  `}
`;
export const Stats = styled.div`
  width: 100%;
  height: ${rem(85)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${rem(10)};
  margin-bottom: ${rem(36)};
  grid-area: stats;

  ${breakpointDown.lg`     
    margin-bottom: ${rem(30)};
  `}

  ${breakpointDown.sm`     
    margin-bottom: ${rem(24)};
    text-align: center;
  `}
`;
export const Stat = styled.div``;

export const Name = styled.h4``;
export const Value = styled.h2``;
export const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${rem(20)} 0;
  grid-area: profile;

  ${breakpointDown.sm`
    grid-template-columns: 1fr;
    gap: ${rem(16)};
  `}
`;
export const Location = styled.div`
  height: ${rem(22)};
  display: flex;

  &::before {
    display: block;
    content: "";
    width: ${rem(22)};
    height: ${rem(22)};
    background: center / contain no-repeat url(${iconLocation});
    margin-right: ${rem(16)};

    ${breakpointDown.sm`
      width: ${rem(20)};
      height: ${rem(20)};
    `}
  }
`;
export const Twitter = styled.div`
  height: ${rem(22)};
  display: flex;

  &::before {
    display: block;
    content: "";
    width: ${rem(22)};
    height: ${rem(22)};
    background: center / contain no-repeat url(${iconTwiiter});
    margin-right: ${rem(16)};

    ${breakpointDown.sm`
      width: ${rem(20)};
      height: ${rem(20)};
    `}
  }
`;
export const Website = styled.div`
  height: ${rem(22)};
  display: flex;

  &::before {
    display: block;
    content: "";
    width: ${rem(22)};
    height: ${rem(22)};
    background: center / contain no-repeat url(${iconWebsite});
    margin-right: ${rem(16)};

    ${breakpointDown.sm`
      width: ${rem(20)};
      height: ${rem(20)};
    `}
  }
`;
export const Company = styled.div`
  height: ${rem(22)};
  display: flex;

  &::before {
    display: block;
    content: "";
    width: ${rem(22)};
    height: ${rem(22)};
    background: center / contain no-repeat url(${iconCompany});
    margin-right: ${rem(16)};

    ${breakpointDown.sm`
      width: ${rem(20)};
      height: ${rem(20)};
    `}
  }
`;

export default UserInfo;
