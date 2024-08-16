import React from "react";
import { Link, useHistory } from "react-router-dom";
import './Header.css';  // Assuming you have this CSS file

function Header() {
  const history = useHistory();
  const flightUser = localStorage.getItem("user");
  const user = flightUser ? JSON.parse(flightUser) : null;
  const isAdmin = user?.isadmin === 1;
  const isLoggedIn = Boolean(user);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleTickets = () => {
    history.push("/tickets");
  };

  const renderLoggedInLinks = () => (
    <>
      <Link className="nav-link" to="/">
        <button className="btn btn-outline-light">Home</button>
      </Link>
      <Link className="nav-link" to="/contact">
        <button className="btn btn-outline-light">Contact Us</button>
      </Link>
      <button onClick={handleTickets} className="btn btn-outline-light">
        Booking History
      </button>
      {isAdmin && (
        <>
          <Link className="nav-link" to="/addFlight">
            <button className="btn btn-outline-light">Add Flight</button>
          </Link>
          <Link className="nav-link" to="/allFlights">
            <button className="btn btn-outline-light">All Flights</button>
          </Link>
          <Link className="nav-link" to="/admin">
            <button className="btn btn-outline-info">Admin</button>
          </Link>
        </>
      )}
      <button onClick={handleLogout} className="btn btn-outline-light">
        Logout
      </button>
      {!isAdmin && (
        <span className="welcome-message">
          <strong className="text-warning">Welcome, {user.username}</strong>
        </span>
      )}
    </>
  );

  const renderLoggedOutLinks = () => (
    <>
      <Link className="nav-link" to="/">
        <button className=" btn-outline-light">Home</button>
      </Link>
      <Link className="nav-link" to="/contact">
        <button className="btn-outline-light">Contact Us</button>
      </Link>
      <Link className="nav-link" to="/login">
        <button className=" btn-outline-light">Login</button>
      </Link>
      <Link className="nav-link" to="/register">
        <button className=" btn-outline-light">Register</button>
      </Link>
    </>
  );

  return (
    <nav className="navbar navbar-dark  fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand text-dark" to="/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/713/713361.png"
            alt="Logo"
            className="navbar-logo"
          />
          BookMyFlight
        </Link>
        <ul className="nav justify-content-end">
          {isLoggedIn ? renderLoggedInLinks() : renderLoggedOutLinks()}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
