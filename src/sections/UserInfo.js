import { formatDate } from "services/formatDate";
import AvatarImg from "styles/components/AvarImg";
import Main, {
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
  UserInfoContainer,
  Value,
  Website,
} from "styles/layout/Main";

const UserInfo = ({ loading, error, data }) => {
  if (loading) return <Main>Loading...</Main>;
  if (error) return <Main>{error.message}</Main>;
  if (!data) return <Main>no info</Main>;

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
    <Main>
      <AvatarContainer>
        <AvatarImg src={avatarUrl} />
      </AvatarContainer>
      <UserInfoContainer>
        <Title>
          <h1>{name}</h1>
          <p>Joined {formatDate(createdAt)}</p>
        </Title>
        <Login>@{login}</Login>
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
      </UserInfoContainer>
    </Main>
  );
};

export default UserInfo;
