import Calendar from "./Calendar";
import { CoachType } from "../graphql/types";
import { useMutation } from "urql";
import { CREATE_SLOT } from "../graphql/mutations";
import { useState } from "react";
import { dateStringtoDateStringISOFormat } from "../utils/date";

const buttonStyle: React.CSSProperties = {
  cursor: "pointer",
};

const CoachCalendar = ({ coach }: { coach: CoachType }): JSX.Element => {
  const [startTime, setStartTime] = useState<string>("");
  const [createSlotResult, createSlot] = useMutation(CREATE_SLOT);

  const handleCreateSlot = () => {
    if (!startTime) return;

    const startTimeISOFormat = dateStringtoDateStringISOFormat(startTime);
    const variables = {
      input: { coachId: coach.id, startTime: startTimeISOFormat },
    };

    createSlot(variables).then(({ data, error }) => {
      if (error || data.error) {
        console.error("Error: ", data.error);
      }
    });
  };

  return (
    <div data-test-id="coach-calendar">
      <Calendar title="My Calendar" slots={coach.schedule} user={coach} />
      <input
        type="datetime-local"
        value={startTime}
        onChange={(event) => setStartTime(event.target.value)}
      />
      <button style={buttonStyle} onClick={handleCreateSlot}>
        Create Slot
      </button>
    </div>
  );
};

export default CoachCalendar;
