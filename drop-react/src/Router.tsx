import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { BlogArticleRoute, BlogRoute, ContactoRoute, InicioRoute, ModeloRoute, NosotrosRoute } from "./routes";

export default function Router(){  
    return (
        <BrowserRouter basename="https://digitalprojectdp.github.io/drop-web">           
            <Routes>
                <Route index element={<InicioRoute></InicioRoute>}></Route>
                <Route path="/" element={<InicioRoute></InicioRoute>}></Route>                
                <Route path="/inicio" element={<InicioRoute></InicioRoute>}></Route>
                <Route path="/modelo" element={<ModeloRoute></ModeloRoute>}></Route>
                <Route path="/contacto" element={<ContactoRoute></ContactoRoute>}></Route>
                <Route path="/blogs" element={<BlogRoute></BlogRoute>}></Route>
                <Route path="/blog" element={<BlogArticleRoute></BlogArticleRoute>}></Route>
                <Route path="/nosotros" element={<NosotrosRoute></NosotrosRoute>}></Route>
            </Routes>
        </BrowserRouter>
    )
}