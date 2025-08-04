import { Navigate, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./components/HomePage";
import Shopping from "./components/Shopping";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <Shopping />,
      },
    ],
  },
];

export default routes;
