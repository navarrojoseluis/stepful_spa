import { gql } from "urql";

export const GET_USER = gql`
  query UserQuery($id: ID!) {
    user(id: $id) {
      ... on Coach {
        __typename
        id
        name
        schedule {
          id
          startTime
          endTime
          rate
          note
          student {
            id
            name
          }
        }
      }
      ... on Student {
        __typename
        id
        name
        schedule {
          id
          startTime
          endTime
          coach {
            id
            name
          }
        }
        availableTimes {
          id
          startTime
          endTime
          coach {
            id
            name
          }
        }
      }
    }
  }
`;
