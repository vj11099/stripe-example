import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./layout/mainlayout";
const routes = [
  {
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "test",
        element: <p>Test</p>,
      },
      {
        path: "main",
        element: <p>Main</p>,
      },
      {
        path: "product",
        element: <p>Product</p>,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  basename: "/",
});

export default router;
