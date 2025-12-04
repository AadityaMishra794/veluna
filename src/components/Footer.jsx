const Footer = ({ navigateTo }) => {
  return (
    <>
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300..700;1,300..700&family=Great+Vibes&family=Parisienne&display=swap');
        .footer {
          background: #2d1f17;
          color: rgba(255, 255, 255, 0.8);
          padding: 4rem 2rem 2rem;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .footer-brand h3 {
           font-family: "Cormorant", serif;
          font-size: 1.75rem;
          color: #F4C2C2;
          margin-bottom: 1rem;
        }

        .footer-brand p {
          line-height: 1.7;
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .footer-section h4 {
          font-size: 0.9375rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #F4C2C2;
          letter-spacing: 0.5px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.9375rem;
        }

        .footer-links a:hover {
          color: white;
          padding-left: 5px;
        }

        .footer-bottom {
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          opacity: 0.6;
          font-size: 0.875rem;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>VELUNA</h3>
            <p>Your partner in menstrual wellness. We're here to support you through every phase with care, comfort, and empowerment.</p>
          </div>

          <div className="footer-section">
            <h4>Shop</h4>
            <div className="footer-links">
              <a onClick={() => navigateTo('shop')}>All Products</a>
              <a onClick={() => navigateTo('shop')}>Starter Kits</a>
              <a onClick={() => navigateTo('shop')}>Premium Sets</a>
              <a onClick={() => navigateTo('shop')}>Subscriptions</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <div className="footer-links">
              <a onClick={() => navigateTo('about')}>About Us</a>
              <a onClick={() => navigateTo('journal')}>Journal</a>
              <a>Contact</a>
              <a>Careers</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <div className="footer-links">
              <a>FAQ</a>
              <a>Shipping</a>
              <a>Returns</a>
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Veluna. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
