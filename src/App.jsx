import React, { useEffect, useState } from 'react'
import {Header, HeroSection, FeaturesSection, StepsSection, TestimonialSection, FAQSection, Footer} from "./Components"
import { ThemeContextProvider } from "./context/themeContext"
import ScrollToTop from './Components/ScrollToTop';

function App() {

  const [themeMode, setThemeMode] = useState("light");
  const changeTheme = (selectedTheme) => setThemeMode(selectedTheme)

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove("light", "dark");
    htmlElement.classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, changeTheme}}>
      <Header />

      <main className="bg-neutral-50 dark:bg-slate-900">
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <TestimonialSection />
        <FAQSection />
      </main>

      <Footer />
      <div className="w-full bg-black text-white text-center font-semibold tracking-wider py-2">Made with ❤️ by <span className="text-[#ff000d]">Prerna Mittal</span></div>


      <ScrollToTop />
    </ThemeContextProvider>
  )
}

export default App