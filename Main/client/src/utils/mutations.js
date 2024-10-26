import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      username
      _id
    }
  }
}`

export const ADD_USER = gql`
mutation Login($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}`

export const SAVE_BOOK = gql`
mutation SaveBook($input: BookInput!) {
  saveBook(input: $input) {
    _id
    bookCount
    email
    username
  }
}`

export const REMOVE_BOOK = gql`
mutation RemoveBook($bookId: String!) {
  removeBook(bookId: $bookId) {
    _id
    bookCount
  }
}`