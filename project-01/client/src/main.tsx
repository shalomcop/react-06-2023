import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Second from "./pages/Second";
import Third from './pages/Third';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/second",
    element: <Second />,
  },
  {
    path: "/third",
    element: <Third />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
