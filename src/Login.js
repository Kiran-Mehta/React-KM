export const Login = () => {
    localStorage.setItem("isAuthenticated", true);
}

export const Logout = () => {
    localStorage.setItem("isAuthenticated", false);
}

export const isLogin = () => {
    if (localStorage.getItem("isAuthenticated", true)) {
        return true;
    }

    return false;
}