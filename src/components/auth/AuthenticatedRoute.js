import React, {useEffect, useState} from "react";
import {Route, Redirect, useLocation} from "react-router-dom";
import {connect} from "react-redux";

const AuthenticatedRoute = ({children, ...rest}) => {
  const getAuth = () => {
    // return true;
    return rest.user && rest.user.userInfo && rest.user.userInfo.email;
  };

  const {pathname, search} = useLocation();
  const [isAuthenticated, setAuth] = useState(getAuth());

  useEffect(() => {
    console.log(children);
    console.log(rest);

    if (getAuth()) {
      setAuth(true);
    } else setAuth(false);
  }, []);
  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={`/investorlogin?redirect=${pathname}${search}`} />
      )}
    </Route>
  );
};
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});
export default connect(mapStateToProps)(AuthenticatedRoute);
