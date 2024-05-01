import "../scss/userCard.scss";
function UserCard({ profil }) {
  return (
    <div className="div-container">
      <div className="user-informations">
        <img src={profil.picture} alt="portrait individuel" />
        <h3>
          {profil.firstName} {profil.lastName}
        </h3>
        <p>{profil.email}</p>
      </div>
      <button>Click here to change the user</button>
    </div>
  );
}
export default UserCard;
