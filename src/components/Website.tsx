import React, { useState, useEffect } from 'react';

const ITReimagineBanner: React.FC = () => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = ['Digital Transformation', 'AI-Powered Solutions', 'Intelligent Automation', 'Custom Development', 'Strategic Implementation'];

    useEffect(() => {
        const typeSpeed = isDeleting ? 40 : 100;
        const currentFullText = texts[currentIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (currentText.length < currentFullText.length) {
                    setCurrentText(currentFullText.substring(0, currentText.length + 1));
                } else {
                    // Finished typing, start deleting after delay
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [currentText, currentIndex, isDeleting, texts]);

    return (
        <>
            <style>{`
        /* Modern Font Import */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

        /* Component styles */
        .it-reimagine-banner,
        .it-reimagine-banner * {
          box-sizing: border-box;
        }
        
        .it-reimagine-banner {
          margin: 0;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          overflow-x: hidden;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        .it-reimagine-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .it-reimagine-banner *::selection {
          background-color: rgba(120, 119, 198, 0.3);
          color: #ffffff;
        }

        .info-section {
          height: 100vh;
          min-height: 650px;
          max-height: 800px;
          padding: 20px 20px 20px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          user-select: none;
          overflow: hidden;
        }

        .info-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.6;
          background: linear-gradient(45deg, #7877c6, #ff77c6);
          filter: blur(120px);
          height: 40%;
          width: 60%;
          position: absolute;
          top: -30%;
          left: -50%;
          transform: translate(50%, 50%);
          z-index: -1;
        }

        /* Left part */
        .left-part {
          padding: 20px 0 0;
          overflow: hidden;
        }

        .left-part h1 {
          margin: 0;
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(40px, 8vw, 120px);
          line-height: 0.9;
          font-weight: 700;
          font-style: normal;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }

        .left-part h1 .text {
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          height: clamp(80px, 12vw, 140px);
          font-size: clamp(32px, 6vw, 80px);
        }

        .left-part h1 .d-flex {
          display: flex;
          align-items: center;
        }

        .left-part h1 .char {
          transform: translateY(0);
          transition: transform 0.5s;
          animation: slideUp 0.3s ease-out forwards;
        }

        .typed-cursor {
          display: none !important;
        }

        @keyframes slideUp {
          from {
            transform: translateY(-515px);
          }
          to {
            transform: translateY(0);
          }
        }

        .left-part p {
          width: 90%;
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.6;
          font-family: "Inter", sans-serif;
          letter-spacing: 0.01em;
        }

        .left-part h2 {
          width: 90%;
          margin: 20px 0 0;
          color: #ffffff;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 1.6;
          font-family: "Space Grotesk", sans-serif;
          letter-spacing: 0.01em;
        }

        /* Button */
        .book-link {
          margin: 30px 0 0;
          padding: 14px 28px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 50px;
          font-size: 14px;
          line-height: 1.2;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-family: "Space Grotesk", sans-serif;
          font-weight: 600;
          font-style: normal;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .book-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .book-link .linktext {
          position: relative;
          display: inline-block;
        }

        .book-link .arrow {
          height: 20px;
          width: 20px;
          display: inline-block;
          position: relative;
          transition: transform 0.3s ease;
        }

        .book-link:hover .arrow {
          transform: translateX(4px);
        }

        .book-link .arrow::before {
          content: "→";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: white;
        }

        /* Right part */
        .right-part {
          background-color: transparent;
          height: 450px;
          width: 450px;
          margin: 0;
          display: block;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
        }

        .right-part::before {
          content: "";
          border-radius: 50%;
          opacity: 0.5;
          background: linear-gradient(45deg, #78dbff, #7877c6);
          filter: blur(100px);
          height: 40%;
          width: 60%;
          position: absolute;
          top: 50%;
          right: 20%;
          transform: translate(50%, -50%);
          z-index: -1;
        }

        .right-part .d-flex {
          height: 100%;
          gap: 24px;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          position: relative;
        }

        .main-grid {
          position: relative;
        }

        .box {
          width: calc((100% / 3) - 16px);
          height: calc((100% / 3) - 16px);
          background-color: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #555555;
          font-size: 11px;
          font-style: normal;
          font-weight: 600;
          line-height: 1.2;
          color: #ffffff;
          font-family: "Space Grotesk", sans-serif;
          border-radius: 120px;
          position: absolute;
          animation: 30s infinite;
          text-align: center;
          padding: 8px;
        }

        /* Box animations */
        .box:nth-child(1) {
          left: 0;
          top: 0;
          animation-name: box-1;
        }

        .box:nth-child(2) {
          left: calc(100% / 3);
          top: 0;
          animation-name: box-2;
        }

        .box:nth-child(3) {
          left: calc((100% / 3) * 2);
          top: 0;
          animation-name: box-3;
        }

        .box:nth-child(4) {
          left: 0;
          top: calc(100% / 3);
          animation-name: box-4;
        }

        .box:nth-child(5) {
          left: calc((100% / 3) * 2);
          top: calc(100% / 3);
          animation-name: box-5;
        }

        .box:nth-child(6) {
          left: 0;
          top: calc((100% / 3) * 2);
          animation-name: box-6;
        }

        .box:nth-child(7) {
          left: calc(100% / 3);
          top: calc((100% / 3) * 2);
          animation-name: box-7;
        }

        .box:nth-child(8) {
          left: calc((100% / 3) * 2);
          top: calc((100% / 3) * 2);
          animation-name: box-8;
        }

        /* Keyframes for box animations */
        @keyframes box-1 {
          0%, 90%, 100% {
            left: 0;
            top: 0;
          }
          2.5%, 12.5% {
            left: calc(100% / 3);
          }
          15%, 25% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          27.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
          }
          29.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          31.5%, 33.5% {
            left: calc(100% / 3);
            width: 100%;
          }
          35.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          40%, 50% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: calc(100% / 3);
          }
          65%, 75% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            top: calc(100% / 3);
          }
        }

        @keyframes box-2 {
          0%, 90%, 100% {
            left: calc(100% / 3);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          15%, 17% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          19%, 21% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          23%, 25% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          27.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          65%, 75% {
            left: 0;
            top: calc(100% / 3);
          }
          77.5%, 87.5% {
            left: 0;
            top: 0;
          }
        }

        @keyframes box-3 {
          0%, 90%, 100% {
            left: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
          }
          4.5%, 10.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          6.5%, 8.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          15%, 25% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          52.5%, 62.5% {
            left: 0;
            top: calc(100% / 3);
          }
          65%, 75% {
            left: 0;
            top: 0;
          }
          77.5%, 87.5% {
            left: calc(100% / 3);
            top: 0;
          }
        }

        @keyframes box-4 {
          0%, 90%, 100% {
            top: calc(100% / 3);
          }
          2.5%, 12.5% {
            left: 0;
            top: 0;
          }
          15%, 25% {
            left: calc(100% / 3);
            top: 0;
          }
          27.5%, 37.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          40%, 42%, 48%, 50% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          44%, 46% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          52.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          65%, 75% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-5 {
          0%, 90%, 92%, 98%, 100% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          2.5%, 12.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          40%, 50% {
            left: 0;
            top: calc(100% / 3);
          }
          52.5%, 62.5% {
            left: 0;
            top: 0;
          }
          65%, 75% {
            left: calc(100% / 3);
            top: 0;
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          94%, 96% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
        }

        @keyframes box-6 {
          0%, 90%, 100% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: 0;
            top: calc(100% / 3);
          }
          15%, 25% {
            left: 0;
            top: 0;
          }
          27.5%, 37.5% {
            left: calc(100% / 3);
            top: 0;
          }
          40%, 50% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          52.5%, 54.5%, 60.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          56.5%, 58.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          65%, 75% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-7 {
          0%, 90%, 100% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: 0;
            top: calc(100% / 3);
          }
          27.5%, 37.5% {
            left: 0;
            top: 0;
          }
          40%, 50% {
            left: calc(100% / 3);
            top: 0;
          }
          52.5%, 62.5% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          65%, 67%, 73%, 75% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
          }
          69%, 71% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
          77.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
        }

        @keyframes box-8 {
          0%, 90%, 100% {
            left: calc((100% / 3) * 2);
            top: calc((100% / 3) * 2);
          }
          2.5%, 12.5% {
            left: calc(100% / 3);
            top: calc((100% / 3) * 2);
          }
          15%, 25% {
            left: 0;
            top: calc((100% / 3) * 2);
          }
          27.5%, 37.5% {
            left: 0;
            top: calc(100% / 3);
          }
          40%, 50% {
            left: 0;
            top: 0;
          }
          52.5%, 62.5% {
            left: calc(100% / 3);
            top: 0;
          }
          65%, 75% {
            left: calc((100% / 3) * 2);
            top: 0;
          }
          77.5%, 79.5%, 85.5%, 87.5% {
            left: calc((100% / 3) * 2);
            top: calc(100% / 3);
            width: calc((100% / 3) - 16px);
            border-radius: 100%;
          }
          81.5%, 83.5% {
            left: calc(100% / 3);
            top: calc(100% / 3);
            width: 100%;
          }
        }

        /* Box Text */
        .box span {
          position: relative;
          display: block;
          opacity: 1;
          z-index: 5;
          text-align: center;
          width: 100%;
        }

        /* Box Background-Image */
        .box .bg-img {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 120px;
          overflow: hidden;
        }

        .box .bg-img,
        .box .bg-img img {
          height: 100%;
          width: 100%;
        }

        .box .bg-img img {
          max-width: 100%;
          object-fit: cover;
          object-position: center center;
        }

        /* Hide bg-line completely */
        .bg-line {
          display: none;
        }

        .bg-line img {
          position: relative;
          flex-shrink: 0;
          -webkit-flex-shrink: 0;
          animation: 26s linear infinite;
        }

        .bg-line img:nth-child(1) {
          animation-name: first-text;
        }

        .bg-line img:nth-child(2) {
          animation-name: second-text;
        }

        @keyframes first-text {
          50% {
            transform: translateX(-100%);
            opacity: 1;
          }
          50.05% {
            opacity: 0;
          }
          50.1% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes second-text {
          50% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(-200%);
          }
          0% {
            transform: translateX(0%);
          }
        }

        /* Hide dash circle */
        .bg-dash-circle {
          display: none;
        }

        .bg-dash-circle img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center center;
          animation: circle-rotate 18s linear infinite;
        }

        @keyframes circle-rotate {
          0% {
            transform: rotate(0);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Hide circle line */
        .bg-circle-h-line {
          display: none;
        }

        .bg-circle-h-line img {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: absolute;
          left: 0;
        }

        .bg-circle-h-line img:nth-child(1) {
          top: 0;
          animation: top-ring-move 2.5s linear infinite;
        }

        .bg-circle-h-line img:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        .bg-circle-h-line img:nth-child(3) {
          bottom: 0;
          animation: bottom-ring-move 2.5s linear infinite;
        }

        @keyframes top-ring-move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @keyframes bottom-ring-move {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media screen and (min-width: 1500px) {
          .info-section {
            padding-left: 120px;
          }
        }

        @media screen and (min-width: 1400px) {
          .info-section {
            padding-left: 100px;
          }
        }

        @media screen and (max-width: 1199px) {
          .bg-line {
            height: 68px;
          }
          .right-part {
            height: 400px;
            width: 400px;
          }
          .right-part .d-flex {
            gap: 20px;
          }
          .box {
            height: 118px;
            width: 118px;
            font-size: 12px;
          }
          .left-part p {
            font-size: 14px;
            line-height: 1.8;
            width: 85%;
          }
          .left-part h1 .text {
            height: 132px;
          }
          .bg-dash-circle {
            width: 130px;
          }
          .bg-circle-h-line {
            width: 156px;
            height: 92px;
          }
          .book-link {
            font-size: 48px;
            gap: 24px;
          }
          .book-link .arrow {
            height: 28px;
            width: 28px;
          }
        }

        @media screen and (max-width: 767px) {
          .it-reimagine-banner {
            overflow-x: hidden;
          }
          
          .info-section {
            display: block;
            padding: 0;
            overflow: visible;
            min-height: auto;
            height: auto;
          }
          
          .bg-line {
            height: 52px;
          }
          
          .left-part {
            padding: 40px 16px 60px;
            overflow: visible;
          }
          
          .right-part {
            height: 334px;
            width: 334px;
            margin: 0 auto;
            margin-right: auto;
          }
          
          .left-part h1 .text {
            height: 88px;
          }
          
          .left-part p {
            font-size: 12px;
            width: 96%;
          }
          
          .box {
            height: 96px;
            width: 96px;
            font-size: 10px;
          }
          
          .book-link .arrow {
            height: 24px;
            width: 24px;
          }
          
          .book-link {
            font-size: 42px;
            gap: 20px;
            margin-top: 24px;
          }
          
          .bg-dash-circle {
            width: 80px;
          }
          
          .bg-circle-h-line {
            width: 126px;
            height: 65px;
          }
        }

        /* Features Section */
        .features-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #16213e 0%, #0f0f23 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .features-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.4;
          background: linear-gradient(45deg, #ff77c6, #78dbff);
          filter: blur(120px);
          height: 50%;
          width: 50%;
          position: absolute;
          top: 30%;
          right: -25%;
          z-index: -1;
        }

        .features-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 60px;
          align-items: center;
        }

        .features-content h2 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(50px, 7vw, 100px);
          line-height: 1.1;
          margin: 0 0 40px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .features-content h2 .highlight {
          background: linear-gradient(135deg, #7877c6 0%, #ff77c6 50%, #78dbff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-item {
          padding: 25px 0;
          border-bottom: 1px solid #333;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .feature-text h3 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 20px;
          margin: 0 0 10px;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .feature-text p {
          color: rgba(255, 255, 255, 0.7);
          font-family: "Inter", sans-serif;
          font-size: 15px;
          margin: 0;
          line-height: 1.6;
        }

        /* Testimonials Section */
        .testimonials-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .testimonials-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.5;
          background: linear-gradient(45deg, #7877c6, #78dbff);
          filter: blur(140px);
          height: 60%;
          width: 40%;
          position: absolute;
          top: 50%;
          left: -20%;
          transform: translateY(-50%);
          z-index: -1;
        }

        .testimonials-container {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .testimonials-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(50px, 7vw, 90px);
          line-height: 1.1;
          margin: 0 0 80px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-bottom: 60px;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(120, 119, 198, 0.2);
          border-radius: 24px;
          padding: 40px 30px;
          position: relative;
          backdrop-filter: blur(20px);
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          border-color: rgba(120, 119, 198, 0.4);
          box-shadow: 0 20px 60px rgba(120, 119, 198, 0.2);
        }

        .testimonial-quote {
          color: rgba(255, 255, 255, 0.9);
          font-family: "Inter", sans-serif;
          font-size: 16px;
          line-height: 1.7;
          margin: 0 0 30px;
          font-style: italic;
          font-weight: 400;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #ffffff;
        }

        .author-info h4 {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: 14px;
          margin: 0;
          font-weight: 600;
        }

        .author-info p {
          color: rgba(255, 255, 255, 0.6);
          font-family: "Inter", sans-serif;
          font-size: 12px;
          margin: 5px 0 0;
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 30px;
          background: linear-gradient(135deg, #16213e 0%, #0f0f23 50%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cta-section::before {
          content: "";
          border-radius: 50%;
          opacity: 0.4;
          background: linear-gradient(45deg, #7877c6, #ff77c6);
          filter: blur(160px);
          height: 70%;
          width: 90%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        .cta-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-title {
          color: #fff;
          font-family: "Space Grotesk", sans-serif;
          font-size: clamp(60px, 10vw, 120px);
          line-height: 1.1;
          margin: 0 0 30px;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .cta-subtitle {
          color: rgba(255, 255, 255, 0.8);
          font-family: "Inter", sans-serif;
          font-size: 18px;
          line-height: 1.6;
          margin: 0 0 50px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 18px 40px;
          background: linear-gradient(135deg, #7877c6, #ff77c6);
          color: #ffffff;
          text-decoration: none;
          font-family: "Space Grotesk", sans-serif;
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 50px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(120, 119, 198, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(120, 119, 198, 0.4);
          background: linear-gradient(135deg, #8988d4, #ff88d4);
        }

        .cta-button.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(10px);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        /* Responsive adjustments for new sections */
        @media screen and (max-width: 1199px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 80px 20px;
          }

          .features-container {
            gap: 40px;
          }

          .testimonials-grid {
            gap: 30px;
          }

          .cta-buttons {
            gap: 20px;
          }
        }

        @media screen and (max-width: 767px) {
          .features-section,
          .testimonials-section,
          .cta-section {
            padding: 60px 16px;
          }

          .features-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .testimonial-card {
            padding: 30px 20px;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }

          .cta-button {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

            <div className="it-reimagine-banner">
                <main>
                    <section className="info-section">
                        <div className="left-part">
                            <h1>
                                <span className="d-flex">
                                    {['I', 'T', ' ', 'R', 'e', 'i', 'm', 'a', 'g', 'i', 'n', 'e'].map((char, index) => (
                                        <span key={index} className="char" style={{ animationDelay: `${index * 0.08}s` }}>
                                            {char === ' ' ? '\u00A0' : char}
                                        </span>
                                    ))}
                                </span>
                                <span className="text">{currentText}</span>
                            </h1>
                            <h2>Transforming businesses through innovative technology solutions, AI-powered automation, and strategic digital implementation. We partner with forward-thinking companies to reimagine their digital future.</h2>
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="https://calendly.com/ritepulse/it-reimagine-free-consultation" className="book-link" target="_blank" rel="noopener noreferrer">
                                    <span className="linktext">Book Your Free Consultation</span>
                                    <span className="arrow">
                                        <span></span>
                                    </span>
                                </a>
                                <a href="#contact" className="book-link" style={{ background: 'transparent', border: '2px solid rgba(255,255,255,0.3)' }}>
                                    <span className="linktext">Contact Us</span>
                                    <span className="arrow">
                                        <span></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="right-part">
                            <div className="main-grid d-flex">
                                <div className="box">
                                    <span>Digital Transformation</span>
                                </div>
                                <div className="box">
                                    <div className="bg-img">
                                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=200&h=200&fit=crop&crop=center" alt="AI Technology" />
                                    </div>
                                </div>
                                <div className="box">
                                    <span>AI Automation</span>
                                </div>
                                <div className="box">
                                    <div className="bg-img">
                                        <img src="/src/images/artificial_intelligence.jpg" alt="Machine Learning" />
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="bg-img">
                                        <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&h=200&fit=crop&crop=center" alt="Software Development" />
                                    </div>
                                </div>
                                <div className="box">
                                    <span>Strategic Implementation</span>
                                </div>
                                <div className="box">
                                    <div className="bg-img">
                                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop&crop=center" alt="Data Analytics" />
                                    </div>
                                </div>
                                <div className="box">
                                    <span>Custom Development</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="features-section">
                        <div className="features-container">
                            <div className="features-content">
                                <h2>
                                    Our <span className="highlight">Core</span> Services
                                </h2>
                            </div>
                            <ul className="features-list">
                                <li className="feature-item">
                                    <div className="feature-icon">🚀</div>
                                    <div className="feature-text">
                                        <h3>Digital Transformation Solutions</h3>
                                        <p>Modernize your business processes with cutting-edge technology and strategic digital initiatives that drive growth and efficiency.</p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon">🤖</div>
                                    <div className="feature-text">
                                        <h3>AI-Powered Business Solutions</h3>
                                        <p>Leverage artificial intelligence to automate workflows, enhance decision-making, and unlock new opportunities for your business.</p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon">⚡</div>
                                    <div className="feature-text">
                                        <h3>Intelligent Automation & Development</h3>
                                        <p>Streamline operations with smart automation tools and custom software solutions tailored to your specific business needs.</p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon">📊</div>
                                    <div className="feature-text">
                                        <h3>Digital Strategy & Implementation</h3>
                                        <p>Comprehensive digital roadmaps with hands-on implementation support to ensure successful technology adoption and ROI.</p>
                                    </div>
                                </li>
                                <li className="feature-item">
                                    <div className="feature-icon">💻</div>
                                    <div className="feature-text">
                                        <h3>Custom AI & Software Development</h3>
                                        <p>Bespoke software solutions and AI applications designed from the ground up to solve your unique business challenges.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Client Success Stories */}
                    <section className="testimonials-section">
                        <div className="testimonials-container">
                            <h2 className="testimonials-title">Client Success Stories</h2>
                            <div className="testimonials-grid">
                                <div className="testimonial-card">
                                    <p className="testimonial-quote">
                                        "IT Reimagine transformed our entire business process with their AI automation solutions. We've seen a 300% increase in efficiency and significant cost savings."
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">MJ</div>
                                        <div className="author-info">
                                            <h4>Michael Johnson</h4>
                                            <p>CEO, TechFlow Industries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <p className="testimonial-quote">
                                        "Their custom software development exceeded our expectations. The team delivered a scalable solution that perfectly fits our unique business requirements."
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">SC</div>
                                        <div className="author-info">
                                            <h4>Sarah Chen</h4>
                                            <p>CTO, InnovateLabs</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-card">
                                    <p className="testimonial-quote">
                                        "The digital transformation strategy they implemented helped us modernize our operations and stay competitive in the digital age."
                                    </p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar">RK</div>
                                        <div className="author-info">
                                            <h4>Robert Kim</h4>
                                            <p>Operations Director, GlobalTech</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="cta-section">
                        <div className="cta-container">
                            <h2 className="cta-title">Ready to Transform?</h2>
                            <p className="cta-subtitle">
                                Join forward-thinking companies who have already revolutionized their business with our innovative solutions.
                                Your digital transformation journey starts with a conversation.
                            </p>
                            <div className="cta-buttons">
                                <a href="https://calendly.com/ritepulse/it-reimagine-free-consultation" className="cta-button" target="_blank" rel="noopener noreferrer">
                                    Book Free Consultation
                                </a>
                                <a href="#contact" className="cta-button secondary">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default ITReimagineBanner;