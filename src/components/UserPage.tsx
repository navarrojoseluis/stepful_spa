import { GET_USER } from "../graphql/queries";
import { useQuery } from "urql";

const UserPage = ({ userId }: { userId: string }): JSX.Element => {
  const [{ fetching, data, error }] = useQuery({
    query: GET_USER,
    variables: { id: userId },
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const name = data.user?.name;
  const userType = data.user?.__typename;

  return (
    <>
      <h1>
        Hello {userType} {name}
      </h1>
    </>
  );
};

export default UserPage;
