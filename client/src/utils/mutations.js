import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      _id
    }
  }
}`

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
  addUser(username: $username, password: $password, email: $email) {
    token
    user {
      username
    }
  }
}`

export const SAVE_BOOK = gql`
mutation saveBook($input: BookInput!) {
  saveBook(input: $input) {
    _id
    bookCount
    email
    username
  }
}`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
  }
}`
