import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack, Link, CircularProgress, Alert, InputAdornment, IconButton, Collapse } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MeteorShower from '../components/MeteorShower';
import useAuthStore from '../store/authStore';
import { authAPI } from '../utils/api';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [debugInfo, setDebugInfo] = useState(null);
  const [showDebug, setShowDebug] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signup, loading, error, clearError, isAuthenticated } = useAuthStore();
  
  // Get current theme mode from localStorage
  const mode = localStorage.getItem('themeMode') || 'light';
  const isDark = mode === 'dark';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // Clear error when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  // Debug function to test API connectivity
  const testAPI = async () => {
    try {
      console.log('🧪 Testing API connectivity...');
      
      // Test health endpoint
      const healthResponse = await fetch(`${import.meta.env.VITE_API_URL || 'https://component-generator-cy7z.onrender.com'}/api/health`);
      const healthData = await healthResponse.json();
      
      // Test signup endpoint
      const testResponse = await fetch(`${import.meta.env.VITE_API_URL || 'https://component-generator-cy7z.onrender.com'}/api/test-signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ test: true }),
        credentials: 'include'
      });
      const testData = await testResponse.json();
      
      setDebugInfo({
        health: healthData,
        test: testData,
        timestamp: new Date().toISOString(),
        environment: import.meta.env.MODE,
        apiUrl: import.meta.env.VITE_API_URL || 'https://component-generator-cy7z.onrender.com'
      });
      
      console.log('✅ API test completed:', { healthData, testData });
    } catch (error) {
      console.error('❌ API test failed:', error);
      setDebugInfo({
        error: error.message,
        timestamp: new Date().toISOString(),
        environment: import.meta.env.MODE,
        apiUrl: import.meta.env.VITE_API_URL || 'https://component-generator-cy7z.onrender.com'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Starting signup process...');
    
    const result = await signup(name, email, password);
    console.log('📝 Signup result:', result);
    
    if (result.success) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', py: { xs: 4, md: 8 } }}>
      <motion.div
        initial={{ backgroundPosition: '100% 50%' }}
        animate={{ backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDark 
            ? 'linear-gradient(120deg, #232336 0%, #18191A 50%, #246bfd 100%)'
            : 'linear-gradient(120deg, #f7e7e1 0%, #eaf1ff 50%, #246bfd 100%)',
          backgroundSize: '200% 200%',
          zIndex: 0,
        }}
      />
      <MeteorShower />
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <Paper elevation={4} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, minWidth: { xs: 280, sm: 340 }, maxWidth: 400, width: '100%', bgcolor: isDark ? '#232336' : '#fff', color: isDark ? '#fff' : '#18191A', mx: { xs: 2, sm: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textAlign: 'center', color: '#246bfd' }}>Sign Up</Typography>
          
          {/* Debug section */}
          {process.env.NODE_ENV === 'development' && (
            <Box sx={{ mb: 2 }}>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={() => setShowDebug(!showDebug)}
                sx={{ mb: 1 }}
              >
                {showDebug ? 'Hide' : 'Show'} Debug Info
              </Button>
              <Button 
                variant="outlined" 
                size="small" 
                onClick={testAPI}
                sx={{ ml: 1 }}
              >
                Test API
              </Button>
              <Collapse in={showDebug}>
                <Box sx={{ mt: 1, p: 1, bgcolor: 'grey.100', borderRadius: 1, fontSize: '0.8rem' }}>
                  <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
                </Box>
              </Collapse>
            </Box>
          )}
          
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField 
                label="Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
                fullWidth 
                disabled={loading}
              />
              <TextField 
                label="Email" 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                required 
                fullWidth 
                disabled={loading}
              />
              <TextField 
                label="Password" 
                type={showPassword ? "text" : "password"}
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                required 
                fullWidth 
                disabled={loading}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        disabled={loading}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary" 
                fullWidth 
                disabled={loading} 
                sx={{ fontWeight: 700, borderRadius: 2, py: { xs: 1.5, md: 2 } }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
              </Button>
              <Typography sx={{ textAlign: 'center' }}>
                Already have an account?{' '}
                <Link href="/login" underline="hover" color="primary">
                  Login
                </Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
} 