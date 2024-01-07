import BlogPage from "../pages/blog";
import BlogArticle from "../pages/blog/blog-article/article";
import ContactoPage from "../pages/contacto";
import Home from "../pages/home";
import ModeloPage from "../pages/modelo";
import NosotrosPage from "../pages/nosotros";

export const InicioRoute = () => <Home></Home>
export const ModeloRoute = () => <ModeloPage></ModeloPage>
export const ContactoRoute = () => <ContactoPage></ContactoPage>
export const BlogRoute = () => <BlogPage></BlogPage>
export const BlogArticleRoute = () => <BlogArticle></BlogArticle>
export const NosotrosRoute = () => <NosotrosPage></NosotrosPage>