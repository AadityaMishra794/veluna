// src/components/BlogPage.jsx
import { ArrowRight, PenSquare } from "lucide-react";
import { useState } from "react";

const BlogPage = ({ navigateTo }) => {
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);

  // ✅ Updated to redirect to signup instead of login
  const handleWriteBlogClick = () => {
    navigateTo('signup');
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

        .section {
          padding: 8rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Write Blog Section */
        .write-blog-section {
          max-width: 900px;
          margin: 0 auto 4rem;
          padding: 3rem;
          background: linear-gradient(135deg, #fff7f7 0%, #FFE8E8 100%);
          border-radius: 24px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(244, 194, 194, 0.2);
          transition: all 0.3s ease;
        }

        .write-blog-section:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 50px rgba(244, 194, 194, 0.3);
        }

        .write-blog-title {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: #67645D;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .write-blog-description {
          font-size: 1.0625rem;
          color: #67645D;
          opacity: 0.85;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .write-blog-btn {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: white;
          border: none;
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
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.4);
        }

        .write-blog-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px rgba(244, 194, 194, 0.6);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          padding: 4rem 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 40px rgba(244, 194, 194, 0.25);
        }

        .product-card:hover {
          transform: translateY(-15px);
          box-shadow: 0 25px 60px rgba(244, 194, 194, 0.4);
        }

        .product-image-container {
          height: 300px;
          overflow: hidden;
          background: linear-gradient(135deg, #fff7f7 0%, #F4C2C2 100%);
          position: relative;
        }

        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .product-card:hover .product-img {
          transform: scale(1.08);
        }

        .product-info {
          padding: 2rem;
        }

        .product-info h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #67645D;
        }

        .product-info p {
          font-size: 1rem;
          color: #67645D;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid #F4C2C2;
          color: #67645D;
          padding: 0.875rem 2rem;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-secondary:hover {
          background: #F4C2C2;
          color: white;
          transform: translateX(5px);
        }

        @media (max-width: 1024px) {
          .section {
            padding: 4rem 1.5rem;
          }

          .product-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 2rem 0;
          }

          .write-blog-section {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <>
        <section className="section">

          <div className="product-grid">
            {/* Blog card 1 */}
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop&q=80"
                  alt="Understanding your cycle"
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3>Understanding Your Cycle</h3>
                <p>
                  Learn about the phases of your menstrual cycle and how to support your body.
                </p>
                <button className="btn-secondary">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Blog card 2 */}
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1540206395-68808572332f?w=600&h=400&fit=crop&q=80"
                  alt="Self-care rituals"
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3>Self-Care During Menstruation</h3>
                <p>
                  Discover empowering self-care practices that help you embrace your cycle with confidence.
                </p>
                <button className="btn-secondary">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Blog card 3 */}
            <div className="product-card">
              <div className="product-image-container">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop&q=80"
                  alt="Wellness tips"
                  className="product-img"
                />
              </div>
              <div className="product-info">
                <h3>Wellness Tips for Every Phase</h3>
                <p>
                  Expert advice on nutrition, exercise, and self-care tailored to each phase of your cycle.
                </p>
                <button className="btn-secondary">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Write Blog CTA */}
          <div className="write-blog-section">
            <h2 className="write-blog-title">
              <PenSquare size={32} />
              Share Your Story
            </h2>
            <p className="write-blog-description">
              Have an experience or insight you'd like to share? Write your own blog and inspire others.
            </p>
            <button className="write-blog-btn" onClick={handleWriteBlogClick}>
              Start Writing
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </>
    </>
  );
};

export default BlogPage;
