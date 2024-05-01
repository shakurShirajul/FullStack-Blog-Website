import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders.jsx';
import Router from './routes/Router.jsx';




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Router} />
    </AuthProviders>
  </React.StrictMode>
);