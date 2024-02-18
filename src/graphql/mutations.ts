import { gql } from "urql";

export const CREATE_SLOT = gql`
  mutation CreateSlot($input: CreateSlotMutationInput!) {
    createSlot(input: $input) {
      slot {
        id
        startTime
        endTime
      }
      error
    }
  }
`;