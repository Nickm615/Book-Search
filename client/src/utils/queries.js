import { gql } from '@apollo/client';

export const GET_ME = gql `
query me($username: String!, $_id: ID!) {
    user(_id: $_id){
    _id
    username
    email
    savedBooks {
        authors
        description
        bookId
        image
        link
        title
    }
}

} 
`