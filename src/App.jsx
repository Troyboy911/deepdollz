import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [glitchText, setGlitchText] = useState('DeepDollz');
  const [currentDoll, setCurrentDoll] = useState(0);

  const dollPreviews = [
    { name: 'Neon Angel', style: 'Cyberpunk Princess' },
    { name: 'Digital Rebel', style: 'Street Tech' },
    { name: 'Hologram Queen', style: 'Future Royalty' },
    { name: 'Chrome Goddess', style: 'Metal Divine' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDoll((prev) => (prev + 1) % dollPreviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGlitch = () => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    let iterations = 0;
    const originalText = 'DeepDollz';
    
    const glitchInterval = setInterval(() => {
      setGlitchText(
        originalText
          .split('')
          .map((char, index) => {
            if (index < iterations) return originalText[index];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );
      
      if (iterations >= originalText.length) {
        clearInterval(glitchInterval);
        setGlitchText(originalText);
      }
      iterations += 1 / 3;
    }, 30);
  };

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="grid-overlay"></div>
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo" onClick={handleGlitch}>
            <span className="logo-text">{glitchText}</span>
            <span className="logo-glow"></span>
          </div>
          <div className="nav-links">
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#create" className="nav-link">Create</a>
            <a href="#about" className="nav-link">About</a>
            <button className="login-btn">
              <span>Login</span>
              <div className="btn-glow"></div>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">Experience the</span>
              <span className="title-highlight">Neon Glow</span>
              <span className="title-line">of AI Dollz</span>
            </h1>
            
            <p className="hero-description">
              Step into the future of digital art. Create, customize, and collect 
              stunning AI-generated Dollz with cyberpunk aesthetics and limitless possibilities.
            </p>

            <div className="hero-actions">
              <button className="cta-primary">
                <span>Start Creating</span>
                <div className="btn-particles"></div>
              </button>
              <button className="cta-secondary">
                <span>Explore Gallery</span>
              </button>
            </div>

            <div className="stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Dollz Created</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Active Artists</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Possibilities</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="doll-showcase">
              <div className="doll-frame">
                <div className="doll-preview">
                  <div className="doll-avatar"></div>
                  <div className="doll-info">
                    <h3>{dollPreviews[currentDoll].name}</h3>
                    <p>{dollPreviews[currentDoll].style}</p>
                  </div>
                </div>
                <div className="frame-glow"></div>
              </div>
              
              <div className="showcase-controls">
                {dollPreviews.map((_, index) => (
                  <button
                    key={index}
                    className={`control-dot ${index === currentDoll ? 'active' : ''}`}
                    onClick={() => setCurrentDoll(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>AI-Powered Creation</h3>
              <p>Advanced neural networks generate unique Dollz based on your preferences and style choices.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Real-time Customization</h3>
              <p>Modify appearance, clothing, and accessories with instant preview and unlimited variations.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Community Gallery</h3>
              <p>Share your creations, discover trending Dollz, and connect with fellow digital artists.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>DeepDollz</h4>
            <p>The future of AI-generated digital art</p>
          </div>
          <div className="footer-section">
            <h4>Create</h4>
            <a href="#generator">Doll Generator</a>
            <a href="#templates">Templates</a>
            <a href="#styles">Style Packs</a>
          </div>
          <div className="footer-section">
            <h4>Community</h4>
            <a href="#gallery">Gallery</a>
            <a href="#artists">Featured Artists</a>
            <a href="#contests">Contests</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#help">Help Center</a>
            <a href="#api">API Docs</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 DeepDollz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}