import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import logo from '../assets/logo.png';

// Header Component
const Header = ({ currentPage, navigateTo, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 247, 247, 0.95);
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          padding: 1.25rem 0;
        }

        .header.scrolled {
          background: rgba(255, 247, 247, 0.98);
          box-shadow: 0 4px 30px rgba(244, 194, 194, 0.35);
          padding: 1rem 0;
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
        }

        .logo-image {
          max-height: 65px;
          width: auto;
          object-fit: contain;
          display: block;
          margin-top: -4px;
          margin-left: 10px;
          transform: scale(1.15);
        }

        .logo-section:hover .logo-image {
          transform: rotate(5deg) scale(1.05);
        }

        .logo-text {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #67645D;
          font-size: 0.9375rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          position: relative;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #F4C2C2, #f8d6d6);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #F4C2C2;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.625rem;
          transition: all 0.3s ease;
          color: #67645D;
          border-radius: 50%;
        }

        .icon-btn:hover {
          background: rgba(244, 194, 194, 0.2);
          transform: translateY(-2px);
        }

        .menu-btn {
          display: none;
        }

        @media (max-width: 1024px) {
          .menu-btn {
            display: block;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0.5rem;
            color: #67645D;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 350px;
            height: 100vh;
            background: #fff7f7;
            flex-direction: column;
            padding: 6rem 2rem;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
            transition: right 0.4s ease;
            align-items: flex-start;
            gap: 2rem;
            z-index: 999;
          }

          .nav-links.open {
            right: 0;
          }

          .nav-links a {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0 1.5rem;
          }

          @media (max-width: 768px) {
            .logo-image {
              max-height: 55px;
              transform: scale(1.1);
              margin-left: 6px;
            }
          }

          .logo-text {
            font-size: 1.5rem;
          }
        }
      `}</style>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section" onClick={() => navigateTo('home')}>
            <img src={logo} alt="Veluna Logo" className="logo-image" />
          </div>

          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <a
              className={currentPage === 'home' ? 'active' : ''}
              onClick={() => navigateTo('home')}
            >
              Home
            </a>
            <a
              className={currentPage === 'about' ? 'active' : ''}
              onClick={() => navigateTo('about')}
            >
              About
            </a>
            <a
              className={currentPage === 'shop' ? 'active' : ''}
              onClick={() => navigateTo('shop')}
            >
              Shop
            </a>
            <a
              className={currentPage === 'blog' ? 'active' : ''}
              onClick={() => navigateTo('blog')}
            >
              Journal
            </a>
          </div>

          <div className="nav-actions">
            {/* 👇 Profile icon → login page */}
            <button
              className="icon-btn"
              onClick={() => navigateTo('login')}
            >
              <User size={20} />
            </button>

            <button className="icon-btn">
              <ShoppingCart size={20} />
            </button>

            <button
              className="menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
