import { Users } from "../../dummyData";
import "./rightbar.css";
import Online from "../online/Online";


export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/Birthday.jpg" alt="" />
      <span className="birthdayText">
        <b>Pola Foster</b> and <b>3 other friends </b>have a birthday today.
        </span>
      </div>
      <img className="rightbarAd" src="assets/pro2.jpg" alt=""/>
     <h4 className="rightbarTitle">Online Friends</h4>
     <ul className="rightbarFriendList">
    {Users.map(u=> (
  <Online key={u.id}user={u} />
  ))}
     </ul>
      </div>
    </div>
  );
}
