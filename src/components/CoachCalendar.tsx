import Calendar from "./Calendar";
import { CoachType } from "../graphql/types";
import { useState } from "react";

const buttonStyle: React.CSSProperties = {
  cursor: "pointer",
};

const CoachCalendar = ({ coach }: { coach: CoachType }): JSX.Element => {
  const [startTime, setStartTime] = useState<string>("");

  const handleCreateSlot = () => {};

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
