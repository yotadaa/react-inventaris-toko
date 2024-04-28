import { Route, Routes } from "react-router-dom";
import identity from '../../assets/nav/identity';
import RegisterPage from "../register";




export default function URLRoute() {
    return (
        <Routes>
            {identity.map((item, index) => (
                <Route key={index} path={item.path} element={<item.element />} />
            ))}
            <Route path='/register' element={<RegisterPage />} />

        </Routes>
    )
}