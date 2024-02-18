export type SlotType = {
  id: number;
  startTime: string;
  endTime: string;
  coach?: {
    id: number;
    name: string;
  };
  student?: {
    id: number;
    name: string;
  };
  rate: number;
  note: string;
};

export enum UserTypes {
  Coach = "Coach",
  Student = "Student",
}

export type CoachType = {
  __typename: UserTypes;
  id: string;
  schedule: SlotType[];
};

export type StudentType = {
  __typename: UserTypes;
  id: string;
  schedule: SlotType[];
  availableTimes: SlotType[];
};
