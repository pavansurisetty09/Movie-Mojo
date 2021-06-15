import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
// import { AiOutlineClose } from "react-icons/ai";
import { SideBarData } from "./SideBarData";
import "./SideBarMenu.css";
import Navbar from "./Navbar";
import SubMenuItems from "./SubMenuItems";

function SideBarMenu() {
  const [sideBar, setSideBar] = useState(false);
  const [subItems, setSubItems] = useState(false);

  const showSidebar = () => {
    setSideBar(!sideBar);
  };

  const showSubItems = () => {
    setSubItems(!subItems);
  };
  return (
    <Fragment>
      <IconContext.Provider
        value={{ color: "white", className: "global-class-name" }}
      >
        <div className={sideBar ? "side-menu active" : "side-menu"}>
          <ul className="side-menu-items" onClick={showSidebar}>
            <li className="sidebar-toggle"></li>
            {SideBarData.map((item, index) => {
              // <SubMenuItems item={item} key={index} />;
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Navbar showSidebar={showSidebar} />
      </IconContext.Provider>
    </Fragment>
  );
}

export default SideBarMenu;
