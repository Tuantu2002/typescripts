
import React from "react";
import { Outlet  , Link} from "react-router-dom";

type PropTypes = {};

function ClientLayoutClone(props :PropTypes) {
  return (
<div>
    <header>Client web</header>
    <nav>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/products'}>Products</Link></li>
      <li><Link to={'/posts'}>Post</Link></li>
      <li><Link to={'/books'}>Book</Link></li>
      <li><Link to={'/category'}>category</Link></li>
    </nav>
    <main>
        <Outlet />
    </main>
    <footer>
        footer
    </footer>
</div>
  );
};
export default ClientLayoutClone;