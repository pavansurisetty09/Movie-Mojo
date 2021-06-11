import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252832;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled(Link)`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
background: #414757;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px

&:hover {
  background: #632ce4;
  border-left: 4px solid #632ce4;
  cursor: pointer;
}
`;

function SubMenuItems({ item }) {
  const [subItems, setSubItems] = useState(false);

  const showSubItems = () => {
    setSubItems(!subItems);
  };

  return (
    <Fragment>
      <SidebarLink to={item.path} onClick={item.subItem && showSubItems}>
        <div>
          {item.subItem && subItems
            ? item.iconOpened
            : item.subItem
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subItems &&
        item.SubMenuItems.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </Fragment>
  );
}

export default SubMenuItems;
