import { useEffect, useState } from 'react'
import './style.css'
import { useLocation } from 'react-router';
import Header from '../../../components/header';
import HeaderSpace from '../../../components/header-space';
import { Imagen } from '../../../interfaces/imagen';
import { GetBlogById } from '../../../services/blogService';

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
    }
    
    const htmlString = () => (
        <div dangerouslySetInnerHTML={{ __html: blog?.descripcion || 'Holaaaaaaa' }} />
      );

    return (
        <div className="row">
            <Header></Header>
            <HeaderSpace></HeaderSpace>      
            <div className="container-fluid d-flex flex-column p-5 blog__container">
                <h1 className="text-start mb-3">{blog?.titulo}</h1>
                <h3 className="text-start mb-3">{blog?.subtitulo}</h3>                
                {blog?.descripcion? htmlString(): ""}
            </div>       
        </div>
    )
}