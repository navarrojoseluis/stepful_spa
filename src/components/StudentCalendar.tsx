import Calendar from "./Calendar";
import { StudentType } from "../graphql/types";

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
};

const calendarContainerStyle: React.CSSProperties = {
  width: "48%",
};

const StudentCalendar = ({
  student,
}: {
  student: StudentType;
}): JSX.Element => {
  return (
    <div data-test-id="student-calendar" style={containerStyle}>
      <div style={calendarContainerStyle}>
        <Calendar title="My Calendar" slots={student.schedule} user={student} />
      </div>
      <div style={calendarContainerStyle}>
        <Calendar
          title="Available Times"
          slots={student.availableTimes}
          user={student}
          showBookSlotButton={true}
        />
      </div>
    </div>
  );
};

export default StudentCalendar;
