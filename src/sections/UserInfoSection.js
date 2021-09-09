import { formatDate } from "services/formatDate";
import AvatarImg from "styles/components/AvarImg";
import UserInfo, {
  AvatarContainer,
  Bio,
  Company,
  Location,
  Login,
  Name,
  Profile,
  Stats,
  Stat,
  Title,
  Twitter,
  Value,
  Website,
  UserName,
  UserInfoContainer,
} from "styles/layout/UserInfo";

const UserInfoSection = ({ loading, error, data }) => {
  if (loading) return <UserInfoContainer>Loading...</UserInfoContainer>;
  if (error) return <UserInfoContainer>{error.message}</UserInfoContainer>;
  if (!data) return <UserInfoContainer>no info</UserInfoContainer>;

  const {
    name,
    login,
    avatarUrl,
    createdAt,
    bio,
    repositories: { totalCount: repositoriesCount },
    followers: { totalCount: followersCount },
    following: { totalCount: followingsCount },
    location,
    twitterUsername,
    websiteUrl,
    company,
  } = data.user;

  return (
    <UserInfoContainer>
      <UserInfo>
        <AvatarContainer>
          <AvatarImg src={avatarUrl} alt="avatar" />
        </AvatarContainer>
        <Title>
          <div>
            <UserName>{name}</UserName>
            <Login>@{login}</Login>
          </div>
          <p>Joined {formatDate(createdAt)}</p>
        </Title>
        <Bio>{bio ? bio : "This profile has no bio"}</Bio>
        <Stats>
          <Stat>
            <Name>Repos</Name>
            <Value>{repositoriesCount}</Value>
          </Stat>
          <Stat>
            <Name>Followers</Name>
            <Value>{followersCount}</Value>
          </Stat>
          <Stat>
            <Name>Following</Name>
            <Value>{followingsCount}</Value>
          </Stat>
        </Stats>
        <Profile>
          <Location>{location ? location : "Not Available"}</Location>
          <Twitter>
            {twitterUsername ? twitterUsername : "Not Available"}
          </Twitter>
          <Website>{websiteUrl ? websiteUrl : "Not Available"}</Website>
          <Company>{company ? company : "Not Available"}</Company>
        </Profile>
      </UserInfo>
    </UserInfoContainer>
  );
};

export default UserInfoSection;
