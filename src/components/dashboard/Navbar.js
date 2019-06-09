import React, { Component } from "react";
import { Button, Grid, Popover, Typography, Paper } from "@material-ui/core";

import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";
import { Redirect, Link } from "react-router-dom";
import {
  SupervisorAccount,
  Message,
  Notifications,
  Search,
  Help,
  ArrowDownward,
  ArrowDropDown
} from "@material-ui/icons";

class Navbar extends Component {
  state = {
    createPanel: false,
    friendPanel: false,
    messagePanel: false,
    notificationsPanel: false,
    helpPanel: false,
    menuPanel: false
  };
  closeAllPanel = () => {
    this.setState({
      createPanel: false,
      friendPanel: false,
      messagePanel: false,
      notificationsPanel: false,
      helpPanel: false,
      menuPanel: false
    });
  };
  handelClickCreate = () => {
    this.closeAllPanel();
    this.setState({
      createPanel: !this.state.createPanel
    });
  };
  handelClickFriend = () => {
    this.closeAllPanel();
    this.setState({
      friendPanel: !this.state.friendPanel
    });
  };
  handelClickMessage = () => {
    this.closeAllPanel();
    this.setState({
      messagePanel: !this.state.messagePanel
    });
  };
  handelClickNotifications = () => {
    this.closeAllPanel();
    this.setState({
      notificationsPanel: !this.state.notificationsPanel
    });
  };
  handelClickHelp = () => {
    this.closeAllPanel();
    this.setState({
      helpPanel: !this.state.helpPanel
    });
  };
  handelClickMenu = () => {
    this.closeAllPanel();
    this.setState({
      menuPanel: !this.state.menuPanel
    });
  };
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="" />;

    return (
      <nav className="navbar">
        <Grid container>
          <Grid item xs={12} sm={6} md={5}>
            <ul className="navmenu">
              <li>
                {" "}
                <Link to="/">Fb</Link>
              </li>
              <li>
                {" "}
                <input placeholder="Serch" type="text" />
              </li>
              <li>
                {" "}
                <Button>
                  <Search />
                </Button>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ul className="navmenu">
              <li>
                <Link to="/profile">
                  <Button>
                    {profile.initials ? profile.initials.toUpperCase() : null}
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <Button>Homme</Button>
                </Link>
              </li>
              <li>
                <Button onClick={this.handelClickCreate}>Create</Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.createPanel ? "block" : "none"
                  }}
                >
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                </Paper>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <ul className="navmenu">
              <li>
                <Button onClick={this.handelClickFriend}>
                  <SupervisorAccount />
                </Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.friendPanel ? "block" : "none"
                  }}
                >
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                </Paper>
              </li>
              <li>
                <Button onClick={this.handelClickMessage}>
                  <Message />
                </Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.messagePanel ? "block" : "none"
                  }}
                >
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                </Paper>
              </li>
              <li>
                <Button onClick={this.handelClickNotifications}>
                  <Notifications />
                </Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.notificationsPanel ? "block" : "none"
                  }}
                >
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                </Paper>
              </li>
              <li>
                <Button onClick={this.handelClickHelp}>
                  <Help />
                </Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.helpPanel ? "block" : "none"
                  }}
                >
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                  <p>transition</p>
                </Paper>
              </li>
              <li>
                <Button onClick={this.handelClickMenu}>
                  <ArrowDropDown />
                </Button>
                <Paper
                  style={{
                    position: "absolute",
                    zIndex: 99,
                    display: this.state.menuPanel ? "block" : "none"
                  }}
                >
                  <ul className="navbar-sub-menu">
                    <li onClick={this.props.signOut}>Logout</li>
                    <li onClick={this.props.signOut}>Logout</li>
                    <li onClick={this.props.signOut}>Logout</li>
                  </ul>
                  
                </Paper>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/*
    
    */}
      </nav>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
