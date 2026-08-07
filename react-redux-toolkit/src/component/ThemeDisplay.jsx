import { useSelector, useDispatch } from "react-redux";
import React, { useState } from 'react'
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeDisplay = () => {

    const theme = useSelector((state) => state.theme.mode);
    const dispatch = useDispatch();

    function handleToggle() {
        dispatch(toggleTheme());
    }



   return (
     <div>
       <p>Current mode: {theme}</p>
       <button onClick={handleToggle}>Toggle</button>
     </div>
    )
}
 
export default ThemeDisplay
 