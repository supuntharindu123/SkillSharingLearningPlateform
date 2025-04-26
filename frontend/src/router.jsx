import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/login";
import Home from "./pages/home";
import Addpost from "./components/posts/Addpost";
import Createplan from "./components/learning/createplan";
import Profile from "./components/user/profile";
import Post from "./components/posts/Post";
import Notification from "./components/notification/notification";
import Explore from "./pages/explore";
import Progressupdate from "./components/learning/progressupdate";
import Learningplan from "./components/learning/learningplan";
import Navbar from "./components/layout/Navbar";

function Approuter() {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/addpost",
      element: <Addpost />,
    },
    {
      path: "/createplan",
      element: <Createplan />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/post",
      element: <Post />,
    },
    {
      path: "/notifications",
      element: <Notification />,
    },
    {
      path: "/explore",
      element: <Explore />,
    },
    {
      path: "/progress",
      element: <Progressupdate />,
    },
    {
      path: "/plan",
      element: <Learningplan />,
    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
