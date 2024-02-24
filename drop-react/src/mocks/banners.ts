import { Imagen } from "../interfaces/imagen";
import Banner001 from "../media/img/banner.jpg";
import BannerVid from "../media/img/home/_banner.mp4";
import BannerVideo from "../media/img/home/banner.gif";

export const MockBanners: Imagen[] = 
[
    {
        id: 1,
        titulo: '',
        subtitulo: '',
        descripcion: '',
        imagenUrl: BannerVid,
        tipoSeccion: {
            id: 1,
            descripcion: 'Banner'
        }
    }
]