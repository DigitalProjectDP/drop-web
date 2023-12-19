const apiKey = `AIzaSyASy7ZEkkIjP83Y5ZYF7w8bvvnfCmKSumU`;

export const loadMapApi = () => {
    const mapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    //const mapURL = `https://www.google.com/maps/embed/v1/MAP_MODE?key=${apiKey}&parameters`;
    const scripts = document.getElementsByTagName('script');
    for (let index = 0; index < scripts.length; index++) {
        if(scripts[index].src.indexOf(mapURL) === 0){
            return scripts[index];
        }        
    }

    const googleMapScript = document.createElement('script');
    googleMapScript.src = mapURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
}