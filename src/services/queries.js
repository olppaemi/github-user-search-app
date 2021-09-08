import { gql } from "@apollo/client";

export const GET_USER = gql`
  {
    user(login: "octocat") {
      name
      login
      avatarUrl
      createdAt
      bio
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      twitterUsername
      websiteUrl
      company
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUserInfo($username: String!) {
    user(login: $username) {
      name
      login
      avatarUrl
      createdAt
      bio
      repositories {
        totalCount
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      location
      twitterUsername
      websiteUrl
      company
    }
  }
`;
