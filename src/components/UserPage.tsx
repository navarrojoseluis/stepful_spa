import { GET_USER } from "../graphql/queries";
import { useQuery } from "urql";
import { UserTypes } from "../graphql/types";
import StudentCalendar from "./StudentCalendar";
import CoachCalendar from "./CoachCalendar";

const UserPage = ({ userId }: { userId: string }): JSX.Element => {
  const [{ fetching, data, error }] = useQuery({
    query: GET_USER,
    variables: { id: userId },
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;
  const name = data.user?.name;
  const userType = data.user?.__typename;

  return (
    <>
      <h1>
        Hello {userType} {name}
      </h1>
      {userType === UserTypes.Student && <StudentCalendar student={user} />}
      {userType === UserTypes.Coach && <CoachCalendar coach={user} />}
    </>
  );
};

export default UserPage;
