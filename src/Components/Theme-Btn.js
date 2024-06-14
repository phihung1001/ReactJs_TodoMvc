import React, { useContext } from 'react';
import {themes, ThemeContext} from '../Context/Theme-Provider';

const ThemeBtn = (props) => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <button className='btntheme'
      {...props}
      style={{ backgroundColor: theme.background, color: theme.color }}
      onClick={changeTheme}
    >  
    {theme.background === themes.themeDark.background ? 'Sáng' : 'Tối'}
    </button>
  );
};

export default ThemeBtn;
