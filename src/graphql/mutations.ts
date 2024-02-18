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

export const UPDATE_SLOT = gql`
  mutation UpdateSlot($input: UpdateSlotMutationInput!) {
    updateSlot(input: $input) {
      slot {
        id
        student {
          id
          name
        }
      }
      error
    }
  }
`;
