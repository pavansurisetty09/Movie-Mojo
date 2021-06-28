import React from "react";
import { IconContext } from "react-icons/lib";
import PropTypes from "prop-types";
import SideBarData from "./SideBarData";
import MenuItem from "./MenuItem";
import Navbar from "./Navbar";

const SideBar = ({ sidebar, showSidebar }) => (
  <>
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className={sidebar ? "side-menu active" : "side-menu"}>
        <div className="side-menu-items">
          {SideBarData.map((item, index) => (
            <MenuItem item={item} key={index} showSidebar={showSidebar} />
          ))}
        </div>
      </div>
      <Navbar showSidebar={showSidebar} />
    </IconContext.Provider>
  </>
);

SideBar.propTypes = {
  sidebar: PropTypes.bool.isRequired,
  showSidebar: PropTypes.func.isRequired,
};

export default SideBar;
