import "./Header.scss";
import Logo from "../Assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-right">
        <img src={Logo} alt="logo" />
        <ul className="header-list">
        <li>Product</li>
        <li>Features</li>
        <li>Marketplace</li>
        <li>Company</li>
      </ul>
      </div>

    

      <div className="header-btn">
        <span className="header-btn-login">Log in</span>
        <span className="header-btn-signup">Start free trial</span>
        <div className="mobile-nav">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      
    </div>
  );
};

export default Header;
