import CalendarSlot from "./CalendarSlot";
import { SlotType, CoachType, StudentType } from "../../graphql/types";

const Calendar = ({
  title,
  slots,
  user,
}: {
  title: string;
  slots: SlotType[];
  user: CoachType | StudentType;
}): JSX.Element => {
  return (
    <>
      <h2>{title}</h2>
      {slots.map((slot: SlotType) => {
        return <CalendarSlot key={slot.id} user={user} slot={slot} />;
      })}
    </>
  );
};

export default Calendar;
