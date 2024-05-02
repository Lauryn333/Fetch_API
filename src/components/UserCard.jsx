import "../scss/userCard.scss";
function UserCard({ firstName, lastName, email, picture, getProfil }) {
  return (
    <div className="div-container">
      <div className="user-informations">
        <img src={picture} alt="portrait individuel" />
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{email}</p>
      </div>
      <button onClick={() => getProfil()}>Click here to change the user</button>
    </div>
  );
}
export default UserCard;
