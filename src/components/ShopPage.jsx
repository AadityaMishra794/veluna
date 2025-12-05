// src/components/ShopPage.jsx
import React, { useState, useEffect } from "react";
import { Search, ChevronDown, X } from "lucide-react";
import img4 from "../assets/PREMIUM KIT.png";
import img3 from "../assets/PERIOD CRAVING CHOCOLATES & SNACKS .png";
import img2 from "../assets/PERIOD FRIENDLY BEVERAGES .png";
import img1 from "../assets/PERIOD PAIN RELIFE PRODUCTS .png";
import img5 from "../assets/WELLNESS, CALM  & RELIEF PRODUCTS.png";

const products = [
  {
    id: 1,
    name: "Essential Comfort Kit",
    description:
      "Everything you need for a comfortable period experience with quality products.",
    tag: "Bestseller",
    image: img1,
    basePrice: "$45",
    size: "1 Comfort Kit",
    highlights: {
      Flow: "Light–Medium",
      Contents: "Pads, pain relief, teas",
      Usage: "Single cycle",
      Type: "Comfort Kit",
    },
    howToUse:
      "Open the kit at the start of your cycle and use products as per your comfort—heat patch for cramps, beverages for relief, and pads for protection.",
    longDescription:
      "Our Essential Comfort Kit is curated to ease your cycle with trusted, gentle products. From soothing beverages to reliable period care, each item is chosen to support you emotionally and physically through your cycle.",
    media: [
      { type: "image", src: img1, alt: "Essential Comfort Kit main" },
      { type: "image", src: img2, alt: "Comfort kit close-up" },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: img1,
        alt: "How to use Essential Comfort Kit",
      },
    ],
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
        image: img1,
      },
      {
        id: "1-3",
        label: "Family Pack",
        detail: "Double stock for back-to-back cycles.",
        price: "$70",
        image: img2,
      },
    ],
  },
  {
    id: 2,
    name: "Premium Wellness Set",
    description:
      "Complete care package for holistic menstrual wellness and comfort.",
    tag: "Curated",
    image: img2,
    basePrice: "$75",
    size: "1 Premium Kit",
    highlights: {
      Flow: "Medium–Heavy",
      Contents: "Pads, heat patch, teas, self-care",
      Usage: "Single cycle",
      Type: "Premium Kit",
    },
    howToUse:
      "Use the wellness items across your cycle—heat patch for cramps, teas for bloating, and self-care products to unwind.",
    longDescription:
      "The Premium Wellness Set goes beyond basics to bring you rituals of comfort. Each element is chosen to help you slow down, breathe, and experience your cycle with more ease.",
    media: [
      { type: "image", src: img2, alt: "Premium Wellness Set" },
      {
        type: "video",
        src: "https://www.w3schools.com/html/mov_bbb.mp4",
        poster: img2,
        alt: "Premium Wellness Set usage demo",
      },
    ],
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
    tag: "Full care",
    image: img3,
    basePrice: "$95",
    size: "1 Full Bundle",
    highlights: {
      Flow: "All",
      Contents: "Multi-cycle care bundle",
      Usage: "2–3 cycles",
      Type: "Complete Bundle",
    },
    howToUse:
      "Store the products in a cool, dry place and use across cycles as per your needs for comfort, hygiene, and cravings.",
    longDescription:
      "The Complete Care Bundle supports you across multiple cycles with comfort, nourishment, and emotional ease. It’s ideal if you like to stay stocked and prepared.",
    media: [{ type: "image", src: img3, alt: "Complete Care Bundle" }],
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
    tag: "New",
    image: img4,
    basePrice: "$35",
    size: "1 Starter Kit",
    highlights: {
      Flow: "First periods / light",
      Contents: "Gentle period care & comfort",
      Usage: "Single cycle",
      Type: "Starter Kit",
    },
    howToUse:
      "Best for those just beginning their period journey. Use the products as needed to gently support comfort and hygiene.",
    longDescription:
      "The Starter Wellness Kit is designed for younger users or anyone starting their period journey. It meets you with soft, reassuring care and easy-to-use essentials.",
    media: [{ type: "image", src: img4, alt: "Starter Wellness Kit" }],
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
    tag: "Most loved",
    image: img5,
    basePrice: "$55/mo",
    size: "Monthly Plan",
    highlights: {
      Flow: "Custom",
      Contents: "Curated monthly kit",
      Usage: "Billed per month",
      Type: "Subscription",
    },
    howToUse:
      "Pick your flow type and we’ll deliver a fresh kit every month so you never have to worry about last-minute runs.",
    longDescription:
      "Veluna’s Monthly Subscription keeps you covered, month after month. Tell us your flow, and we’ll curate kits that evolve with your needs.",
    media: [{ type: "image", src: img5, alt: "Monthly Subscription Kit" }],
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
  const [cartCounts, setCartCounts] = useState({});
  const [activeProduct, setActiveProduct] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const placeholders = [
    "Search kits...",
    "Search wellness products...",
    "Search chocolates...",
    "Search sanitary pads...",
  ];

  // Typing animation
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentPlaceholder = placeholders[placeholderIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentPlaceholder.length) {
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setPlaceholderIndex((i) => (i + 1) % placeholders.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, placeholderIndex, placeholders]);

  // Reset slider when product changes
  useEffect(() => {
    if (activeProduct) setActiveMediaIndex(0);
  }, [activeProduct]);

  const toggleVariants = (id) => {
    setOpenProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddVariant = (product, variant) => {
    console.log("Added to cart:", product.name, "-", variant.label);
  };

  const incrementCart = (productId) => {
    setCartCounts((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const decrementCart = (productId) => {
    setCartCounts((prev) => {
      const current = prev[productId] || 0;
      const next = current - 1;
      if (next <= 0) {
        const clone = { ...prev };
        delete clone[productId];
        return clone;
      }
      return { ...prev, [productId]: next };
    });
  };

  const filteredProducts = products.filter((p) => {
    if (!searchText.trim()) return true;
    const q = searchText.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const handleNextMedia = () => {
    if (!activeProduct || !activeProduct.media?.length) return;
    setActiveMediaIndex((prev) => (prev + 1) % activeProduct.media.length);
  };

  const handlePrevMedia = () => {
    if (!activeProduct || !activeProduct.media?.length) return;
    setActiveMediaIndex((prev) =>
      (prev - 1 + activeProduct.media.length) % activeProduct.media.length
    );
  };

  return (
    <>
      <style>{`
        /* Search bar */
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
          padding: 4rem 2rem 8rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Grid + cards */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          padding: 1rem 0;
          align-items: start;
        }

        .product-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(244, 194, 194, 0.35);
          transition: all 0.2s ease;
          position: relative;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        .product-card:hover {
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.45);
          transform: translateY(-2px);
        }

        .product-image-container {
          height: 170px;
          background: #fff7f7;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.03);
        }

        .product-tag {
          position: absolute;
          top: 10px;
          left: 10px;
          padding: 0.2rem 0.7rem;
          border-radius: 999px;
          background: rgba(244, 194, 194, 0.16);
          color: #67645D;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .product-body {
          padding: 0.8rem 0.9rem 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .product-name {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          color: #2f2b26;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .product-desc {
          font-size: 0.78rem;
          color: #67645D;
          opacity: 0.9;
          line-height: 1.4;
          min-height: 2.2em;
        }

        .product-meta {
          padding: 0.4rem 0.9rem 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }

        .price-block {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .product-price {
          font-size: 0.98rem;
          font-weight: 700;
          color: #2f2b26;
        }

        .per-pack {
          font-size: 0.75rem;
          color: #67645D;
          opacity: 0.8;
        }

        .add-wrapper {
          min-width: 92px;
          display: flex;
          justify-content: flex-end;
        }

        .add-btn,
        .qty-control {
          border-radius: 10px;
          border: 1px solid #F4C2C2;
          background: #ffffff;
          font-size: 0.78rem;
          font-weight: 700;
          color: #F08FA3;
          padding: 0.35rem 0.9rem;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(244, 194, 194, 0.5);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .add-btn:hover {
          background: #F4C2C2;
          color: #ffffff;
          transform: translateY(-1px);
        }

        .qty-control {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
        }

        .qty-btn {
          border: none;
          background: transparent;
          font-size: 1rem;
          cursor: pointer;
          padding: 0;
          width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #F08FA3;
        }

        .qty-count {
          font-size: 0.8rem;
          font-weight: 700;
          color: #2f2b26;
          min-width: 10px;
          text-align: center;
        }

        .variant-toggle {
          padding: 0 0.9rem 0.6rem;
        }

        .variant-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.78rem;
          color: #F08FA3;
          background: transparent;
          border: none;
          cursor: pointer;
          font-weight: 600;
          padding: 0;
        }

        .variant-panel {
          padding: 0.6rem 0.9rem 0.9rem;
          border-top: 1px solid rgba(244, 194, 194, 0.35);
          background: #fffafa;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .variant-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
  padding: 0.55rem 0.65rem;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(244, 194, 194, 0.2);
  flex-wrap: wrap;
}

.variant-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
  flex: 1;
  min-width: 150px;
}

.variant-thumb {
  width: 46px;
  height: 46px;
  border-radius: 9px;
  object-fit: cover;
  flex-shrink: 0;
}

.variant-info {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-width: 0;
  flex: 1;
}

.variant-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: #2f2b26;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.variant-caption {
  font-size: 0.72rem;
  color: #67645D;
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.variant-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  margin-left: auto;
}

.variant-price {
  font-size: 0.8rem;
  font-weight: 600;
  color: #F08FA3;
  white-space: nowrap;
}

.variant-add-btn {
  border-radius: 999px;
  border: 1px solid #F4C2C2;
  background: #ffffff;
  padding: 0.25rem 0.85rem;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  color: #F08FA3;
  transition: all 0.2s ease;
  white-space: nowrap;
}

        .variant-add-btn:hover {
          background: #F4C2C2;
          color: #ffffff;
        }

        /* ---------- MOBILE RESPONSIVE TWEAKS ---------- */

        @media (max-width: 768px) {
          .search-section {
            padding: 1.5rem 1rem 0.75rem;
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

          .section {
            padding: 2.5rem 1rem 6rem;
          }

          .product-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }

          .product-image-container {
            height: 155px;
          }

          .product-body {
            padding: 0.65rem 0.7rem 0.35rem;
          }

          .product-meta {
            padding: 0.3rem 0.7rem 0.6rem;
          }

          .product-name {
            font-size: 0.9rem;
          }

          .product-desc {
            font-size: 0.73rem;
          }

          .product-price {
            font-size: 0.9rem;
          }

          .per-pack {
            font-size: 0.7rem;
          }

          .add-wrapper {
            min-width: auto;
          }

          .add-btn,
          .qty-control {
            padding: 0.28rem 0.6rem;
            font-size: 0.72rem;
            box-shadow: 0 2px 7px rgba(244, 194, 194, 0.5);
          }
            .variant-toggle {
    padding: 0 0.7rem 0.5rem;
  }

  .variant-toggle-btn {
    font-size: 0.75rem;
  }

  .variant-panel {
    padding: 0.5rem 0.7rem 0.7rem;
  }

  .variant-row {
    padding: 0.5rem 0.6rem;
    gap: 0.5rem;
  }

  .variant-left {
    min-width: 120px;
  }

  .variant-thumb {
    width: 42px;
    height: 42px;
  }

  .variant-label {
    font-size: 0.78rem;
  }

  .variant-caption {
    font-size: 0.7rem;
  }

  .variant-price {
    font-size: 0.78rem;
  }

  .variant-add-btn {
    padding: 0.22rem 0.75rem;
    font-size: 0.72rem;
  }
        }

        /* Extra tightening for very small screens like Galaxy S5 (~360px) */
       @media (max-width: 400px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.7rem;
  }

  .product-image-container {
    height: 135px;
  }

  .product-name {
    font-size: 0.82rem;
  }

  .product-desc {
    font-size: 0.7rem;
  }

  .product-meta {
    gap: 0.3rem;
    flex-wrap: wrap;
  }

  .product-price {
    font-size: 0.86rem;
  }

  .variant-row {
    padding: 0.4rem 0.5rem;
    gap: 0.4rem;
  }

  .variant-left {
    gap: 0.5rem;
    min-width: 100px;
  }

  .variant-thumb {
    width: 38px;
    height: 38px;
  }

  .variant-label {
    font-size: 0.72rem;
  }

  .variant-caption {
    font-size: 0.66rem;
  }

  .variant-price {
    font-size: 0.74rem;
  }

  .variant-add-btn {
    padding: 0.18rem 0.65rem;
    font-size: 0.68rem;
  }

  .variant-actions {
    gap: 0.4rem;
  }
}

        /* ---------- Modal + Slider ---------- */
        .product-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .product-modal {
          background: #ffffff;
          border-radius: 18px;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.25);
        }

        .product-modal-header {
          display: flex;
          justify-content: flex-end;
          padding: 0.75rem 1rem 0.25rem;
          flex-shrink: 0;
        }

        .product-modal-body {
          overflow-y: auto;
          padding-bottom: 0.75rem;
        }

        .product-modal-body::-webkit-scrollbar {
          width: 6px;
        }
        .product-modal-body::-webkit-scrollbar-track {
          background: #fff7f7;
        }
        .product-modal-body::-webkit-scrollbar-thumb {
          background: #F4C2C2;
          border-radius: 999px;
        }

        .modal-close-btn {
          border: none;
          background: transparent;
          cursor: pointer;
          padding: 0.2rem;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #67645D;
        }

        .modal-close-btn:hover {
          background: rgba(244, 194, 194, 0.2);
        }

        .product-modal-content {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);
          gap: 1.5rem;
          padding: 0 1.75rem 1.75rem;
        }

        .modal-media {
          border-radius: 16px;
          border: 1px solid rgba(244, 194, 194, 0.3);
          background: #fff7f7;
          display: flex;
          flex-direction: column;
          padding: 1rem;
          position: relative;
        }

        .modal-media-main {
          position: relative;
          width: 100%;
          padding-top: 80%;
          border-radius: 14px;
          overflow: hidden;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-media-main img,
        .modal-media-main video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .modal-slider-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: none;
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.18);
        }

        .modal-slider-arrow.left {
          left: 6px;
        }

        .modal-slider-arrow.right {
          right: 6px;
        }

        .modal-slider-arrow svg {
          width: 18px;
          height: 18px;
          stroke: #67645D;
        }

        .modal-media-thumbs {
          margin-top: 0.75rem;
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
        }

        .modal-thumb {
          width: 54px;
          height: 54px;
          border-radius: 10px;
          border: 2px solid transparent;
          overflow: hidden;
          flex-shrink: 0;
          background: #ffffff;
          cursor: pointer;
        }

        .modal-thumb.active {
          border-color: #F4C2C2;
        }

        .modal-thumb img,
        .modal-thumb video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-modal-info {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }

        .modal-title {
          font-family: 'Inter', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          color: #2f2b26;
        }

        .modal-tag {
          font-size: 0.8rem;
          color: #F08FA3;
          font-weight: 600;
        }

        .modal-size {
          font-size: 0.82rem;
          color: #67645D;
          opacity: 0.9;
        }

        .modal-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-top: 0.4rem;
        }

        .modal-price-main {
          font-size: 1.25rem;
          font-weight: 700;
          color: #2f2b26;
        }

        .modal-price-sub {
          font-size: 0.85rem;
          color: #67645D;
          opacity: 0.9;
        }

        .modal-desc {
          font-size: 0.88rem;
          color: #67645D;
          line-height: 1.6;
          margin-top: 0.3rem;
        }

        .modal-add-row {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .modal-add-wrapper {
          display: flex;
          justify-content: flex-end;
        }

        .modal-section-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #2f2b26;
          margin-bottom: 0.4rem;
          margin-top: 1.2rem;
        }

        .modal-highlights {
          border-radius: 14px;
          border: 1px solid rgba(244, 194, 194, 0.35);
          padding: 0.75rem 0.9rem;
          background: #fffafa;
          font-size: 0.8rem;
        }

        .modal-highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.4rem 1rem;
        }

        .modal-highlights-item {
          display: flex;
          justify-content: space-between;
          gap: 0.4rem;
        }

        .modal-highlight-label {
          color: #67645D;
          opacity: 0.85;
        }

        .modal-highlight-value {
          color: #2f2b26;
          font-weight: 500;
        }

        .modal-text-block {
          font-size: 0.82rem;
          color: #67645D;
          line-height: 1.7;
          border-radius: 14px;
          border: 1px solid rgba(244, 194, 194, 0.32);
          padding: 0.75rem 0.9rem;
          background: #ffffff;
        }

        .product-modal-footer {
          padding: 0.5rem 1.75rem 1.5rem;
        }

        .modal-more-row {
          margin-top: 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .modal-more-pill {
          font-size: 0.78rem;
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
          border: 1px solid rgba(244, 194, 194, 0.7);
          background: #fff7f7;
          color: #67645D;
          font-weight: 500;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .product-modal {
            max-width: 95vw;
          }
          .product-modal-content {
            grid-template-columns: 1fr;
            padding: 0 1.2rem 1.2rem;
          }
          .product-modal-footer {
            padding: 0.3rem 1.2rem 1.2rem;
          }
        }

        @media (max-width: 600px) {
          .product-modal {
            max-height: 95vh;
          }
        }
      `}</style>

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

      {/* Product Grid */}
      <section className="section">
        <div className="product-grid">
          {filteredProducts.map((product) => {
            const count = cartCounts[product.id] || 0;

            return (
              <div
                className="product-card"
                key={product.id}
                onClick={() => setActiveProduct(product)}
              >
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-img"
                  />
                  {product.tag && (
                    <div className="product-tag">{product.tag}</div>
                  )}
                </div>

                <div className="product-body">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.description}</p>
                </div>

                <div className="product-meta">
                  <div className="price-block">
                    <span className="product-price">{product.basePrice}</span>
                    <span className="per-pack">per curated kit</span>
                  </div>

                  <div className="add-wrapper">
                    {count === 0 ? (
                      <button
                        className="add-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          incrementCart(product.id);
                        }}
                      >
                        ADD
                      </button>
                    ) : (
                      <div
                        className="qty-control"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          className="qty-btn"
                          onClick={() => decrementCart(product.id)}
                        >
                          –
                        </button>
                        <span className="qty-count">{count}</span>
                        <button
                          className="qty-btn"
                          onClick={() => incrementCart(product.id)}
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Variants toggle */}
                <div
                  className="variant-toggle"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="variant-toggle-btn"
                    onClick={() => toggleVariants(product.id)}
                  >
                    {openProducts[product.id]
                      ? "Hide kit options"
                      : "View kit options"}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: openProducts[product.id]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </button>
                </div>

                {/* Variants panel */}
                {openProducts[product.id] && (
                  <div
                    className="variant-panel"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {product.variants.map((variant) => (
                      <div className="variant-row" key={variant.id}>
                        <div className="variant-left">
                          <img
                            src={variant.image}
                            alt={variant.label}
                            className="variant-thumb"
                          />
                          <div className="variant-info">
                            <span className="variant-label">
                              {variant.label}
                            </span>
                            {variant.detail && (
                              <span className="variant-caption">
                                {variant.detail}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="variant-actions">
                          <span className="variant-price">
                            {variant.price}
                          </span>
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
            );
          })}
        </div>
      </section>

      {/* Product Modal */}
      {activeProduct && (
        <div
          className="product-modal-backdrop"
          onClick={() => setActiveProduct(null)}
        >
          <div
            className="product-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="product-modal-header">
              <button
                className="modal-close-btn"
                onClick={() => setActiveProduct(null)}
              >
                <X size={20} />
              </button>
            </div>

            <div className="product-modal-body">
              <div className="product-modal-content">
                {/* Media slider */}
                <div className="modal-media">
                  <div className="modal-media-main">
                    {(() => {
                      const mediaArr = activeProduct.media;
                      const mediaItem =
                        mediaArr && mediaArr.length
                          ? mediaArr[activeMediaIndex]
                          : { type: "image", src: activeProduct.image };

                      if (mediaItem.type === "video") {
                        return (
                          <video
                            src={mediaItem.src}
                            poster={mediaItem.poster}
                            controls
                          />
                        );
                      }
                      return (
                        <img
                          src={mediaItem.src}
                          alt={mediaItem.alt || activeProduct.name}
                        />
                      );
                    })()}

                    {activeProduct.media && activeProduct.media.length > 1 && (
                      <>
                        <button
                          className="modal-slider-arrow left"
                          onClick={handlePrevMedia}
                        >
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M15 18l-6-6 6-6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          className="modal-slider-arrow right"
                          onClick={handleNextMedia}
                        >
                          <svg viewBox="0 0 24 24">
                            <path
                              d="M9 6l6 6-6 6"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {activeProduct.media && activeProduct.media.length > 0 && (
                    <div className="modal-media-thumbs">
                      {activeProduct.media.map((m, idx) => (
                        <button
                          key={idx}
                          className={
                            "modal-thumb" +
                            (idx === activeMediaIndex ? " active" : "")
                          }
                          onClick={() => setActiveMediaIndex(idx)}
                        >
                          {m.type === "video" ? (
                            <img
                              src={m.poster || activeProduct.image}
                              alt={m.alt || "video"}
                            />
                          ) : (
                            <img
                              src={m.src}
                              alt={m.alt || "image"}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Info side */}
                <div className="product-modal-info">
                  {activeProduct.tag && (
                    <div className="modal-tag">{activeProduct.tag}</div>
                  )}
                  <h2 className="modal-title">{activeProduct.name}</h2>
                  {activeProduct.size && (
                    <div className="modal-size">{activeProduct.size}</div>
                  )}

                  <div className="modal-price-row">
                    <span className="modal-price-main">
                      {activeProduct.basePrice}
                    </span>
                    <span className="modal-price-sub">
                      Inclusive of curated items
                    </span>
                  </div>

                  <p className="modal-desc">{activeProduct.description}</p>

                  <div className="modal-add-row">
                    <div>
                      <span className="modal-section-title">
                        Comfort, care & hygiene
                      </span>
                    </div>
                    <div className="modal-add-wrapper">
                      {(() => {
                        const count = cartCounts[activeProduct.id] || 0;
                        if (count === 0) {
                          return (
                            <button
                              className="add-btn"
                              onClick={() =>
                                incrementCart(activeProduct.id)
                              }
                            >
                              ADD
                            </button>
                          );
                        }
                        return (
                          <div className="qty-control">
                            <button
                              className="qty-btn"
                              onClick={() =>
                                decrementCart(activeProduct.id)
                              }
                            >
                              –
                            </button>
                            <span className="qty-count">{count}</span>
                            <button
                              className="qty-btn"
                              onClick={() =>
                                incrementCart(activeProduct.id)
                              }
                            >
                              +
                            </button>
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {activeProduct.variants?.length > 0 && (
                    <>
                      <div className="modal-section-title">
                        Available kit options
                      </div>
                      <div className="modal-highlights">
                        {activeProduct.variants.map((v) => (
                          <div
                            key={v.id}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              gap: "0.5rem",
                              padding: "0.25rem 0",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "0.8rem",
                                color: "#2f2b26",
                              }}
                            >
                              {v.label}
                            </span>
                            <span
                              style={{
                                fontSize: "0.8rem",
                                fontWeight: 600,
                                color: "#F08FA3",
                              }}
                            >
                              {v.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Footer / Info blocks */}
              <div className="product-modal-footer">
                {activeProduct.highlights && (
                  <>
                    <div className="modal-section-title">Highlights</div>
                    <div className="modal-highlights">
                      <div className="modal-highlights-grid">
                        {Object.entries(activeProduct.highlights).map(
                          ([label, value]) => (
                            <div
                              key={label}
                              className="modal-highlights-item"
                            >
                              <span className="modal-highlight-label">
                                {label}
                              </span>
                              <span className="modal-highlight-value">
                                {value}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

                {activeProduct.howToUse && (
                  <>
                    <div className="modal-section-title">How to Use</div>
                    <div className="modal-text-block">
                      {activeProduct.howToUse}
                    </div>
                  </>
                )}

                {activeProduct.longDescription && (
                  <>
                    <div className="modal-section-title">Description</div>
                    <div className="modal-text-block">
                      {activeProduct.longDescription}
                    </div>
                  </>
                )}

                <div className="modal-more-row">
                  <button className="modal-more-pill">
                    Explore more Veluna kits
                  </button>
                  <button className="modal-more-pill">
                    View similar wellness packs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopPage;
