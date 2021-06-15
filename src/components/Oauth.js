import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Link } from "react-router-dom";

class Oauth extends React.Component {
  componentDidMount() {
    window.gapi.load("client: auth2", async () => {
      await window.gapi.client.init({
        clientId:
          "527005934029-apcq61arp4i60c0fg5qbthfogjm5vhfl.apps.googleusercontent.com",
        scope: "email",
      });

      this.auth = window.gapi.auth2.getAuthInstance();

      // on fist render, set signin state to signed in/out
      this.onAuthChange(this.auth.isSignedIn.get());

      // listen for the event, when user signs in or out. update the signed in state when he does, and cause rerender
      this.auth.isSignedIn.listen(this.onAuthChange);
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthInfo() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (this.props.isSignedIn === true) {
      return (
        <Link
          to="/"
          type="button "
          className="btn btn-danger"
          onClick={() => this.onSignOutClick()}
        >
          Sign Out
        </Link>
      );
    }

    return (
      <Link
        to="/"
        type="button "
        className="btn btn-success"
        onClick={() => this.onSignInClick()}
      >
        Sign in
      </Link>
    );
  }

  render() {
    return (
      <div className="nav-link" style={{ color: "rgba(255,255,255 , 0.55)" }}>
        {this.renderAuthInfo()}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn: actions.signIn,
  signOut: actions.signOut,
})(Oauth);
