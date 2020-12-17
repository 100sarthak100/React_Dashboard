import "./Navbar.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navIcon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbarLeft">
        
        <a className="activeLink" href="#">
          Admin
        </a>
      </div>
      <div className="navbarRight">
        <a href="#">
          <i className="fa fa-cog" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i className="fa fa-bell" aria-hidden="true"></i>
        </a>
        <a href="#!">
          <i className="fa fa-bolt" aria-hidden="true"> Actions</i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
