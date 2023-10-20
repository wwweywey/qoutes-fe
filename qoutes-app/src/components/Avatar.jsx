import "./Avatar.scss";
import avatar from "../assets/img/avatar.jpg";

function Avatar() {
  return (
    <div className="profile-avatar">
      <img src={avatar} alt="avatar" />
    </div>
  );
}

export default Avatar;
