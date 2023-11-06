import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./routers/MainRouter/MainRouter";
import AuthProvider from "./providers/AuthProvuder/AuthProvider";
import { Toaster } from "react-hot-toast";
import UtilsProvider from "./providers/UtilsProvider/UtilsProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Toaster position="top-right" />
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <UtilsProvider>
                    <RouterProvider router={MainRouter} />
                </UtilsProvider>
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
