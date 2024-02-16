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
    
    const renderInstagramPosts = () => instagramPosts?.map((v, i) => <a id={"instagramPost_"+i.toString()} key={i} href={v?.permalink} target="_blank" className="">
        {v?.permalink?.includes("reel")?
        <video className="instagram__card" src={v?.media_url} autoPlay muted loop></video>:
        <img className="instagram__card" src={v?.media_url}/>}
    </a>)
    return (
    <section className="section__instagram d-flex justify-content-center align-items-center flex-column mb-5">
        <div className="instagram__header">
            <h3 className="instagram__title">Seguinos en Instagram</h3>
            <a className="d-flex flex-row instagram__link" href="https://www.instagram.com/drop.modular/" target="_blank">
                <img src={instagramLogo} className="instagram__logo" alt="LogoInstragram"/>
                <h3 className="d-flex justify-content-center align-items-center mx-3 text-dark"><strong>drop.modular</strong></h3>
            </a>
        </div>
        <div className="instagram__container">
            {instagramPosts? renderInstagramPosts(): ''}
        </div>
    </section>
    )
}
