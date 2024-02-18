import {
  SlotType,
  CoachType,
  StudentType,
  UserTypes,
} from "../../graphql/types";

const slotContainerStyle: React.CSSProperties = {
  margin: "10px",
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

const CalendarSlot = ({
  slot,
  user,
}: {
  slot: SlotType;
  user: CoachType | StudentType;
}): JSX.Element => {
  const attendeeName =
    user.__typename === UserTypes.Student
      ? slot.coach?.name || "Free"
      : slot.student?.name || "Free";

  return (
    <div style={slotContainerStyle}>
      <strong>{attendeeName}</strong>
      <p>{`${slot.startTime} - ${slot.endTime}`}</p>
    </div>
  );
};

export default CalendarSlot;
