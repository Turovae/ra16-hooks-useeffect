import "./App.css";
import UserInfo from "./components/UserInfo";
import Users from "./components/Users";
import { useEffect, useState } from "react";

const URL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data";

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(undefined);
  const [userId, setUserId] = useState(0);

  useEffect(() => {
    let fullURL: string;
    let fetchingCallback: CallableFunction;

    if (userId <= 0) {
      fullURL = URL + "/users.json";
      fetchingCallback = setData;
    } else {
      fullURL = URL + "/" + userId.toString() + ".json";
      fetchingCallback = setUser;
    }
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(fullURL);

        if (!response.ok) {
          throw new Error("Load error!");
        }

        const data = (await response.json()) as object;

        fetchingCallback(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    console.log("fetching");
    fetchData();
  }, [userId]);

  const handleSelectUser = (id: number): void => {
    console.log(id);
    if (id === userId) {
      return;
    }

    setUserId(id);
  };

  return (
    <div className="app">
      <Users users={data} onSelectUser={handleSelectUser} selectedId={userId} />
      {user && <UserInfo user={user} />}
    </div>
  );
}

export default App;
