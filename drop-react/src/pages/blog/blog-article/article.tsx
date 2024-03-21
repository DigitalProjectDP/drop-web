import { useEffect, useState } from 'react'
import './style.css'
import { useLocation } from 'react-router';
import Header from '../../../components/header';
import HeaderSpace from '../../../components/header-space';
import { Imagen } from '../../../interfaces/imagen';
import { GetBlogById } from '../../../services/blogService';
import ReactGA from 'react-ga';

export default function BlogArticle() {
    const [blog, setBlog] = useState<Imagen>();

    const { search } = useLocation();
    const id = new URLSearchParams(search).get("id");

    useEffect(() => {
        fetchBlog();
    }, [id]);
    
    const fetchBlog = async () => {
        let vBlog = id? await GetBlogById(Number(id)): undefined;
        setBlog(vBlog);
        ReactGA.pageview(window.location.pathname + "/" + vBlog?.titulo);
    }
    
    const htmlString = () => (
        <div className="blog__descripcion" dangerouslySetInnerHTML={{ __html: blog?.descripcion || 'Holaaaaaaa' }} />
      );

    return (
        <div className="row">
            <Header opacity={true}></Header>
            <HeaderSpace></HeaderSpace>      
            <div className="container-fluid d-flex flex-column  align-items-center  blog__container">
                <h2 className="blog__titulo text-start mb-3 fw-bold w-100">{blog?.titulo}</h2>
                {blog?.subtitulo? <h5 className="blog__subtitulo text-start mb-3">{blog?.subtitulo}</h5>: ''}
                {/* <div className="blog__article__imagen">
                    <img src="https://placehold.co/640x360?text=..." alt="BlogImagen01" width="100%" />
                </div> */}
                {blog?.descripcion? htmlString(): ""}
            </div>       
        </div>
    )
}