"use client"
import React, { useEffect, useState, createContext, useContext } from 'react'

type theme = "light" | "dark";
const ThemeContext = createContext<ThemeContextType | null >(null);

type ThemeContextType = {
  theme:theme;
  toggleTheme: () => void;
}

type ThemeContextProviderProps = {
  children: React.ReactNode;
}

export default function ThemeContextProvider({
  children
}:ThemeContextProviderProps) {
  const [theme,setTheme] = useState<"light" | "dark">("light");
    const toggleTheme = () => {
            if(theme ==="light")
            {
                setTheme("dark");
                window.localStorage.setItem("theme","dark");
                document.documentElement.classList.add("dark");
            }else
            {
                setTheme("light");
                window.localStorage.setItem("theme","light");
                document.documentElement.classList.remove("dark");
            }

    };

    useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme') as theme | null;
        if(localTheme){
            setTheme(localTheme);
            if(localTheme==="dark"){
                document.documentElement.classList.add("dark");
            }
        }
        else if (window.matchMedia("(prefers-color-scheme:dark)").matches){
                setTheme("dark");
                document.documentElement.classList.add("dark");
            }
    },[]);
  return <ThemeContext.Provider value={{theme,toggleTheme}}>
    {children}
  </ThemeContext.Provider>
 
}
export function useTheme() {

  const context = useContext(ThemeContext);
  if(context === null ){
    throw new Error("context provider error");
  }
  return context;
}
