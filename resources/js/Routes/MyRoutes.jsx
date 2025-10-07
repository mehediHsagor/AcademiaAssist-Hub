
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Pages/Main";
import Signin from "../Pages/SignIn/Signin";

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Signin />} />
        </Routes>
    );
}
