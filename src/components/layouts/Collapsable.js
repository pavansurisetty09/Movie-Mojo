import React from "react";
import * as RiIcons from "react-icons/ri";
import PropTypes from "prop-types";
import "./SideBarMenu.css";

function Collapsable({ showSubItems, show }) {
  return (
    <div aria-hidden="true" onClick={() => showSubItems(true)}>
      {show ? <RiIcons.RiArrowUpSLine /> : <RiIcons.RiArrowDownSLine />}
    </div>
  );
}

Collapsable.defaultProps = {
  showSubItems: PropTypes.instanceOf(null),
};

Collapsable.propTypes = {
  showSubItems: PropTypes.func.isRequired,
};

export default Collapsable;
