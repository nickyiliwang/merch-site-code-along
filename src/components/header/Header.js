import React from "react";
// components
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
// router
import { Link } from "react-router-dom";
// logo
import { ReactComponent as Logo } from "../../assets/crown.svg";
// firebase
import { auth } from "../../firebase/FirebaseUtils";
// redux
import { connect } from "react-redux";
// css
import "./Header.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropdown />}
  </div>
);

// same as state.user.currentUser, and state.ui.hidden
const mapStateToProps = ({ user: { currentUser }, ui: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
