export const UnauthorizedLogout = async () => {
    
    const logOut = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    logOut();
}