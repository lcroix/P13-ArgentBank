import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import SignIn from "../pages/Signin";
import User from "../pages/User";



const RoutesIndex = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/User" element={<User />} />
        </Routes>
    )
}
export default RoutesIndex;