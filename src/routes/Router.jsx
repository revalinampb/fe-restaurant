import App from "@/App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import DetailView from "../pages/DetailView";


const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <App />,
    },
    {
        path: "/restaurant/:id",
        element: <DetailView />,
    },
]);

export default function Router() {
    return <RouterProvider router={router} />;
}
