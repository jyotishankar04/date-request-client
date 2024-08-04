import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signup } from "../pages/Signup";
import { Login } from "../pages/Login";
import { User } from "../pages/User";
import { Request } from "../pages/Request";
import UserLayout from "../pages/UserLayout";

export const RoutesConfig = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="user" element={<UserLayout />}>
          <Route path=":id" element={<User />}></Route>
        </Route>
        <Route path="request/:id" element={<Request />} />
      </Routes>
    </>
  );
};
