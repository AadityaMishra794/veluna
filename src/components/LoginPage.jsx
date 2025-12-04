// src/components/LoginPage.jsx
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

const LoginPage = ({ navigateTo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Add your login logic here
  };

  const handleGoogleLogin = () => {
    console.log("Google login");
    // Add Google OAuth logic here
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login");
    // Add Facebook OAuth logic here
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');

        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE8E8 100%);
          padding: 2rem;
        }

        .auth-container {
          background: white;
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(244, 194, 194, 0.3);
          overflow: hidden;
          max-width: 450px;
          width: 100%;
          animation: fadeInUp 0.6s ease;
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

        .auth-header {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          padding: 3rem 2rem;
          text-align: center;
        }

        .auth-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .auth-header p {
          color: white;
          opacity: 0.95;
          font-size: 1.0625rem;
        }

        .auth-form {
          padding: 2.5rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #67645D;
          font-weight: 500;
          font-size: 0.9375rem;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 1.25rem;
          top: 50%;
          transform: translateY(-50%);
          color: #F4C2C2;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3.5rem;
          border: 2px solid #f0f0f0;
          border-radius: 12px;
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
        }

        .form-input:focus {
          outline: none;
          border-color: #F4C2C2;
          box-shadow: 0 0 0 3px rgba(244, 194, 194, 0.1);
        }

        .forgot-password {
          text-align: right;
          margin-top: 0.5rem;
        }

        .forgot-password a {
          color: #F4C2C2;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
        }

        .forgot-password a:hover {
          text-decoration: underline;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: white;
          border: none;
          padding: 1.25rem;
          font-size: 1rem;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          box-shadow: 0 10px 30px rgba(244, 194, 194, 0.4);
          margin-top: 1.5rem;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(244, 194, 194, 0.5);
        }

        .divider {
          display: flex;
          align-items: center;
          margin: 2rem 0;
          color: #67645D;
          opacity: 0.6;
          font-size: 0.875rem;
        }

        .divider::before,
        .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: #e0e0e0;
        }

        .divider span {
          padding: 0 1rem;
        }

        .social-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-btn {
          width: 100%;
          padding: 1rem;
          border: 2px solid #f0f0f0;
          background: white;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9375rem;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: #67645D;
        }

        .social-btn:hover {
          border-color: #F4C2C2;
          background: #fff7f7;
          transform: translateY(-2px);
        }

        .social-btn img {
          width: 20px;
          height: 20px;
        }

        .auth-footer {
          text-align: center;
          padding: 1.5rem;
          background: #fafafa;
          color: #67645D;
          font-size: 0.9375rem;
        }

        .auth-footer a {
          color: #F4C2C2;
          text-decoration: none;
          font-weight: 600;
          cursor: pointer;
        }

        .auth-footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .auth-container {
            margin: 1rem;
          }

          .auth-header {
            padding: 2rem 1.5rem;
          }

          .auth-form {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <div className="auth-page">
        <div className="auth-container">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue your wellness journey</p>
          </div>

          <div className="auth-form">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={20} />
                <input
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={20} />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-password">
                <a>Forgot Password?</a>
              </div>
            </div>

            <button className="submit-btn" onClick={handleLogin}>
              Sign In
              <ArrowRight size={18} />
            </button>

            <div className="divider">
              <span>OR CONTINUE WITH</span>
            </div>

            <div className="social-buttons">
              <button className="social-btn" onClick={handleGoogleLogin}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                  <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
                  <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                  <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              <button className="social-btn" onClick={handleFacebookLogin}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="#1877F2"/>
                </svg>
                Continue with Facebook
              </button>
            </div>
          </div>

          <div className="auth-footer">
            Don't have an account? <a onClick={() => navigateTo('signup')}>Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;