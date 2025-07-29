const express = require('express');
const Session = require('../models/Session');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @desc    Get all sessions for user
// @route   GET /api/session
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const sessions = await Session.find({ user: req.user._id, isActive: true })
      .sort({ lastModified: -1 });

    res.json({
      success: true,
      count: sessions.length,
      data: sessions
    });
  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get single session
// @route   GET /api/session/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const session = await Session.findOne({
      _id: req.params.id,
      user: req.user._id,
      isActive: true
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Get session error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Create new session
// @route   POST /api/session
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { title, description } = req.body;

    const session = await Session.create({
      user: req.user._id,
      title: title || 'New Session',
      description: description || ''
    });

    res.status(201).json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Create session error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Update session
// @route   PUT /api/session/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  try {
    const { title, description, chatHistory, generatedCode } = req.body;

    let session = await Session.findOne({
      _id: req.params.id,
      user: req.user._id,
      isActive: true
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    // Update fields
    if (title !== undefined) session.title = title;
    if (description !== undefined) session.description = description;
    if (chatHistory !== undefined) session.chatHistory = chatHistory;
    if (generatedCode !== undefined) session.generatedCode = generatedCode;

    session.lastModified = Date.now();
    await session.save();

    res.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Update session error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Delete session
// @route   DELETE /api/session/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  try {
    const session = await Session.findOne({
      _id: req.params.id,
      user: req.user._id,
      isActive: true
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    // Soft delete
    session.isActive = false;
    await session.save();

    res.json({
      success: true,
      message: 'Session deleted successfully'
    });
  } catch (error) {
    console.error('Delete session error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Add chat message to session
// @route   POST /api/session/:id/chat
// @access  Private
router.post('/:id/chat', protect, async (req, res) => {
  try {
    const { role, content } = req.body;

    const session = await Session.findOne({
      _id: req.params.id,
      user: req.user._id,
      isActive: true
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    session.chatHistory.push({
      role,
      content,
      timestamp: Date.now()
    });

    session.lastModified = Date.now();
    await session.save();

    res.json({
      success: true,
      data: session
    });
  } catch (error) {
    console.error('Add chat message error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router; 