import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
          {props.totalCounters}
        </span>
        Items
      </div>
    </nav>
  );
}

export default Navbar;