import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
}

export default UserLayout;
