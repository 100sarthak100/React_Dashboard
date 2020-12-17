import "./Sidebar.css";
import logo from "../../assets/logo.png";
import assets from "../../assets/assets.png";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebarResponsive" : ""} id="sidebar">
      <div className="sidebarTitle">
        <div className="sidebarImg">
          <img src={logo} alt="logo" />
          <h1>Finacular</h1>
        </div>
        
      </div>

      <div className="sidebarMenu">
        <div className="sidebarLink activeMenuLink">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebarLink">
          <a href="#">Assets</a>
        </div>
        <div className="sidebarLink">
          <a href="#">Tracker</a>
        </div>
        <div className="sidebarLink">
          <a href="#">Planning & Advisory</a>
        </div>
       
      </div>
    </div>
  );
};

export default Sidebar;
