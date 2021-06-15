import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Collapsable from "./Collapsable";
import "./SideBarMenu.css";

const MenuItem = ({ item, index, showSidebar }) => {
  const [show, setShow] = useState(false);

  const showSubItems = () => item.items && setShow(!show);
  return (
    <div key={index} className="sidebar">
      <div className={item.cName}>
        <Link to={item.path} onClick={showSidebar}>
          {item.icon}
          <span>{item.title}</span>
        </Link>
        <div className="updown">
          {item.items && item.items.length && (
            <Collapsable show={show} showSubItems={showSubItems} />
          )}
        </div>
      </div>
      <div
        className="sub-menu"
        onClick={showSidebar}
        style={{ paddingLeft: "10px" }}
      >
        {show &&
          item.items &&
          item.items.length &&
          item.items.map((subitem) => <MenuItem item={subitem} />)}
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.object,
  showSidebar: PropTypes.func,
  index: PropTypes.array,
};

export default MenuItem;
