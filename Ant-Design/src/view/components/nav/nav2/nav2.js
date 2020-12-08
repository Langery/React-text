import React from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';

const NavTwo = () => {
  const order = [
    'Home', 'Nav 2'
  ];
  return (
    <div className="nav-two">
      <BreadCrumbModel
        order={order}
      ></BreadCrumbModel>
    </div>
  )
}

export default NavTwo;