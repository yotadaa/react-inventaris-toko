import { Route, Routes } from "react-router-dom";
import identity from '../../assets/identity';




export default function URLRoute() {
    return (
        <Routes>
            {identity.map((item, index) => (
                <Route key={index} path={item.path} element={<item.element />} />
            ))}
        </Routes>
    )
}