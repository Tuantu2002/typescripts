
import React from "react";
import { Outlet } from "react-router-dom";

type PropTypes = {};

function ClientLayout(props :PropTypes) {
  return (
<div>
    <header>Client web</header>
    <main>
        content
        <Outlet />
    </main>
    <footer>
        footer
    </footer>
</div>
  );
};
export default ClientLayout;