import styled from "styled-components";
import rem from "styles/utils/rem";
import iconLocation from "assets/icon-location.svg";
import iconTwiiter from "assets/icon-twitter.svg";
import iconWebsite from "assets/icon-website.svg";
import iconCompany from "assets/icon-company.svg";

const Main = styled.main`
  width: 100%;
  height: ${rem(444)};
  background: ${({ theme }) => theme.colors.cardBg};
  padding: ${rem(48)};
  display: flex;
  margin-top: ${rem(24)};
  border-radius: ${rem(15)};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const AvatarContainer = styled.div`
  margin-right: ${rem(37)};
`;
export const UserInfoContainer = styled.div`
  width: 100%;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${rem(39)};
`;
export const Login = styled.h3`
  margin-bottom: ${rem(30)};
`;
export const Bio = styled.p`
  margin-bottom: ${rem(32)};
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
`;
export const Stat = styled.div``;

export const Name = styled.h4``;
export const Value = styled.h2``;
export const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${rem(20)} 0;
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
  }
`;

export default Main;
