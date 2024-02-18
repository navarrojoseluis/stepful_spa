import { SlotType } from "../graphql/types";

export const orderSlotsByStartTime = (slots: SlotType[]): SlotType[] => {
  const sortedSlots = [...slots].sort((a, b) => {
    const startTimeA = a.startTime;
    const startTimeB = b.startTime;

    return startTimeA.localeCompare(startTimeB);
  });

  return sortedSlots;
};
