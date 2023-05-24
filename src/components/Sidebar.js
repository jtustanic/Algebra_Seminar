import React, { Component } from "react";
import { Link } from "react-router-dom";
import  "./Sidebar.css";

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isOpen: false,
        }

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar(){
        const { isOpen } = this.state;

        this.setState({ isOpen: !isOpen });
    }

    render(){
        const { isOpen } = this.state;

        return (
          <div className="container-fluid mt-3">
              <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
                  <div className="sd-header">
                      <h4>W e l c o m e</h4>
                      <div
                          className="btn btn-primary"
                          onClick={this.toggleSidebar}
                      >
                          X
                      </div>
                  </div>
                  <div className="sd-body">
                      <ul>
                          <li>
                              <Link
                                  onClick={this.toggleSidebar}
                                  to="/Algebra_Seminar/"
                                  className="sd-link"
                              >
                                  Chat
                              </Link>
                          </li>
                          <li>
                              <Link
                                  onClick={this.toggleSidebar}
                                  to="/Algebra_Seminar/about"
                                  className="sd-link"
                              >
                                  About
                              </Link>
                          </li>
                      </ul>
                  </div>
              </div>
              <div
                  className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                  onClick={this.toggleSidebar}
              />
          </div>
        );
    }

}

export default Sidebar;
