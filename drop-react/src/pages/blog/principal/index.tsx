import { MockBlogs } from '../../../mocks/blogs';
import CardBlog from '../cardBlog';
import './style.css'

export default function BlogPrincipal() {   
    const listInfo = MockBlogs;
    
    const rendermodelos = () => listInfo?.map((v, i) => <CardBlog data={v} key={i}></CardBlog>)
    return (
        <section className="section__blogs">
            <h1 className="blog__title">Bienvenido a nuestro blog</h1>
            <p className="container text__paragraph">
                En esta sección vas a encontrar la información más reciente sobre arquitectura modular, y sobre datos e hitos importantes de Drop
            </p>
            <div className="row">
                {rendermodelos()}
            </div>
        </section>
    )
}
