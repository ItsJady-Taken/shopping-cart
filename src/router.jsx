import App from "./App";
import HomePage from "./components/HomePage";
import Shopping from "./components/Shopping";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        default: true,
      },
      {
        path: "/shop",
        element: <Shopping />,
      },
    ],
  },
];

export default routes;
