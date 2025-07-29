import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Grid, 
  Stack, 
  Button, 
  Tabs, 
  Tab, 
  TextField,
  CircularProgress,
  Alert,
  IconButton,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import PreviewIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import useAuthStore from '../store/authStore';
import { generateCode, chatWithAI, refineCode } from '../utils/api';

export default function Playground() {
  const [activeTab, setActiveTab] = useState(0);
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [generatedCode, setGeneratedCode] = useState({ jsx: '', css: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId] = useState(`session_${Date.now()}`);
  const chatEndRef = useRef(null);
  const { user } = useAuthStore();

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendPrompt = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      // Add user message to chat
      const userMessage = {
        role: 'user',
        content: prompt,
        timestamp: Date.now()
      };
      setChatHistory(prev => [...prev, userMessage]);

      // Generate code
      const codeResponse = await generateCode({
        prompt,
        context: chatHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n'),
        sessionId
      });

      if (codeResponse.success) {
        setGeneratedCode({
          jsx: codeResponse.data.jsx,
          css: codeResponse.data.css
        });
      }

      // Get AI chat response
      const chatResponse = await chatWithAI({
        message: prompt,
        sessionId,
        history: chatHistory
      });

      if (chatResponse.success) {
        setChatHistory(prev => [...prev, chatResponse.data]);
      }

      setPrompt('');
    } catch (err) {
      setError(err.message || 'Failed to generate code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefineCode = async () => {
    if (!prompt.trim()) return;

    setIsLoading(true);
    setError('');

    try {
      const userMessage = {
        role: 'user',
        content: `Refine: ${prompt}`,
        timestamp: Date.now()
      };
      setChatHistory(prev => [...prev, userMessage]);

      const response = await refineCode({
        currentCode: generatedCode,
        instructions: prompt,
        context: chatHistory.map(msg => `${msg.role}: ${msg.content}`).join('\n')
      });

      if (response.success) {
        setGeneratedCode({
          jsx: response.data.jsx,
          css: response.data.css
        });
      }

      setPrompt('');
    } catch (err) {
      setError(err.message || 'Failed to refine code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = () => {
    const codeToCopy = activeTab === 0 ? generatedCode.jsx : generatedCode.css;
    navigator.clipboard.writeText(codeToCopy);
  };

  const handleDownloadZip = () => {
    // Create a simple download for now
    const content = `// Component.jsx\n${generatedCode.jsx}\n\n// styles.css\n${generatedCode.css}`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-component.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendPrompt();
    }
  };

  return (
    <Box sx={{ width: '100vw', bgcolor: 'background.default', py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h3" align="center" fontWeight={800} gutterBottom sx={{ background: 'linear-gradient(90deg, #8e44ad, #e84393, #246bfd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
            AI Playground
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: 6, fontSize: '1.2rem', maxWidth: 700 }}>
            Start a session, chat with AI, and build your React components here. All your work is saved and can be resumed anytime.
          </Typography>
        </motion.div>

        {error && (
          <Alert severity="error" sx={{ mb: 3, width: '100%', maxWidth: 1200 }}>
            {error}
          </Alert>
        )}

        <Grid container columns={12} spacing={4} justifyContent="center" alignItems="flex-start" sx={{ width: '100%' }}>
          {/* Chat Panel */}
          <Grid sx={{ gridColumn: 'span 4' }}>
            <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minHeight: 600, bgcolor: 'background.paper', mb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <ChatIcon sx={{ color: '#246bfd' }} />
                <Typography fontWeight={700}>Chat with AI</Typography>
                {user && (
                  <Chip 
                    label={`Session: ${sessionId.slice(-8)}`} 
                    size="small" 
                    sx={{ ml: 'auto', fontSize: '0.7rem' }}
                  />
                )}
              </Stack>
              
              {/* Chat History */}
              <Paper 
                variant="outlined" 
                sx={{ 
                  p: 2, 
                  minHeight: 300, 
                  mb: 2, 
                  bgcolor: '#f8f9fa',
                  maxHeight: 400,
                  overflowY: 'auto'
                }}
              >
                {chatHistory.length === 0 ? (
                  <Typography color="text.secondary" align="center">
                    Start a conversation by describing what you want to build...
                  </Typography>
                ) : (
                  <Stack spacing={2}>
                    {chatHistory.map((message, index) => (
                      <Box 
                        key={index}
                        sx={{
                          display: 'flex',
                          justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                          mb: 1
                        }}
                      >
                        <Paper
                          sx={{
                            p: 1.5,
                            maxWidth: '80%',
                            bgcolor: message.role === 'user' ? '#246bfd' : '#fff',
                            color: message.role === 'user' ? '#fff' : 'text.primary',
                            borderRadius: 2
                          }}
                        >
                          <Typography variant="body2">
                            {message.role === 'assistant' && /```/.test(message.content)
                              ? 'Component code successfully constructed! Refer to the code tabs below.'
                              : message.content}
                          </Typography>
                        </Paper>
                      </Box>
                    ))}
                    {isLoading && (
                      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <Paper sx={{ p: 1.5, bgcolor: '#fff', borderRadius: 2 }}>
                          <CircularProgress size={20} />
                        </Paper>
                      </Box>
                    )}
                    <div ref={chatEndRef} />
                  </Stack>
                )}
              </Paper>

              {/* Input Area */}
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  placeholder="Describe your component or ask for refinements..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                />
                <Stack direction="row" spacing={2}>
                  <Button 
                    variant="contained" 
                    onClick={handleSendPrompt}
                    disabled={isLoading || !prompt.trim()}
                    startIcon={isLoading ? <CircularProgress size={16} /> : <SendIcon />}
                    sx={{ 
                      bgcolor: '#246bfd', 
                      color: '#fff', 
                      fontWeight: 700, 
                      borderRadius: 2,
                      flex: 1
                    }}
                  >
                    Generate
                  </Button>
                  <Button 
                    variant="outlined" 
                    onClick={handleRefineCode}
                    disabled={isLoading || !prompt.trim() || (!generatedCode.jsx && !generatedCode.css)}
                    sx={{ 
                      borderColor: '#246bfd', 
                      color: '#246bfd', 
                      fontWeight: 700, 
                      borderRadius: 2
                    }}
                  >
                    Refine
                  </Button>
                </Stack>
              </Stack>
            </Paper>
          </Grid>

          {/* Preview & Code Panel */}
          <Grid sx={{ gridColumn: 'span 8' }}>
            <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minHeight: 600, bgcolor: 'background.paper', mb: 2 }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <PreviewIcon sx={{ color: '#7c3aed' }} />
                <Typography fontWeight={700}>Live Preview</Typography>
                <IconButton 
                  size="small" 
                  onClick={() => setGeneratedCode({ jsx: '', css: '' })}
                  sx={{ ml: 'auto' }}
                >
                  <RefreshIcon />
                </IconButton>
              </Stack>
              
              {/* Live Preview */}
              <Box sx={{ minHeight: 200, bgcolor: '#f8f9fa', borderRadius: 2, mb: 2, p: 2 }}>
                {generatedCode.jsx ? (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: 180,
                    color: 'text.secondary'
                  }}>
                    <Typography variant="h6">Component code successfully constructed! Refer to the code tabs below.</Typography>
                  </Box>
                ) : (
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    height: 180,
                    color: 'text.secondary'
                  }}>
                    <Typography>Component preview will appear here after generation.</Typography>
                  </Box>
                )}
              </Box>

              {/* Code Tabs */}
              <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)} sx={{ mb: 2 }}>
                <Tab label="JSX/TSX" />
                <Tab label="CSS" />
              </Tabs>
              
              <Paper variant="outlined" sx={{ p: 2, minHeight: 150, bgcolor: '#f8f9fa', mb: 2 }}>
                {activeTab === 0 ? (
                  <Typography 
                    component="pre" 
                    sx={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.875rem',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}
                  >
                    {generatedCode.jsx || 'Generated JSX code will appear here...'}
                  </Typography>
                ) : (
                  <Typography 
                    component="pre" 
                    sx={{ 
                      fontFamily: 'monospace', 
                      fontSize: '0.875rem',
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word'
                    }}
                  >
                    {generatedCode.css || 'Generated CSS code will appear here...'}
                  </Typography>
                )}
              </Paper>

              <Stack direction="row" spacing={2}>
                <Button 
                  variant="outlined" 
                  startIcon={<ContentCopyIcon />} 
                  onClick={handleCopyCode}
                  disabled={!generatedCode.jsx && !generatedCode.css}
                  sx={{ 
                    borderColor: '#246bfd', 
                    color: '#246bfd', 
                    fontWeight: 700, 
                    borderRadius: 2 
                  }}
                >
                  Copy Code
                </Button>
                <Button 
                  variant="contained" 
                  startIcon={<DownloadIcon />} 
                  onClick={handleDownloadZip}
                  disabled={!generatedCode.jsx && !generatedCode.css}
                  sx={{ 
                    bgcolor: '#246bfd', 
                    color: '#fff', 
                    fontWeight: 700, 
                    borderRadius: 2 
                  }}
                >
                  Download
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 