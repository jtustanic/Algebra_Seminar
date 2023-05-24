import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = { username: "" };
  }

  handleLogin(username) {
    this.setState({ username })
  }

  handleLogout() {
    this.setState({ username: "" });
  }

  toggleSidebar() {
    this.sidebarRef.toggleSidebar();
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <Header
            toggleSidebar={this.toggleSidebar}
            username={username}
            handleLogout={this.handleLogout}
        />
        <Sidebar ref={ref => this.sidebarRef = ref} />
        <Routes>
          <Route
              path="/Algebra_Seminar/"
              element={username ? <Chat username={username} /> : <Navigate to="/Algebra_Seminar/login" />}
          />
          <Route
              path="/Algebra_Seminar/login"
              element={<Login onLogin={this.handleLogin} />}
          />
          <Route
              path="/Algebra_Seminar/about"
              element={username ? <About /> : <Navigate to="/Algebra_Seminar/login" />}
          />
        </Routes>
      </div>
    )
  }
}


export default App;
