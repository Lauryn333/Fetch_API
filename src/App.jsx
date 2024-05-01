import "./App.css";
import UserCard from "./components/UserCard";

const user = {
  firstName: "Kazka",
  lastName: "Gotra",
  email: "kazka.gotra@example.com",
  picture: "https://randomuser.me/api/portraits/women/5.jpg",
};

function App() {
  return <UserCard user={user} />;
}

export default App;
