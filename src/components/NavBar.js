import React from "react";

function NavBar() {
  /*Links for the navigation bar in array */
  const links = ["home", "about", "projects"];

  return (
    /*Component bar navigation */
  <nav>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a>

  </nav>
  );
}

export default NavBar;
