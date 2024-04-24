import React, { useState } from "react";
import './Header.css';
import blackLogo from '../../../assets/Images/comman/header/whiteLogo.png';
import close from '../../../assets/Images/comman/header/close_small.png';
import hamburger from '../../../assets/Images/comman/header/hamburger-white.png';
import dropDown from '../../../assets/Images/comman/header/drop-down-icon.svg';
import profile from '../../../assets/Images/comman/header/account_circle.png';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logoutUser } from "../../../feature/auth/navBarSlice";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hover, setHover] = useState(false); // State for tracking hover
  const { isLoggedIn, userProfile } = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate =  useNavigate();

  function toggleMenu() {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow'); // Add or remove overflow class for body
  }

  // Close the menu when navigating to a different page
  function handleNavigation() {
    setMenuOpen(false);
    document.body.classList.remove('overflow'); // Ensure overflow class is removed when navigating
  }

  const handleLogout = () => {
    dispatch(logoutUser()); // Dispatch the logout action
    // Additional logout logic if needed (e.g., redirecting to login page)
    navigate("/");
  }

  const handleUserDashboardClick = () => {
    setHover(false); // Close the dropdown when "User Dashboard" link is clicked
  }

  return (
    <header className="header">
      <nav className="header-container">
       <div className="logo">
       <Link  to="/"> <img src={blackLogo} alt="trafy logo" /></Link> 
        </div>

        <div className={`header-contents ${menuOpen ? 'show-contents' : ''}`}>
          <div className="header-contents-first">
            <Link to="/courses" onClick={handleNavigation}><button className="header-academy">Courses</button></Link>
            <Link to="/blog" onClick={handleNavigation}><button className="header-resources">Resources</button></Link>
          </div>

          {isLoggedIn ? (
            <div className="header-contents-second" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <div className="nav-user-profile" >
                <Link to="/user-dashboard" onClick={handleUserDashboardClick}>
                  {/* <img src={profile}/>  */}
                  <div style={{width:"36px",height:"36px",borderRadius:"100%",backgroundColor:"#fcfefe", display:"flex", justifyContent:"center",alignItems:"center"}}>A</div>

                  </Link>
                {hover && (
                  <div className="nav-user-dropdown" >
                    <Link to="/user-dashboard" onClick={handleUserDashboardClick}><p>User Dashboard</p></Link>
                  <p onClick={handleLogout}>Logout</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="header-contents-second">
              <Link to="/login" onClick={handleNavigation}><button className="header-login">Login</button></Link>
              <Link to="/signup" onClick={handleNavigation}><button className="header-signup">Sign Up Free</button></Link>
            </div>
          )}
        </div>
      </nav>
      <img src={hamburger} alt="" className={`hamburger ${menuOpen ? 'hide' : ''}`} style={{height:"20px"}}  onClick={toggleMenu} />
      <img src={close} alt="" className={`exit-icon ${menuOpen ? 'show' : ''}`} onClick={toggleMenu} />
    </header>
  );
}

export default Header;
     
