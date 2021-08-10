import { gql } from "@apollo/client";

export const ADD_USERS = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;
