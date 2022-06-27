import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

function Header() {
  const { user, dispatch } = useContext(AuthContext);
  const [menuIsActive, setMenuIsActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {      
      navigate('/login')  
    }
  },[user, navigate])

  const handleLogoff = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_SUCCESS", payload: null });
    localStorage.removeItem("userlogin");
  };  

  return (
    <>
      <header>
        <Link to="/">
          <img src="/brewdog-logo.png" alt="BrewDog" className="brewdog__logo" />
        </Link>
        <nav className={`menu__top ${menuIsActive && "active"}`}>
          <ul>
            <li>
              <Link to="/" className="link" onClick={() => setMenuIsActive(false)}>
                All beers
              </Link>
            </li>
            <li>
              <Link to="/about" className="link" onClick={() => setMenuIsActive(false)}>
                About the dev
              </Link>
            </li>
          </ul>
          <div className="user">
            <img src={`/${user}.jpg`} alt={user} className="user__picture" />
            <div className="user__actions">
              <span className="user__name">{user}</span>
              <button className="logout__button" onClick={handleLogoff}>
                Logout
              </button>
            </div>
          </div>
        </nav>
        <button 
            onClick={() => setMenuIsActive(!menuIsActive)}
            className={`menu__toggler ${menuIsActive && 'active'}`}
        >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="x-1"></div>
            <div className="x-2"></div>
        </button>
        <div
            onClick={() => setMenuIsActive(false)} 
            className={`overlay ${menuIsActive && 'active'}`}
        ></div>
      </header>
    </>
  );
}

export default Header;
