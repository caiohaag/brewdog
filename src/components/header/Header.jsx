import "./header.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";

function Header() {
  const { user, logout } = useContext(AuthContext);
  const [menuIsActive, setMenuIsActive] = useState(false);

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
            <img src={`/${user?.username}.jpg`} alt={user?.username} className="user__picture" />
            <div className="user__actions">
              <span className="user__name">{user?.username}</span>
              <button className="logout__button" onClick={logout}>
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
