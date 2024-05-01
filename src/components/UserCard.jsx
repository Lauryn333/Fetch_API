import "../scss/userCard.scss";
function UserCard({ user }) {
  return (
    <div className="div-container">
      <div className="user-informations">
        <img src={user.picture} alt="portrait individuel" />

        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.email}</p>
      </div>
      <button>Click here to change the user</button>
    </div>
  );
}
export default UserCard;
