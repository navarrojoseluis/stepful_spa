import CalendarSlot from "./CalendarSlot";
import { SlotType, CoachType, StudentType } from "../../graphql/types";
import { orderSlotsByStartTime } from "../../utils/date";

const Calendar = ({
  title,
  slots,
  user,
  showBookSlotButton = false,
}: {
  title: string;
  slots: SlotType[];
  user: CoachType | StudentType;
  showBookSlotButton?: boolean;
}): JSX.Element => {
  const sortedSlots = orderSlotsByStartTime(slots);

  return (
    <>
      <h2>{title}</h2>
      {sortedSlots.map((slot: SlotType) => {
        return (
          <CalendarSlot
            key={slot.id}
            user={user}
            slot={slot}
            showBookSlotButton={showBookSlotButton}
          />
        );
      })}
    </>
  );
};

export default Calendar;
