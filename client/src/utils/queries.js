import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
        _id
        usernameemail
        teams {
            _id
            teamname
            gamename
        }
    }
}
`;

export const QUERY_TEAMS = gql`
    query getTeams {
        teams {
             _id
            teamname
            gamename
        }
    }
`;

export const QUERY_ME = gql`
query me {
    me{
        _id
        username
        email
        teams {
            _id
            teamname
            gamename
        }
   }
}
`;