
import React from "react";
import { Outlet } from "react-router-dom";

type PropTypes = {};

function AdminLayout(props :PropTypes) {
  return (
    <div>
        <header>AdminPage</header>
        <div className="row">
            <div className="col-2">
                <aside>ahihi</aside>
            </div>
            <div className="col-10">
                <main>
                    content 
                    <Outlet />
                    {/*dây là phần sẽ có sự thay đổi khi render */}
                </main>
            </div>
        </div>
    </div>
  );
};
export default AdminLayout;