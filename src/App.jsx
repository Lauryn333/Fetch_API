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

  const getProfil = () => {
    axios
      .get("https://randomuser.me/api/?inc=name, email, picture")
      .then((response) => {
        const userData = response.data.results[0];
        const newProfil = {
          firstName: userData.name.first,
          lastName: userData.name.last,
          email: userData.email,
          picture: userData.picture.large,
        };
        setProfil(newProfil);
      });
  };

  return (
    <>
      <UserCard
        firstName={profil.firstName}
        lastName={profil.lastName}
        email={profil.email}
        picture={profil.picture}
        getProfil={getProfil}
      />
    </>
  );
}

export default App;
