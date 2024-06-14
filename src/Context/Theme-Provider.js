import React, { useState , useEffect  } from "react";
export const themes = {
  themeLight: {
    color: "black",
    background: "white",
  }, themeDark: {
    color: "white",
    background: "black",
  }
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  changeTheme: () => null,
});

const ThemeProvider =({children}) => {
  const [theme, setTheme] = useState(themes.themeLight);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === themes.themeDark ? themes.themeLight : themes.themeDark);
  };

  useEffect(() => {
    document.body.style.setProperty('background-color', theme.background, 'important');
  }, [theme]);

    return (
      <ThemeContext.Provider value={{ theme, changeTheme}}>
           {children}
      </ThemeContext.Provider>
    );
}
export default ThemeProvider;
