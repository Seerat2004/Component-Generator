const express = require('express');
const { protect } = require('../middleware/auth');
const aiService = require('../services/aiService');

const router = express.Router();

// @desc    Generate code with AI
// @route   POST /api/ai/generate
// @access  Private
router.post('/generate', protect, async (req, res) => {
  try {
    const { prompt, context, sessionId } = req.body;

    // Use real AI service for component generation
    const result = await aiService.generateComponent(prompt, context);
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: result.message,
        error: result.error
      });
    }

    res.json({
      success: true,
      data: result.data
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

    // Use real AI service for chat
    const result = await aiService.chatWithAI(message, history);
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: result.message,
        error: result.error
      });
    }

    res.json({
      success: true,
      data: result.data
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

    // Use real AI service for code refinement
    const result = await aiService.refineCode(currentCode, instructions, context);
    
    if (!result.success) {
      return res.status(500).json({
        success: false,
        message: result.message,
        error: result.error
      });
    }

    res.json({
      success: true,
      data: result.data
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