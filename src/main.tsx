import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
// import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store.tsx";
import Progress from "./pages/progress.tsx";
import ProgressInit from "./pages/progressLogin.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/home", element: <App /> },
  { path: "/progressinit", element: <ProgressInit /> },
  { path: "/progress", element: <Progress /> },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
