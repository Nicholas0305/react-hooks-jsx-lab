import React from "react";

function NavBar() {
  // update the JSX being returned!
  return (<nav>NavBar
    <Links />
  </nav>);

}
function Links(props) {
  return (
    <div>
      <a href='#home'>home</a>
      <a href='#about'>about</a>
    </div>

  );

}
export default NavBar;
