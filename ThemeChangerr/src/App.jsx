import { useState , useEffect} from 'react'
import useTheme, {  ThemeProvider } from './Context/Theme'
import './App.css'
import Themebtn from './Component/Themebtn'
import Card from './Component/Card'

function App() {
  const [themeMode , setThemeMode]= useState("Light")
  const lightTheme =()=>{
  setThemeMode("Light");
    
  }

  const  darkTheme=()=>{

    setThemeMode("Dark");
  }
  useEffect(()=>{
   document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
    
  },[themeMode])

  return (
    
       
   <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
    <div className="flex flex-wrap items-center min-h-screen">
                <div className="w-full">
                    <div className="flex justify-end w-full max-w-sm mx-auto mb-4">{ <Themebtn/> }
                        
                    </div>

                    <div className="w-full max-w-sm mx-auto">{ <Card />}
                       
                    </div>
                </div>
            </div>
            </ThemeProvider>    


    
  )
}

export default App
