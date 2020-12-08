import React from "react";
import BreadCrumbModel from '../../breadcrumb/breadcrumb';

const NavThree = () => {
  const order = [
    'Home', 'Nav 3'
  ];
  return (
    <div className="nav-three">
      <BreadCrumbModel
        order={order}
      ></BreadCrumbModel>
    </div>
  )
}

export default NavThree;