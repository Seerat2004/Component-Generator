const express = require('express');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @desc    Generate code with AI
// @route   POST /api/ai/generate
// @access  Private
router.post('/generate', protect, async (req, res) => {
  try {
    const { prompt, context, sessionId } = req.body;

    // TODO: Integrate with actual LLM API (OpenAI, Anthropic, etc.)
    // For now, return a mock response based on the prompt
    let jsxCode, cssCode;
    
    if (prompt.toLowerCase().includes('navbar') || prompt.toLowerCase().includes('nav') || prompt.toLowerCase().includes('navigation')) {
      jsxCode = `import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="brand-link">
            <h2>YourBrand</h2>
          </Link>
        </div>

        <div className={\`nav-menu \${isMenuOpen ? 'active' : ''}\`}>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/quiz" className="nav-link">Quiz</Link>
          
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="nav-auth">
          <Link to="/signin" className="auth-link signin">Sign In</Link>
          <Link to="/signup" className="auth-link signup">Sign Up</Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;`;
      
      cssCode = `.custom-navbar {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand .brand-link {
  text-decoration: none;
  color: #333;
}

.nav-brand h2 {
  margin: 0;
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  transform: scale(1.1);
}

.nav-auth {
  display: flex;
  gap: 15px;
  align-items: center;
}

.auth-link {
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.auth-link.signin {
  color: #333;
  border: 2px solid transparent;
}

.auth-link.signin:hover {
  border-color: #ff6b9d;
  color: #ff6b9d;
}

.auth-link.signup {
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  color: white;
  border: 2px solid transparent;
}

.auth-link.signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 157, 0.4);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.nav-toggle span {
  width: 25px;
  height: 3px;
  background: linear-gradient(135deg, #ff6b9d, #c44569, #667eea);
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 70px);
    background: white;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 50px;
    transition: left 0.3s ease;
    box-shadow: 2px 0 10px rgba(0,0,0,0.1);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-auth {
    display: none;
  }

  .nav-toggle {
    display: flex;
  }

  .nav-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .nav-toggle.active span:nth-child(2) {
    opacity: 0;
  }

  .nav-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
}`;
    } else if (prompt.toLowerCase().includes('card') || prompt.toLowerCase().includes('profile')) {
      jsxCode = `import React from 'react';

const ProfileCard = ({ name, role, avatar, bio }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={avatar || 'https://via.placeholder.com/80'} alt={name} className="avatar" />
        <div className="user-info">
          <h3 className="name">{name || 'John Doe'}</h3>
          <p className="role">{role || 'Software Developer'}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="bio">{bio || 'Passionate developer creating amazing user experiences.'}</p>
      </div>
      <div className="card-footer">
        <button className="contact-btn">Contact</button>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default ProfileCard;`;
      
      cssCode = `.profile-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  max-width: 320px;
  transition: transform 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  border: 3px solid #f0f0f0;
}

.user-info {
  flex: 1;
}

.name {
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.role {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.card-body {
  margin-bottom: 20px;
}

.bio {
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.card-footer {
  display: flex;
  gap: 12px;
}

.contact-btn, .follow-btn {
  flex: 1;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contact-btn {
  background: #246bfd;
  color: white;
}

.follow-btn {
  background: #f8f9fa;
  color: #333;
  border: 1px solid #e0e0e0;
}

.contact-btn:hover {
  background: #1a5fd8;
}

.follow-btn:hover {
  background: #e9ecef;
}`;
    } else {
      // Default component
      jsxCode = `import React, { useState } from 'react';

const GeneratedComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="generated-component">
      <h2>Generated Component</h2>
      <p>This component was generated based on your request: "${prompt}"</p>
      
      <div className="counter-section">
        <p>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
          className="counter-btn"
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(0)}
          className="reset-btn"
        >
          Reset
        </button>
      </div>
      
      <div className="info-section">
        <p>This is a functional React component with state management.</p>
        <p>You can customize it further based on your needs.</p>
      </div>
    </div>
  );
};

export default GeneratedComponent;`;
      
      cssCode = `.generated-component {
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.generated-component h2 {
  margin: 0 0 16px 0;
  font-size: 28px;
  font-weight: 700;
}

.generated-component p {
  margin: 0 0 12px 0;
  line-height: 1.6;
}

.counter-section {
  margin: 24px 0;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
}

.counter-btn, .reset-btn {
  margin: 0 8px;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.counter-btn {
  background: #4CAF50;
  color: white;
}

.reset-btn {
  background: #f44336;
  color: white;
}

.counter-btn:hover {
  background: #45a049;
  transform: translateY(-2px);
}

.reset-btn:hover {
  background: #da190b;
  transform: translateY(-2px);
}

.info-section {
  margin-top: 20px;
  padding: 16px;
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  border-left: 4px solid #fff;
}`;
    }

    const mockResponse = {
      jsx: jsxCode,
      css: cssCode,
      metadata: {
        componentType: 'functional',
        dependencies: ['react'],
        estimatedTokens: 200,
        prompt: prompt
      }
    };

    res.json({
      success: true,
      data: mockResponse
    });
  } catch (error) {
    console.error('AI generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Chat with AI
// @route   POST /api/ai/chat
// @access  Private
router.post('/chat', protect, async (req, res) => {
  try {
    const { message, sessionId, history } = req.body;

    // TODO: Integrate with actual LLM API
    // For now, return a contextual mock response
    let responseContent = '';
    
    if (message.toLowerCase().includes('navbar') || message.toLowerCase().includes('nav') || message.toLowerCase().includes('navigation')) {
      responseContent = `I've created a beautiful horizontal navbar component for you! It features a white background with pink, purple, and blue gradient accents. The navbar includes Contact, About, Quiz links, a theme toggle icon, and Sign In/Sign Up buttons. It's fully responsive with a mobile hamburger menu and smooth hover animations. The component uses React Router for navigation and includes state management for the mobile menu and theme toggle.`;
    } else if (message.toLowerCase().includes('button') || message.toLowerCase().includes('btn')) {
      responseContent = `I've generated a custom button component for you! It includes hover effects, different variants (primary/secondary), and smooth animations. The component uses React hooks for state management and CSS for styling. You can customize the colors, size, and behavior by modifying the props.`;
    } else if (message.toLowerCase().includes('card') || message.toLowerCase().includes('profile')) {
      responseContent = `I've created a profile card component with a clean, modern design. It includes an avatar, user information, bio section, and action buttons. The component is fully responsive and has hover effects. You can pass props like name, role, avatar URL, and bio to customize it.`;
    } else if (message.toLowerCase().includes('form') || message.toLowerCase().includes('input')) {
      responseContent = `I can help you create a form component! Would you like me to generate a form with validation, different input types, or specific styling? Just let me know what kind of form you need.`;
    } else if (message.toLowerCase().includes('nav') || message.toLowerCase().includes('menu')) {
      responseContent = `I can generate a navigation component for you! Would you like a horizontal navbar, sidebar menu, or mobile-responsive navigation? Let me know your preferences and I'll create it.`;
    } else if (message.toLowerCase().includes('modal') || message.toLowerCase().includes('dialog')) {
      responseContent = `I can create a modal/dialog component for you! Would you like it with a backdrop, different sizes, or specific animations? Just describe what you need.`;
    } else if (message.toLowerCase().includes('table') || message.toLowerCase().includes('list')) {
      responseContent = `I can generate a table or list component! Would you like it with sorting, pagination, or specific styling? Let me know the data structure and I'll create it.`;
    } else {
      responseContent = `I understand you want to create: "${message}". I've generated a React component based on your request. You can see the live preview and code above. Feel free to ask me to refine it or create something else!`;
    }

    const mockResponse = {
      role: 'assistant',
      content: responseContent,
      timestamp: Date.now()
    };

    res.json({
      success: true,
      data: mockResponse
    });
  } catch (error) {
    console.error('AI chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Refine existing code
// @route   POST /api/ai/refine
// @access  Private
router.post('/refine', protect, async (req, res) => {
  try {
    const { currentCode, instructions, context } = req.body;

    // TODO: Integrate with actual LLM API for code refinement
    // For now, provide smart mock refinements based on instructions
    let refinedJsx = currentCode.jsx || '';
    let refinedCss = currentCode.css || '';
    let changes = [];

    if (instructions.toLowerCase().includes('color') || instructions.toLowerCase().includes('theme')) {
      // Add color theming
      refinedCss = refinedCss.replace(/background:\s*[^;]+/g, 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
      refinedCss = refinedCss.replace(/color:\s*[^;]+/g, 'color: white');
      changes.push('Updated color scheme with gradient background');
    }

    if (instructions.toLowerCase().includes('animation') || instructions.toLowerCase().includes('hover')) {
      // Add animations
      refinedCss += `
/* Added animations */
.generated-component, .profile-card, .custom-button {
  transition: all 0.3s ease;
}

.generated-component:hover, .profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}`;
      changes.push('Added hover animations and transitions');
    }

    if (instructions.toLowerCase().includes('responsive') || instructions.toLowerCase().includes('mobile')) {
      // Add responsive design
      refinedCss += `
/* Responsive design */
@media (max-width: 768px) {
  .generated-component, .profile-card {
    padding: 16px;
    margin: 10px;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar {
    margin: 0 auto 12px auto;
  }
}`;
      changes.push('Added responsive design for mobile devices');
    }

    if (instructions.toLowerCase().includes('shadow') || instructions.toLowerCase().includes('depth')) {
      // Enhance shadows
      refinedCss = refinedCss.replace(/box-shadow:\s*[^;]+/g, 'box-shadow: 0 10px 30px rgba(0,0,0,0.15)');
      changes.push('Enhanced shadow effects for better depth');
    }

    if (instructions.toLowerCase().includes('border') || instructions.toLowerCase().includes('radius')) {
      // Update border radius
      refinedCss = refinedCss.replace(/border-radius:\s*[^;]+/g, 'border-radius: 16px');
      changes.push('Updated border radius for modern look');
    }

    if (instructions.toLowerCase().includes('font') || instructions.toLowerCase().includes('text')) {
      // Improve typography
      refinedCss += `
/* Typography improvements */
.generated-component h2, .name {
  font-weight: 800;
  letter-spacing: -0.5px;
}

.generated-component p, .bio {
  line-height: 1.7;
  font-size: 16px;
}`;
      changes.push('Enhanced typography and text styling');
    }

    // If no specific refinements were made, add a general improvement
    if (changes.length === 0) {
      refinedCss += `
/* General improvements */
.generated-component, .profile-card {
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
}`;
      changes.push('Added backdrop filter and subtle border');
    }

    const mockRefinedCode = {
      jsx: refinedJsx,
      css: refinedCss,
      changes: changes
    };

    res.json({
      success: true,
      data: mockRefinedCode
    });
  } catch (error) {
    console.error('AI refine error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router; 