import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper, Stack, Link, CircularProgress, Alert, InputAdornment, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MeteorShower from '../components/MeteorShower';
import useAuthStore from '../store/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, loading, error, clearError, isAuthenticated } = useAuthStore();

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/playground';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  // Clear error when component mounts
  useEffect(() => {
    clearError();
  }, [clearError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      const from = location.state?.from?.pathname || '/playground';
      navigate(from, { replace: true });
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100vw', overflow: 'hidden', py: 8 }}>
      <motion.div
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(120deg, #eaf1ff 0%, #f7e7e1 50%, #246bfd 100%)',
          backgroundSize: '200% 200%',
          zIndex: 0,
        }}
      />
      <MeteorShower />
      <Box sx={{ position: 'relative', zIndex: 2, width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        <Paper elevation={4} sx={{ p: 5, borderRadius: 4, minWidth: 340, maxWidth: 400, width: '100%' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 2, textAlign: 'center', color: '#246bfd' }}>Login</Typography>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
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
                sx={{ fontWeight: 700, borderRadius: 2, py: 1.5 }}
              >
                {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
              </Button>
              <Typography sx={{ textAlign: 'center' }}>
                Don't have an account?{' '}
                <Link href="/signup" underline="hover" color="primary">
                  Sign up
                </Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
      </Box>
    </Box>
  );
} 