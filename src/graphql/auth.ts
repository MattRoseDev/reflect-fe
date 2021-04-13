import { gql } from "@apollo/client/core";

export const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        id
        username
        email
        fullname
        bio
        admin
        createdAt
        updatedAt
        deletedAt
      }
      token
    }
  }
`;
