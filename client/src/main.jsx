import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import AuthProviders from "./providers/AuthProviders.jsx";
import Router from "./routes/Router.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProviders>
			<RouterProvider router={Router} />
			<Toaster position="top-center" reverseOrder={false} />
		</AuthProviders>
	</React.StrictMode>
);
