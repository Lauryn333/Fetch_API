import "./App.css";
import UserCard from "./components/UserCard";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const user = {
    firstName: "Kazka",
    lastName: "Gotra",
    email: "kazka.gotra@example.com",
    picture: "https://randomuser.me/api/portraits/women/5.jpg",
  };

  const [profil, setProfil] = useState(user);

  const getProfil =
    (() => {
      axios
        .get("https://randomuser.me/api/?inc=name, email, picture")
        .then((response) => {
          setProfil(response.data.results[0]);
        });
    },
    []);

  return (
    <>
      <UserCard profil={profil} />
    </>
  );
}

export default App;
