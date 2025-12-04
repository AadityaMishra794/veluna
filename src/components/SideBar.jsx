import { Mail, Instagram, Linkedin } from "lucide-react";

const Sidebar = () => {
  const handleEmail = () => {
    // Try multiple methods for maximum compatibility
    const email = 'veluna.comfort@gmail.com';
    const subject = 'Inquiry from Veluna Website';
    const body = 'Hello Veluna Team,\n\n';
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Method 1: Direct window.location (most reliable)
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // Method 2: Create temporary link and click it
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.style.display = 'none';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
    }
  };

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <style>{`
        .sidebar {
          position: fixed;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sidebar-item {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(244, 194, 194, 0.35);
          color: #67645D;
        }

        .sidebar-item:hover {
          background: linear-gradient(135deg, #F4C2C2 0%, #f8d6d6 100%);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 6px 30px rgba(244, 194, 194, 0.5);
        }

        .sidebar-item:active {
          transform: scale(0.95);
        }

        @media (max-width: 1024px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>

      <div className="sidebar">
        <div 
          className="sidebar-item" 
          onClick={handleEmail}
          title="Email: veluna.comfort@gmail.com"
        >
          <Mail size={20} />
        </div>
        <div 
          className="sidebar-item" 
          onClick={() => handleClick('https://www.linkedin.com/company/veluna-comfort/')}
          title="Visit our LinkedIn"
        >
          <Linkedin size={20} />
        </div>
        <div 
          className="sidebar-item" 
          onClick={() => handleClick('https://www.instagram.com/veluna.comfort')}
          title="Follow us on Instagram"
        >
          <Instagram size={20} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;