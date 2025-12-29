import './App.css'
import Card from './Components/Card'
import ThemeButton from './Components/ThemeButton'
import { ThemeProvider } from './Context/Theme'
import { useState, useEffect } from 'react'

function App() {
   const [themeMode, setThemeMode] = useState("Light")
   const lightTheme = () =>{
      setThemeMode("Light")
   }

   const darkTheme = () =>{
      setThemeMode("dark")
   }
     
   useEffect(() => {
     document.querySelector('html').classList.remove("light","dark")
     document.querySelector('html').classList.add(themeMode)
   }, [themeMode])
   

  return (
     <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
   <div className="flex flex-wrap  items-center">
                <div className="w-full">
                    <div className=" max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeButton/>  
                    </div>

                    <div className=" max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
     </ThemeProvider>       
  )
}

export default App
