import "./App.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const App = (): JSX.Element => {
  const [userId, setUserId] = useState<string | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setUserId(searchParams.get("id"));
  }, [searchParams]);

  if (!userId)
    return (
      <p>
        Please provide a valid user ID in the URL parameters. Example:
        "http://localhost:3001/?id=1"
      </p>
    );

  return <div className="App">Hello user {userId}</div>;
};

export default App;
