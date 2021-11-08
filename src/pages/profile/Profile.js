import React, { useEffect, useState } from "react";
import "./profile.scss";
import Auth from "@aws-amplify/auth";
import ProfileTab from "../../components/profileTabs/ProfileTabs";

const Profile = () => {
  const [username, setUsername] = useState("");

  const checkUser = async () => {
    let user = await Auth.currentAuthenticatedUser().catch(() =>
      console.log("Not signed in")
    );
    console.log(user);
    if (user) {
      setUsername(user.username);
    }
  };

  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <section className="profile">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="profile-welcome ">
              Welcome Back,
              <span className="profile-welcome-username">{username}</span>
            </p>
            <div className="profile-body">
              <ProfileTab />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
