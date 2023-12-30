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
<<<<<<< Updated upstream
import { store } from "./state/store.ts";
=======
import { store } from "./state/store.tsx";
import ProgressPage from "./pages/Progress.tsx";
import Progress from "./pages/Progress.tsx";
>>>>>>> Stashed changes

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <App /> },
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
