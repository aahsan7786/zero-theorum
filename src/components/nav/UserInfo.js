import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import bellIcon from "./../../assets/images/notificationBtn/notificationBtn/notificationBtn-white.svg";
import bellHoverIcon from "./../../assets/images/notificationBtn/notificationBtn/notificationBtn-clr.svg";
import messageHoverIcon from "./../../assets/images/notificationBtn/messageBtn/msgBtn-color.svg";
import messageIcon from "./../../assets/images/notificationBtn/messageBtn/msgBtn-white.svg";
import profileIcon from "./../../assets/images/notificationBtn/profileIcon/profile icon.svg";
import {makeStyles} from "@material-ui/styles";
import {getCookie} from "../../service/CookieManager";
const useStyles = makeStyles({
  userInfoContainer: {
    display: "flex",
    gridGap: "10px",
    alignItems: "center",
  },
  notification: {
    backgroundImage: `url(${bellIcon})`,
    width: "15px",
    height: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  },
  message: {
    backgroundImage: `url(${messageIcon})`,
    width: "15px",
    height: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    cursor: "pointer",
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gridGap: "5px",
  },
  name: {},
  avatar: {
    backgroundImage: `url(${profileIcon})`,
    width: "25px",
    height: "25px",
  },
});

const UserInfo = (props) => {
  const classes = useStyles(props);
  const getUserName = () => {
    if (props.user && props.user.userInfo) return props.user.userInfo.username;
    return getCookie("authToken");
  };
  const [userName, setUserName] = useState(getUserName());

  useEffect(() => {}, []);
  return (
    <div className={classes.userInfoContainer}>
      <div className={classes.notification}></div>
      <div className={classes.message}></div>
      {userName && (
        <div className={classes.avatarContainer}>
          <div className={classes.name}>{userName}</div>
          <div className={classes.avatar}></div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps)(UserInfo);
