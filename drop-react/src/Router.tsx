import { HashRouter, Route, Routes } from "react-router-dom";
import { InicioRoute } from "./routes";

export default function Router(){  
    return (
        <HashRouter>           
            <Routes>
                <Route index element={<InicioRoute></InicioRoute>}></Route>
                <Route path="/" element={<InicioRoute></InicioRoute>}></Route>                
                <Route path="/inicio" element={<InicioRoute></InicioRoute>}></Route>
            </Routes>
        </HashRouter>
    )
}