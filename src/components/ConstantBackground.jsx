const BackgroundGraphics = () => {
  return (
    <>
      <style>{`
        .bg-graphics {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          animation: float 20s infinite ease-in-out;
        }

        .shape-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #F4C2C2 0%, #ffe5e5 100%);
          top: -200px;
          right: -100px;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f8d3d3 0%, #F4C2C2 100%);
          bottom: -150px;
          left: 10%;
          animation-delay: 5s;
        }

        .shape-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #fff5f5 0%, #f8dcdc 100%);
          top: 40%;
          left: 5%;
          animation-delay: 10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
      `}</style>

      <div className="bg-graphics">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </>
  );
};
export default BackgroundGraphics;
