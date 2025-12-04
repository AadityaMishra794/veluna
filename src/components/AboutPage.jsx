// src/components/AboutPage.jsx

const AboutPage = () => {
  return (
    <>
      <style>{`
        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8rem 2rem 4rem;
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at top left, #ffe8ee 0%, #fff7f7 40%, #fbe2e2 100%);
          animation: heroGradient 18s ease-in-out infinite;
        }

        .page-hero::before,
        .page-hero::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.55;
          pointer-events: none;
        }

        .page-hero::before {
          width: 380px;
          height: 380px;
          background: rgba(244, 194, 194, 0.9);
          top: -80px;
          right: -120px;
        }

        .page-hero::after {
          width: 320px;
          height: 320px;
          background: rgba(255, 214, 230, 0.9);
          bottom: -100px;
          left: -80px;
        }

        @keyframes heroGradient {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 0%; }
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 780px;
        }

        .hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: 1px solid rgba(244, 194, 194, 0.9);
          background: rgba(255, 247, 247, 0.7);
          color: #67645D;
          margin-bottom: 1.4rem;
          backdrop-filter: blur(8px);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .hero-pill::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #F4C2C2;
        }

        .hero-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.55);
        }

        .page-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 4.4rem);
          font-weight: 400;
          letter-spacing: -0.04em;
          margin-bottom: 0.75rem;
          color: #67645D;
        }

        .page-hero h1 span {
          font-weight: 600;
        }

        .page-hero p {
          font-size: 1.1rem;
          color: #67645D;
          opacity: 0.9;
          max-width: 620px;
          margin: 0 auto 1.8rem;
          line-height: 1.8;
        }

        .hero-tags {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          justify-content: center;
        }

        .hero-tag {
          font-size: 0.82rem;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          background: rgba(255, 247, 247, 0.9);
          border: 1px solid rgba(244, 194, 194, 0.7);
          color: #67645D;
          cursor: default;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-tag:hover {
          transform: translateY(-2px);
          background: #F4C2C2;
          color: #67645D;
          box-shadow: 0 8px 22px rgba(244, 194, 194, 0.65);
        }

        .section {
          padding: 8rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .purpose-section {
          background: white;
          padding: 8rem 2rem;
        }

        .purpose-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: 1300px;
          margin: 0 auto;
        }

        .purpose-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(244, 194, 194, 0.35);
          transition: transform 0.6s ease;
        }

        .purpose-image:hover {
          transform: scale(1.02) translateY(-4px);
        }

        .purpose-content h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 400;
          line-height: 1.3;
          margin-bottom: 1.5rem;
          color: #67645D;
        }

        .purpose-content p {
          font-size: 1.0625rem;
          line-height: 1.9;
          color: #67645D;
        }

        @media (max-width: 1024px) {
          .section,
          .purpose-section {
            padding: 4rem 1.5rem;
          }

          .purpose-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 768px) {
          .hero-inner p {
            font-size: 1rem;
          }

          .hero-pill {
            font-size: 0.72rem;
          }
        }
      `}</style>

      <>
        <section className="page-hero">
          <div className="hero-inner">
            <div className="hero-pill">
              VELUNA • comfort, care & hygiene
            </div>
            <h1>
              About <span>Veluna</span>
            </h1>
            <p>
              Care That Comes With Her Cycle — a soft, thoughtful space crafted to honour every phase of menstrual wellness.
            </p>
            <div className="hero-tags">
              <span className="hero-tag">Comfort-first design</span>
              <span className="hero-tag">Cycle-aware care</span>
              <span className="hero-tag">Judgement-free space</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="purpose-grid">
            <div className="purpose-content">
              <h2>Our Mission</h2>
              <p>
                At Veluna, we believe that menstrual wellness should be accessible, comfortable, and empowering. We're dedicated to breaking taboos and creating a supportive community where every woman feels understood and celebrated.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=500&fit=crop&q=80"
              alt="Our mission"
              className="purpose-image"
            />
          </div>
        </section>

        <section className="purpose-section">
          <div className="purpose-grid">
            <img
              src="https://images.unsplash.com/photo-1573461160327-b450ce3d8e7f?w=600&h=500&fit=crop&q=80"
              alt="Our values"
              className="purpose-image"
            />
            <div className="purpose-content">
              <h2>Our Values</h2>
              <p>
                We curate products with care, prioritize sustainability, and champion education around menstrual health. Every product in our kits is chosen with your comfort and wellbeing in mind, ensuring you feel supported every step of the way.
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AboutPage;
