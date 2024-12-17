import { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

const sampleUser = {
  name: {
    first: "Charlie",
    last: "Thompson",
  },
  email: "charlie.thompson@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [user, setUser] = useState(sampleUser);

  const getUser = () => {

    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  };

  return (
    <main>
      <UserCard user={user}/>
      <button type="button" onClick={getUser}>Get user</button>
    </main>
  );
}

export default App;