import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import About from "./components/About";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleLogin = (username) => {
    this.setState({ username })

  }

  toggleSidebar = () =>{
    this.sidebar.ToggleSidebar();
  }

  handleLogout = () => {
    this.setState({username: ""});
  }

  render() {
    return (


      <div>
        <Header toggleSidebar={this.toggleSidebar} username={this.state.username} handleLogout={this.handleLogout} />
        <Sidebar ref={(reference) => this.sidebar = reference} />


        <Routes>
          <Route path="/" element={this.state.username ? <Chat username={this.state.username} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
          <Route path="/about" element={this.state.username ? <About  /> : <Navigate to="/login" />} />

        </Routes>
      </div>
    )
  }
}


export default App;
