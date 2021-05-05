/* =================================================================The Header Component======================================================= */
//import statement to create App component
import React from "react";

// import statement to be able to use Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

export default function HeaderComponent() {
  //return statement with header div
  return (
    <div className="header">
      <div className="headerTitle">
        <FontAwesomeIcon icon={["fab", "apple"]} className="heading" />
        <h1 className="heading">My Faves </h1>
      </div>
      <h5>
        Where you can store your favorite content from iTunes Store and Apple
        Books Store.
      </h5>
    </div>
  );
}
