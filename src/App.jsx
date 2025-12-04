// App.jsx

import { useState } from "react";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
import BackgroundGraphics from "./components/ConstantBackground";
import LoginPage from './components/LoginPage';


// Pages
import HomePage from "./components/Home";
import AboutPage from "./components/AboutPage";
import ShopPage from "./components/ShopPage";
import BlogPage from "./components/BlogPage";
import SignUpPage from "./SignUpPage";


function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          color: #4a3428;
          background: #fdf8f5;
          overflow-x: hidden;
        }

        .app {
          padding-top: 80px;
          position: relative;
        }
      `}</style>

      <div className="app">
        {/* Background Design (floating shapes, etc.) */}
        <BackgroundGraphics />

        {/* Header Navigation */}
        <Header
          currentPage={currentPage}
          navigateTo={navigateTo}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        {/* Social Sidebar */}
        <Sidebar />

        {/* PAGE RENDERING */}
        {currentPage === "home" && <HomePage navigateTo={navigateTo} />}
        {currentPage === "about" && <AboutPage />}
        {currentPage === "shop" && <ShopPage />}
        
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />}
{currentPage === 'signup' && <SignUpPage navigateTo={navigateTo} />}
{currentPage === 'blog' && <BlogPage navigateTo={navigateTo} />}


        {/* Footer */}
        <Footer navigateTo={navigateTo} />
      </div>
    </>
  );
}

export default App;
