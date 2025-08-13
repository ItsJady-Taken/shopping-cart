import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { createMemoryRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Nav from "../src/components/Nav";
import HomePage from "../src/components/HomePage";
import Shopping from "../src/components/Shopping";
import ErrorPage from "../src/components/ErrorPage";

const routes = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
]);

describe("App", () => {
  it("Should render the router provider correctly with the heading", () => {
    render(<RouterProvider router={routes} />);
    expect(screen.getByRole("heading").textContent).toMatch(
      "Welcome to our online store"
    );
  });
  it("Should render the Nav with the list", () => {
    render(<RouterProvider router={routes} />);
    expect(screen.getByRole("list").textContent).toMatch("Home");
    expect(screen.getByRole("list").textContent).toMatch("Shop");
    expect(screen.getByRole("list").textContent).toMatch("Check Out");
  });
  it("Should handle bad url", () => {
    render(<RouterProvider router={routes} />);
    expect(screen.getByRole("heading").textContent).toMatch("404");
  });
});
