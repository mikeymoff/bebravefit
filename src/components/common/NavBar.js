import React, { Component } from "react";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/home">BeBraveFit</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link sr-only" href="">Profile<span>(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/home" style={{float: "right"}}>Profile</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/history" style={{float: "right"}}>History</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/createmerchant" style={{float: "right"}}>Merchant</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/logout" style={{float: "right"}}>Sign Out</a>
      </li>

      
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="">Action</a>
          <a className="dropdown-item" href="">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="">Something else here</a>
        </div>
    </ul>
  </div>
</nav>
        )
    }
}

export default NavBar;