import './style.css'
import { useEffect, useState } from 'react';
import { InstagramPost } from '../../../../interfaces/instagramPost';
import { GetAllInstagramPosts } from '../../../../services/instagramService';
import instagramLogo from '../../../../media/logo/instagram_logo.jpg'

export default function HomeInstagram() {
    const [instagramPosts, setInstagramPosts] = useState<InstagramPost[]>();

    useEffect(() => {
        fetchInstagramPosts();
    }, []);

    const fetchInstagramPosts = async () => {
        let vInstagramPosts = await GetAllInstagramPosts();        
        setInstagramPosts(vInstagramPosts.slice(0,6));
    }
    
    const renderInstagramPosts = () => instagramPosts?.map((v, i) => <img className="instagram__card" src={v?.media_url} key={i}/>)
    return (
    <section className="section__instagram d-flex justify-content-center align-items-center flex-column">
        <div className="instagram__header">
            <h1 className="instagram__title">Seguinos en Instagram</h1>
            <a className="d-flex flex-row instagram__link" href="https://www.instagram.com/drop.houses/" target="_blank">
                <img src={instagramLogo} className="instagram__logo" alt="LogoInstragram"/>
                <h3 className="d-flex justify-content-center align-items-center mx-5 text-dark"><strong>drop.houses</strong></h3>
            </a>
        </div>
        <div className="instagram__container">
            {instagramPosts? renderInstagramPosts(): ''}
        </div>
    </section>
    )
}