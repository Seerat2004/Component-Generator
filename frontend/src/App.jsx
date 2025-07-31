import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Features from './pages/Features';
import Playground from './pages/Playground';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import useAuthStore from './store/authStore';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#246bfd' },
          background: { default: '#fff', paper: '#fff' },
          text: { primary: '#18191A', secondary: '#636e72' },
          divider: '#eaf1ff',
        }
      : {
          primary: { main: '#246bfd' },
          background: { default: '#18191A', paper: '#232336' },
          text: { primary: '#fff', secondary: '#eaf1ff' },
          divider: '#2a2a3a',
        }),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          ...(mode === 'dark' && {
            '&.MuiPaper-root': {
              backgroundColor: '#232336',
              color: '#fff',
            },
          }),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          ...(mode === 'dark' && {
            '&.MuiButton-outlined': {
              borderColor: '#246bfd',
              color: '#246bfd',
              '&:hover': {
                backgroundColor: 'rgba(36, 107, 253, 0.1)',
                borderColor: '#1a4db8',
                color: '#1a4db8',
              },
            },
          }),
        },
      },
    },
  },
});

export default function App() {
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');
  const { checkAuth } = useAuthStore();

  // Initialize dark mode class on app load
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
    // Apply dark class to body for CSS styling
    if (mode === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [mode]);

  // Check authentication on app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar mode={mode} setMode={setMode} />
          <Box sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route 
                path="/playground" 
                element={
                  <ProtectedRoute>
                    <Playground />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </Box>
          <Footer mode={mode} />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

