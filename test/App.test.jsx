import { render, screen } from "@testing-library/react";
import { describe, it, expect, test } from "vitest";
import { createMemoryRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../src/App";
import Nav from "../src/components/Nav";
import HomePage from "../src/components/HomePage";
import Shopping from "../src/components/Shopping";

const routes = createMemoryRouter([
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
]);

describe("App", () => {
  it("Router is working", () => {
    render(<RouterProvider router={routes} />);
    expect(screen.getByRole("heading").textContent).toMatch(
      "Welcome to our online store"
    );
  });
  it("Nav is working", () => {
    render(<RouterProvider router={routes} />);
    expect(screen.getByRole("list").textContent).toMatch("Home");
  });
});
