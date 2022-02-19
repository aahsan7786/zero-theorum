import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import bellIcon from "./../../assets/images/notificationBtn/notificationBtn/notificationBtn-white.svg";
import bellHoverIcon from "./../../assets/images/notificationBtn/notificationBtn/notificationBtn-clr.svg";
import messageHoverIcon from "./../../assets/images/notificationBtn/messageBtn/msgBtn-color.svg";
import messageIcon from "./../../assets/images/notificationBtn/messageBtn/msgBtn-white.svg";
import profileIcon from "./../../assets/images/notificationBtn/profileIcon/profile icon.svg";
import {makeStyles} from "@material-ui/styles";
import {getCookie} from "../../service/CookieManager";
import {login} from "../../store/user/actions";
import {eraseCookie} from "../../service/CookieManager";
import {useHistory} from "react-router-dom";

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
    position: "relative",
    backgroundImage: `url(${profileIcon})`,
    width: "25px",
    height: "25px",
  },
  menu: {
    position: "absolute",
    background: "white",
    right: "0",
    top: "30px",
    width: "100px",
    textAlign: "left",
    border: "1px solid #e2e2e3",
    backgroundColor: "white",
    boxShadow: "-0.5px 0px 5px -2.5px rgb(0 0 0 / 75%)",
  },
  menuItem: {
    borderBottom: "1px solid #eff0f0",
    paddingBottom: "6px",
    paddingTop: "6px",
    fontSize: "12px",
    paddingLeft: "10px",
    color: "#676873",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f6f7fa",
      color: "rgb(222, 181, 19)",
    },
  },
});

const UserInfo = (props) => {
  const classes = useStyles(props);
  const history = useHistory();

  const getUserName = () => {
    if (props.user && props.user.userInfo) return props.user.userInfo.username;
    return getCookie("authToken");
  };
  const [userName, setUserName] = useState(getUserName());
  const [isMenuOpen, setMenuOpen] = useState(false);
  const logout = () => {
    props.login(null);
    eraseCookie("authToken");
    history.push("/investorlogin");
  };
  useEffect(() => {}, []);
  return (
    <div className={classes.userInfoContainer}>
      <div className={classes.notification}></div>
      <div className={classes.message}></div>
      {userName && (
        <div className={classes.avatarContainer}>
          <div
            className={classes.name}
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}>
            {userName}
          </div>
          <div
            className={classes.avatar}
            onClick={() => {
              setMenuOpen(!isMenuOpen);
            }}>
            {isMenuOpen && (
              <div className={classes.menu}>
                <div
                  className={classes.menuItem}
                  onClick={() => {
                    logout();
                  }}>
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
});

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
