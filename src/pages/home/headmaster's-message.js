import React from 'react';
import Dropdiv from '@/components/Dropdiv';

const ChairmanMessage = () => {
  return (
    <div className="message-container">
      <Dropdiv />
      <div className="content-wrapper">
        {/* Left side: Image and Name/Position */}
        <div className="image-section">
          <div className="image-wrapper">
            <img
              src="/hossain-akther.png"
              alt="Chairman"
              className="chairman-image"
            />
          </div>
          <h3 className="chairman-name">Md Hossain Akther</h3>
          <p className="chairman-position">Chairman & CEO</p>
          <div className="decorative-line"></div>
        </div>

        {/* Right side: Chairman's Message */}
        <div className="message-section">
          <h2 className="message-heading">Chairman's Message</h2>
          <div className="message-content">
            <p>
              "Dear Valued Stakeholders, esteemed colleagues, and friends, It is
              with immense pride and gratitude that I address you today as the
              Chairman of this remarkable company. Over the years, we have built
              something truly special, and today, I want to reflect on the journey
              we've undertaken, the milestones we've achieved, and the vision we
              continue to pursue. Our story is one of perseverance, innovation,
              and a relentless pursuit of excellence.
            </p>
            <p>
              From the very beginning, our goal was clear: to create value for our
              customers, our employees, and our shareholders. But beyond that, we
              sought to make a positive impact on the world. Our mission has always
              been centered on innovation—on developing solutions that not only meet
              the needs of today but also anticipate the challenges of tomorrow.
            </p>
            <p>
              We are living in a time of unprecedented change. Technological
              advancements are reshaping industries, economies, and societies at a
              pace never before imagined. In this environment, it is easy to feel
              overwhelmed. However, I see opportunity. The rapid evolution of
              technology presents us with limitless possibilities to grow, adapt,
              and thrive.
            </p>
            {/* Additional paragraphs from the original message */}
          </div>
        </div>
      </div>

      <style jsx>{`
        .message-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%);
        }

        .content-wrapper {
          margin: 50px auto;
          max-width: 1200px;
          display: flex;
          gap: 4rem;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          padding: 3rem;
          position: relative;
          overflow: hidden;
          flex-wrap: wrap;
        }

        .content-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #2563eb, #3b82f6);
        }

        .image-section {
          flex: 0 0 280px;
          text-align: center;
          position: relative;
        }

        .image-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .image-wrapper::after {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid #3b82f6;
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse 2s infinite;
        }

        .chairman-image {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid white;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          transition: transform 0.3s ease;
        }

        .chairman-image:hover {
          transform: scale(1.05);
        }

        .chairman-name {
          font-size: 1.5rem;
          color: #1e3a8a;
          margin: 1rem 0 0.5rem;
          font-weight: 700;
        }

        .chairman-position {
          color: #3b82f6;
          font-size: 1.1rem;
          margin: 0;
          font-weight: 500;
        }

        .decorative-line {
          width: 50px;
          height: 3px;
          background: #3b82f6;
          margin: 1.5rem auto;
        }

        .message-section {
          flex: 1;
          position: relative;
        }

        .message-heading {
          font-size: 2.2rem;
          color: #1e3a8a;
          margin: 0 0 2rem;
          position: relative;
          padding-bottom: 1rem;
        }

        .message-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 80px;
          height: 3px;
          background: #3b82f6;
        }

        .message-content {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #374151;
        }

        .message-content p {
          margin-bottom: 1.5rem;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .content-wrapper {
            flex-direction: column;
            padding: 2rem;
            gap: 2rem;
          }

          .image-section {
            flex: none;
          }

          .chairman-image {
            width: 180px;
            height: 180px;
          }

          .message-heading {
            font-size: 1.8rem;
          }

          .message-content {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .content-wrapper {
            padding: 1.5rem;
          }

          .chairman-image {
            width: 150px;
            height: 150px;
          }

          .message-heading {
            font-size: 1.5rem;
          }

          .message-content {
            font-size: 0.95rem;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default ChairmanMessage;
