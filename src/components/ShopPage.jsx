// src/components/ShopPage.jsx
import React, { useState, useEffect } from "react";
import { ArrowRight, Search } from "lucide-react";
import img4 from "../assets/PREMIUM KIT.png"
import img3 from "../assets/PERIOD CRAVING CHOCOLATES & SNACKS .png"
import img2 from "../assets/PERIOD FRIENDLY BEVERAGES .png"
import img1 from "../assets/PERIOD PAIN RELIFE PRODUCTS .png"
import img5 from "../assets/WELLNESS, CALM  & RELIEF PRODUCTS.png"

const products = [
  {
    id: 1,
    name: "Essential Comfort Kit",
    description:
      "Everything you need for a comfortable period experience with quality products.",
    image:
      img1,
    basePrice: "$45",
    variants: [
      {
        id: "1-1",
        label: "Mini Pack",
        detail: "Light flow essentials for 3–4 days.",
        price: "$25",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "1-2",
        label: "Standard Pack",
        detail: "Balanced kit for a regular cycle.",
        price: "$45",
        image:
          img1,
      },
      {
        id: "1-3",
        label: "Family Pack",
        detail: "Double stock for back-to-back cycles.",
        price: "$70",
        image:
          img2,
      },
    ],
  },
  {
    id: 2,
    name: "Premium Wellness Set",
    description:
      "Complete care package for holistic menstrual wellness and comfort.",
    image:
      img2,
    basePrice: "$75",
    variants: [
      {
        id: "2-1",
        label: "Basic",
        detail: "Core wellness with pads & heat patch.",
        price: "$55",
        image:
          "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "2-2",
        label: "Premium",
        detail: "Adds teas, chocolate & self-care.",
        price: "$75",
        image:
          "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "2-3",
        label: "Luxury",
        detail: "Full pamper kit with extra goodies.",
        price: "$99",
        image:
          "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=300&h=220&fit=crop&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Complete Care Bundle",
    description: "Our most comprehensive wellness solution designed just for you.",
    image:
      img3,
    basePrice: "$95",
    variants: [
      {
        id: "3-1",
        label: "Standard",
        detail: "All-round support for one cycle.",
        price: "$95",
        image:
          "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "3-2",
        label: "Duo Pack",
        detail: "Perfect for two consecutive cycles.",
        price: "$135",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "3-3",
        label: "Family",
        detail: "Shared bundle for 2–3 users.",
        price: "$165",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=220&fit=crop&q=80",
      },
    ],
  },
  {
    id: 4,
    name: "Starter Wellness Kit",
    description:
      "Perfect introduction to menstrual wellness with essential items.",
    image:
      img4,
    basePrice: "$35",
    variants: [
      {
        id: "4-1",
        label: "Teen Starter",
        detail: "Gentle kit for first periods.",
        price: "$25",
        image:
          "https://images.unsplash.com/photo-1528977695568-bd868c07aa29?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "4-2",
        label: "Basic Starter",
        detail: "Daily comfort with a few extras.",
        price: "$35",
        image:
          "https://images.unsplash.com/photo-1602075430599-5e032d478148?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "4-3",
        label: "Plus Starter",
        detail: "Adds teas & small self-care.",
        price: "$45",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=220&fit=crop&q=80",
      },
    ],
  },
  
  
  {
    id: 6,
    name: "Monthly Subscription",
    description: "Never run out with our convenient monthly wellness delivery.",
    image:
      img5,
    basePrice: "$55/mo",
    variants: [
      {
        id: "6-1",
        label: "Light Flow",
        detail: "Curated for lighter cycles.",
        price: "$45/mo",
        image:
          "https://images.unsplash.com/photo-1586942593566-8cdbffa0b3d0?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "6-2",
        label: "Regular Flow",
        detail: "Balanced protection every month.",
        price: "$55/mo",
        image:
          "https://images.unsplash.com/photo-1612204103129-bf88f5178a1e?w=300&h=220&fit=crop&q=80",
      },
      {
        id: "6-3",
        label: "Heavy Flow",
        detail: "Extra pads & support options.",
        price: "$65/mo",
        image:
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=300&h=220&fit=crop&q=80",
      },
    ],
  },
];

const ShopPage = () => {
  const [openProducts, setOpenProducts] = useState({});
  const [searchText, setSearchText] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const placeholders = [
    "Search kits...",
    "Search wellness products...",
    "Search chocolates...",
    "Search sanitary pads...",
    
    
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentPlaceholder = placeholders[placeholderIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPlaceholder.length) {
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setPlaceholderIndex((placeholderIndex + 1) % placeholders.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, placeholderIndex]);

  const toggleVariants = (id) => {
    setOpenProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddVariant = (product, variant) => {
    console.log("Added to cart:", product.name, "-", variant.label);
  };

  return (
    <>
      <style>{`
        .page-hero {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #fff7f7 0%, #F4C2C2 100%);
          text-align: center;
          padding: 8rem 2rem 4rem;
        }

        .page-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 400;
          letter-spacing: -1px;
          margin-bottom: 1rem;
          color: #67645D;
        }

        .page-hero p {
          font-size: 1.25rem;
          color: #67645D;
        }

        /* Search Section */
        .search-section {
          padding: 2rem 2rem 1rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .search-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .search-wrapper {
          position: relative;
          background: white;
          border-radius: 60px;
          box-shadow: 0 8px 30px rgba(244, 194, 194, 0.3);
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .search-wrapper:focus-within {
          box-shadow: 0 12px 40px rgba(244, 194, 194, 0.5);
          transform: translateY(-2px);
        }

        .search-icon {
          position: absolute;
          left: 2rem;
          top: 50%;
          transform: translateY(-50%);
          color: #F4C2C2;
          z-index: 2;
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 1.5rem 2rem 1.5rem 4.5rem;
          border: 2px solid transparent;
          background: transparent;
          font-size: 1.125rem;
          color: #67645D;
          outline: none;
          border-radius: 60px;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .search-input:focus {
          border-color: #F4C2C2;
        }

        .search-input::placeholder {
          color: transparent;
        }

        .animated-placeholder {
          position: absolute;
          left: 4.5rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.125rem;
          color: #67645D;
          opacity: 0.5;
          pointer-events: none;
          white-space: nowrap;
          font-family: 'Inter', sans-serif;
        }

        .search-input:focus ~ .animated-placeholder {
          display: none;
        }

        .typing-cursor {
          display: inline-block;
          width: 2px;
          height: 1.2em;
          background: #F4C2C2;
          margin-left: 2px;
          animation: blink 1s infinite;
          vertical-align: middle;
        }

        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        .section {
          padding: 8rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          padding: 2rem 0;
          max-width: 1400px;
          margin: 0 auto;
          align-items: start;
        }

        .product-card {
          background: white;
          border-radius: 18px;
          overflow: visible;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(244, 194, 194, 0.25);
          display: flex;
          flex-direction: column;
          position: relative;
          height: fit-content;
          z-index: 1;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.4);
          z-index: 10;
        }

        .product-image-container {
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, #fff7f7 0%, #F4C2C2 100%);
          position: relative;
          border-radius: 18px 18px 0 0;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.06);
        }

        .product-info {
          padding: 1.25rem 1.3rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .product-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          color: #67645D;
        }

        .product-info p {
          font-size: 0.9rem;
          color: #67645D;
          margin: 0;
          line-height: 1.5;
          opacity: 0.9;
        }

        .product-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.6rem;
        }

        .product-price {
          font-size: 1.1rem;
          font-weight: 600;
          color: #F4C2C2;
        }

        .btn-secondary {
          background: transparent;
          border: 1.5px solid #F4C2C2;
          color: #67645D;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          white-space: nowrap;
        }

        .btn-secondary:hover {
          background: #F4C2C2;
          color: white;
          transform: translateY(-1px);
        }

        .variant-panel {
          border-top: 1px solid rgba(244, 194, 194, 0.4);
          padding: 0.75rem 1.1rem 1rem;
          background: white;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          border-radius: 0 0 18px 18px;
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.4);
          z-index: 11;
        }

        .variant-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.55rem 0.75rem;
          border-radius: 12px;
          background: #fff7f7;
          box-shadow: 0 2px 8px rgba(244, 194, 194, 0.15);
          gap: 0.75rem;
          transition: all 0.2s ease;
        }

        .variant-row:hover {
          background: #fff0f0;
          transform: translateX(3px);
        }

        .variant-left {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          min-width: 0;
        }

        .variant-thumb {
          width: 50px;
          height: 50px;
          border-radius: 10px;
          object-fit: cover;
          flex-shrink: 0;
        }

        .variant-info {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .variant-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #67645D;
        }

        .variant-caption {
          font-size: 0.78rem;
          color: #67645D;
          opacity: 0.8;
        }

        .variant-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-shrink: 0;
        }

        .variant-price {
          font-size: 0.9rem;
          font-weight: 600;
          color: #F4C2C2;
        }

        .variant-add-btn {
          border-radius: 999px;
          border: 1.5px solid #F4C2C2;
          background: white;
          padding: 0.35rem 0.9rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          color: #67645D;
          transition: all 0.2s ease;
        }

        .variant-add-btn:hover {
          background: #F4C2C2;
          color: white;
        }

        @media (max-width: 1024px) {
          .section {
            padding: 4rem 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr;
          }

          .search-section {
            padding: 1.5rem 1rem;
          }

          .search-input {
            font-size: 1rem;
            padding: 1.25rem 1.5rem 1.25rem 4rem;
          }

          .animated-placeholder {
            font-size: 1rem;
            left: 4rem;
          }

          .search-icon {
            left: 1.5rem;
          }
        }
      `}</style>

      <>
        {/* Search Bar */}
        <div className="search-section">
          <div className="search-container">
            <div className="search-wrapper">
              <Search className="search-icon" size={24} />
              <input
                type="text"
                className="search-input"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              {!searchText && (
                <div className="animated-placeholder">
                  {placeholders[placeholderIndex].substring(0, charIndex)}
                  <span className="typing-cursor"></span>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="section">
          <div className="product-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                </div>

                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="product-meta">
                    <div className="product-price">{product.basePrice}</div>
                    <button
                      className="btn-secondary"
                      onClick={() => toggleVariants(product.id)}
                    >
                      {openProducts[product.id] ? "Close" : "Add to Cart"}
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>

                {openProducts[product.id] && (
                  <div className="variant-panel">
                    {product.variants.map((variant) => (
                      <div className="variant-row" key={variant.id}>
                        <div className="variant-left">
                          <img
                            src={variant.image}
                            alt={variant.label}
                            className="variant-thumb"
                          />
                          <div className="variant-info">
                            <span className="variant-label">{variant.label}</span>
                            {variant.detail && (
                              <span className="variant-caption">
                                {variant.detail}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="variant-actions">
                          <span className="variant-price">{variant.price}</span>
                          <button
                            className="variant-add-btn"
                            onClick={() => handleAddVariant(product, variant)}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </>
    </>
  );
};

export default ShopPage;