// IMPORT UTILS
import { Routes, Route } from "react-router-dom";

// IMPORT ROUTES
import Home from "../../../routes/Home";
import NotFound404 from "../NotFound404/NotFound404";
import SuperSecretRoute from "../SuperSecretRoute/SuperSecretRoute";

export default function RoutesElement() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* OwO what's this */}
            <Route path="/SuperSecretRoute" element={<SuperSecretRoute/>}/>
            {/* 404 NOT FOUND */}
            <Route path="*" element={<NotFound404/>}/>
        </Routes>
    );
}