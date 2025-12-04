import { ArrowRight, Heart, Star, Package, Droplet, Moon, Smile, Wind } from "lucide-react";
import { useState, useEffect } from "react";
import Product3D from "./Product3D";
import img4 from "../assets/PREMIUM KIT.png"
import img3 from "../assets/PERIOD CRAVING CHOCOLATES & SNACKS .png"
import img2 from "../assets/PERIOD FRIENDLY BEVERAGES .png"
import img1 from "../assets/PERIOD PAIN RELIFE PRODUCTS .png"
const HomePage = ({ navigateTo }) => {
  const [activeTip, setActiveTip] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tips = [
    {
      icon: <Droplet size={40} />,
      title: "Stay Hydrated",
      description: "Drink plenty of water to reduce bloating and help your body flush out toxins naturally.",
      color: "#F4C2C2"
    },
    {
      icon: <Moon size={40} />,
      title: "Prioritize Rest",
      description: "Listen to your body and get adequate sleep. Rest is crucial for managing fatigue during your cycle.",
      color: "#FFB5C5"
    },
    {
      icon: <Smile size={40} />,
      title: "Practice Self-Care",
      description: "Take warm baths, use heating pads, and engage in activities that bring you comfort and joy.",
      color: "#FFA0B4"
    },
    {
      icon: <Wind size={40} />,
      title: "Gentle Movement",
      description: "Light yoga or walking can help ease cramps and improve your mood through natural endorphins.",
      color: "#FF8BA7"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Essential Comfort Kit",
      description: "Everything you need for a comfortable period experience.",
      image: img4,
      price: "$45",
    },
    {
      id: 2,
      name: "Premium Wellness Set",
      description: "Complete care package for holistic menstrual wellness.",
      image: img1,
      price: "$75",
    },
    {
      id: 3,
      name: "Complete Care Bundle",
      description: "Our most comprehensive wellness solution for you.",
      image: img3,
      price: "$95",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        .home-page {
          position: relative;
          z-index: 1;
          opacity: 0;
          animation: pageLoad 0.8s ease forwards;
        }

        @keyframes pageLoad {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          padding: 2rem 2rem 4rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-content h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -1px;
          margin-bottom: 1.5rem;
          color: #67645D;
          animation: fadeInUp 1s ease forwards;
        }

        .hero-content h1 strong {
          font-weight: 600;
          display: block;
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-content p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #67645D;
          margin-bottom: 2.5rem;
          animation: fadeInUp 1s ease 0.2s forwards;
          opacity: 0;
        }

        .cta-primary {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: #67645D;
          border: none;
          padding: 1.25rem 2.5rem;
          font-size: 0.9375rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.45);
          animation: fadeInUp 1s ease 0.4s forwards;
          opacity: 0;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(244, 194, 194, 0.6);
        }

        .hero-visual {
          position: relative;
          height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeIn 1.2s ease 0.3s forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Products Section */
        .products-section {
          padding: 8rem 2rem;
          background: white;
          position: relative;
        }

        .products-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .products-label {
          font-size: 0.875rem;
          letter-spacing: 3px;
          color: #F4C2C2;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .products-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #67645D;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .products-subtitle {
          font-size: 1.125rem;
          color: #67645D;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          max-width: 1400px;
          margin: 0 auto 4rem;
        }

        .product-card-home {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(244, 194, 194, 0.2);
          cursor: pointer;
          position: relative;
        }

        .product-card-home:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 20px 50px rgba(244, 194, 194, 0.4);
        }

        .product-image-home {
          height: 300px;
          overflow: hidden;
          background: linear-gradient(135deg, #fff7f7 0%, #F4C2C2 100%);
          position: relative;
        }

        .product-img-home {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card-home:hover .product-img-home {
          transform: scale(1.1) rotate(2deg);
        }

        .product-badge {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: white;
          color: #F4C2C2;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 15px rgba(244, 194, 194, 0.3);
          opacity: 0;
          transform: translateY(-10px);
          transition: all 0.4s ease;
        }

        .product-card-home:hover .product-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .product-info-home {
          padding: 2rem;
        }

        .product-info-home h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #67645D;
          transition: color 0.3s ease;
        }

        .product-card-home:hover .product-info-home h3 {
          color: #F4C2C2;
        }

        .product-info-home p {
          font-size: 0.9375rem;
          color: #67645D;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .product-price-home {
          font-size: 1.5rem;
          font-weight: 600;
          color: #F4C2C2;
        }

        .view-product-btn {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(-10px);
        }

        .product-card-home:hover .view-product-btn {
          opacity: 1;
          transform: translateX(0);
        }

        .view-product-btn:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(244, 194, 194, 0.4);
        }

        .shop-cta {
          text-align: center;
        }

        .shop-btn {
          background: transparent;
          border: 2px solid #F4C2C2;
          color: #67645D;
          padding: 1.25rem 3rem;
          font-size: 1rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
        }

        .shop-btn:hover {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: white;
          border-color: transparent;
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(244, 194, 194, 0.5);
        }

        /* Tips Section */
        .tips-section {
          padding: 8rem 2rem;
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
          position: relative;
          overflow: hidden;
        }

        .tips-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #F4C2C2, transparent);
        }

        .tips-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .tips-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .tips-label {
          font-size: 0.875rem;
          letter-spacing: 3px;
          color: #F4C2C2;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .tips-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 300;
          color: #67645D;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }

        .tips-subtitle {
          font-size: 1.125rem;
          color: #67645D;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.8;
        }

        .tips-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .tip-card {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          position: relative;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(244, 194, 194, 0.15);
          overflow: hidden;
        }

        .tip-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 0;
          background: var(--card-color, #F4C2C2);
          transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tip-card.active::before {
          height: 100%;
        }

        .tip-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(244, 194, 194, 0.3);
        }

        .tip-card.active {
          background: linear-gradient(135deg, #FFF8F8 0%, white 100%);
          box-shadow: 0 20px 60px rgba(244, 194, 194, 0.35);
          transform: scale(1.02);
        }

        .tip-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tip-card.active .tip-icon {
          background: var(--card-color, #F4C2C2);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .tip-card .tip-icon {
          color: var(--card-color, #F4C2C2);
        }

        .tip-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          color: #67645D;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .tip-content p {
          color: #67645D;
          line-height: 1.8;
          font-size: 1rem;
          opacity: 0.85;
        }

        .tip-number {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-family: 'Playfair Display', serif;
          font-size: 5rem;
          font-weight: 300;
          color: var(--card-color, #F4C2C2);
          opacity: 0.1;
          transition: all 0.5s ease;
        }

        .tip-card.active .tip-number {
          opacity: 0.2;
          transform: scale(1.2);
        }

        .features-section {
          padding: 6rem 2rem;
          background: white;
        }

        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .feature-card {
          text-align: center;
          padding: 2rem;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, #fff7f7 0%, #F4C2C2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F4C2C2;
        }

        .feature-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #67645D;
        }

        .feature-card p {
          color: #67645D;
          line-height: 1.7;
        }

        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            padding: 6rem 2rem 4rem;
          }

          .hero-visual {
            height: 400px;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }

          .tips-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className={`home-page ${isVisible ? 'visible' : ''}`}>
        <section className="hero">
          <div className="hero-content">
            <h1>Veluna <strong>Care That Comes With Her Cycle</strong></h1>
            <p>All your period needs – care, comfort, and nourishment – in one place.</p>
            <button className="cta-primary" onClick={() => navigateTo('shop')}>
              Start Your Journey
              <ArrowRight size={18} />
            </button>
          </div>
          <div className="hero-visual">
            <Product3D />
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="products-section">
          <div className="products-header">
            <div className="products-label">OUR BESTSELLERS</div>
            <h2 className="products-title">Curated Wellness Kits</h2>
            <p className="products-subtitle">
              Discover our most loved products, thoughtfully designed to support your menstrual wellness journey
            </p>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card-home"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="product-image-home">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img-home"
                  />
                  <div className="product-badge">BESTSELLER</div>
                </div>
                <div className="product-info-home">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <div className="product-price-home">{product.price}</div>
                    <button className="view-product-btn" onClick={() => navigateTo('shop')}>
                      View Details
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="shop-cta">
            <button className="shop-btn" onClick={() => navigateTo('shop')}>
              Visit Our Shop
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* Tips Section */}
        <section className="tips-section">
          <div className="tips-container">
            <div className="tips-header">
              <div className="tips-label">Wellness Wisdom</div>
              <h2 className="tips-title">Your Period Care Guide</h2>
              <p className="tips-subtitle">
                Expert tips and gentle reminders to help you feel your best throughout your cycle
              </p>
            </div>

            <div className="tips-grid">
              {tips.map((tip, index) => (
                <div
                  key={index}
                  className={`tip-card ${activeTip === index ? 'active' : ''}`}
                  style={{ '--card-color': tip.color }}
                  onClick={() => setActiveTip(index)}
                  onMouseEnter={() => setActiveTip(index)}
                >
                  <div className="tip-number">0{index + 1}</div>
                  <div className="tip-icon">
                    {tip.icon}
                  </div>
                  <div className="tip-content">
                    <h3>{tip.title}</h3>
                    <p>{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3>Curated with Care</h3>
              <p>Every product is thoughtfully selected to support your wellness journey.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>Premium Quality</h3>
              <p>We only offer the highest quality, safe, and sustainable products.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Package size={32} />
              </div>
              <h3>Delivered to You</h3>
              <p>Convenient doorstep delivery with discreet, eco-friendly packaging.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;