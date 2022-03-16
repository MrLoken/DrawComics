const link = document.getElementById("theme-link");
const LIGHT_THEME = "C:/Users/hasan/OneDrive/Рабочий стол/Drawcomics/css/light.css";
const DARK_THEME = "C:/Users/hasan/OneDrive/Рабочий стол/Drawcomics/css/black.css";

const THEME = "THEME";

const GetTheme = () => {
    const theme = localStorage.getItem(THEME);
    if(!theme) return window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
    return theme;
}

const initTheme = () => {
    let theme = GetTheme();
    let currTheme = "";

    if(theme === "dark")
    {
        currTheme = DARK_THEME;
        theme = "dark";
    }
    else
    {    
        currTheme = LIGHT_THEME;
        theme = "light";
    }
    console.log(currTheme);

    link.setAttribute("href", currTheme);
}

const ChangeTheme = () =>
{
    let currTheme = "";
    let theme = GetTheme();
    if(theme === "dark")
    {
        currTheme = LIGHT_THEME;
        theme = "light";
    }
    else
    {    
        currTheme = DARK_THEME;
        theme = "dark";
    }
    link.setAttribute("href", currTheme);
    Save(theme);
}

const Save = (theme) => {
    localStorage.setItem(THEME, theme);
}

initTheme();