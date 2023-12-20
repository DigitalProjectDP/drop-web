import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { ContactoRoute, InicioRoute, ModeloRoute } from "./routes";

export default function Router(){  
    return (
        <BrowserRouter>           
            <Routes>
                <Route index element={<InicioRoute></InicioRoute>}></Route>
                <Route path="/" element={<InicioRoute></InicioRoute>}></Route>                
                <Route path="/inicio" element={<InicioRoute></InicioRoute>}></Route>
                <Route path="/modelo" element={<ModeloRoute></ModeloRoute>}></Route>
                <Route path="/contacto" element={<ContactoRoute></ContactoRoute>}></Route>
            </Routes>
        </BrowserRouter>
    )
}