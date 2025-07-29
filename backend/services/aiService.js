const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

const GEMINI_MODEL = 'gemini-2.0-flash'; // Use the latest public model

class AIService {
  async generateComponent(prompt, context = '') {
    if (!genAI) {
      return this.mockComponent(prompt);
    }
    try {
      const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      return {
        success: true,
        data: {
          jsx: text,
          css: '',
          metadata: {}
        }
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      // Fallback to mock response
      return this.mockComponent(prompt, error);
    }
  }

  mockComponent(prompt, error) {
    return {
      success: true,
      data: {
        jsx: `import React, { useState } from 'react';

const MockComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mock-component">
      <h2>Mock Component</h2>
      <p>This is a mock response for: "${prompt}"</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
      ${error ? `<p style={{color: 'red'}}>AI API failed: ${error.message}</p>` : ''}
    </div>
  );
};

export default MockComponent;`,
        css: `.mock-component { padding: 32px; background: #f0f0f0; border-radius: 12px; text-align: center; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
.mock-component button { margin: 8px; padding: 8px 16px; border-radius: 6px; border: none; background: #667eea; color: white; font-weight: 600; cursor: pointer; transition: background 0.2s; }
.mock-component button:hover { background: #5a67d8; }`,
        metadata: {
          componentType: 'functional',
          dependencies: ['react'],
          estimatedTokens: 100,
          prompt: prompt
        }
      }
    };
  }

  async chatWithAI(message, history = []) {
    if (!genAI) {
      return this.mockChat(message);
    }
    try {
      const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });
      let chatPrompt = '';
      if (Array.isArray(history)) {
        for (const msg of history) {
          chatPrompt += `${msg.role === 'user' ? 'User' : 'AI'}: ${msg.content}\n`;
        }
      }
      chatPrompt += `User: ${message}\nAI:`;
      const result = await model.generateContent(chatPrompt);
      const text = result.response.text();
      return {
        success: true,
        data: {
          role: 'assistant',
          content: text,
          timestamp: Date.now()
        }
      };
    } catch (error) {
      console.error('Gemini Chat API Error:', error);
      return this.mockChat(message, error);
    }
  }

  mockChat(message, error) {
    return {
      success: true,
      data: {
        role: 'assistant',
        content: `This is a mock AI chat response for: "${message}"${error ? ` (AI API failed: ${error.message})` : ''}`,
        timestamp: Date.now()
      }
    };
  }

  async refineCode() {
    return {
      success: false,
      message: 'refineCode not implemented for Gemini yet',
      error: 'not_implemented'
    };
  }
}

module.exports = new AIService(); 