import { ParametroConfiguracion } from "../../interfaces/parametroconfiguracion";
import { GetAllParametros } from "../../services/parametroService";
import { ClaveValor } from "../../interfaces/claveValor";

export const SetParameters = async () => {
  let root: any = document.querySelector(':root');
  var rootStyles = getComputedStyle(root!);

  let firstColor = '#000000';
  let secondColor = '#bf345d';
  let thirdColor = '#d696a8';
  let fourthColor = '#115778';
  let fifthColor = '#7b7b84';
  let bgColor = '#FFFFFF';
  let logoHeader = '/static/media/Mateicos-48.b55486906fe20fa7bfe0.png';
  let logoFooter = '/static/media/Mateicos-45.9feed3e0ab85f3d03583.png';
  let nombre = 'Drop';
  let correo = 'ventas@dropmodular.com;gestion@dropmodular.com;maximiliano_hermosilla@hotmail.com';
  let instagram = 'https://www.instagram.com/drop.modular/';
  let whatsapp = '1132357543';
  let telefono = '1132357543';
  
  const getParametrosConfiguracion = async () => {
    let parametros: ClaveValor[] = localStorage.getItem("parametros") ? JSON.parse(localStorage.getItem("parametros")!) : undefined;
    
    parametros = await GetAllParametros();
    let parametro: ParametroConfiguracion = {};      
    parametro.firstColor = parametros?.find(p => p.clave == 'FirstColor')?.valor || firstColor;
    parametro.secondColor = parametros?.find(p => p.clave == 'SecondColor')?.valor || secondColor;
    parametro.thirdColor = parametros?.find(p => p.clave == 'ThirdColor')?.valor || thirdColor;
    parametro.fourthColor = parametros?.find(p => p.clave == 'FourthColor')?.valor || fourthColor;
    parametro.fifthColor = parametros?.find(p => p.clave == 'FifthColor')?.valor || fifthColor;
    parametro.bgColor = parametros?.find(p => p.clave == 'BackgroundColor')?.valor || bgColor;
    parametro.logoHeader = parametros?.find(p => p.clave == 'LogoHeader')?.valor || logoHeader;
    parametro.logoFooter = parametros?.find(p => p.clave == 'LogoFooter')?.valor || logoFooter;
    parametro.nombre = parametros?.find(p => p.clave == 'Nombre')?.valor || nombre;
    parametro.correo = parametros?.find(p => p.clave == 'Correo')?.valor || correo;
    parametro.instagram = parametros?.find(p => p.clave == 'Instagram')?.valor || instagram;
    parametro.whatsapp = parametros?.find(p => p.clave == 'Whatstapp')?.valor || whatsapp;
    parametro.telefono = parametros?.find(p => p.clave == 'Telefono')?.valor || telefono;
    
    localStorage.setItem("parametros", JSON.stringify(parametro));

    root?.style.setProperty('--first-color', parametro.firstColor);
    root?.style.setProperty('--second-color', parametro.secondColor);
    root?.style.setProperty('--third-color', parametro.thirdColor);
    root?.style.setProperty('--fourth-color', parametro.fourthColor);
    root?.style.setProperty('--fifth-color', parametro.fifthColor);
    root?.style.setProperty('--background-color', parametro.bgColor);    
  }
  
  await getParametrosConfiguracion();
}