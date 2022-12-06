import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { services, getToken } from "../services/api";
import { logUser } from "../Provider/user/actions";

export const paths = {
  login: "/",
  home: "/home",
  register: "/register",
};

const protect = [paths.home];

export function Rotas() {
  const logged = useSelector((state) => state.user.logged);
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    const token = getToken();
    if ( token && logged) {
      services()
      
        .then((res) => dispatch(logUser(res.data)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (protect.includes(location) && !logged) {
      navigate(paths.login);
    } else if (
      logged &&
      (location === paths.login || location === paths.register)
    ) {
      navigate(paths.home);
    }
  }, [navigate, location, logged]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
