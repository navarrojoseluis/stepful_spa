import {
  SlotType,
  CoachType,
  StudentType,
  UserTypes,
} from "../../graphql/types";
import { useMutation } from "urql";
import { UPDATE_SLOT } from "../../graphql/mutations";

const slotContainerStyle: React.CSSProperties = {
  margin: "10px",
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left",
};

const buttonStyle: React.CSSProperties = {
  cursor: "pointer",
};

const CalendarSlot = ({
  slot,
  user,
  showBookSlotButton = false,
}: {
  slot: SlotType;
  user: CoachType | StudentType;
  showBookSlotButton?: boolean;
}): JSX.Element => {
  const [updateSlotResult, updateSlot] = useMutation(UPDATE_SLOT);

  const attendeeName =
    user.__typename === UserTypes.Student
      ? slot.coach?.name || "Free"
      : slot.student?.name || "Free";

  const handleBookSlotClick = () => {
    const variables = { input: { id: slot.id, studentId: user.id } };
    updateSlot(variables).then(({ data, error }) => {
      if (error || data.error) {
        console.error("Error: ", data.error);
      }
    });
  };

  return (
    <div style={slotContainerStyle}>
      <strong>{attendeeName}</strong>
      <p>{`${slot.startTime} - ${slot.endTime}`}</p>
      {showBookSlotButton && (
        <button style={buttonStyle} onClick={handleBookSlotClick}>
          Book Slot
        </button>
      )}
    </div>
  );
};

export default CalendarSlot;
