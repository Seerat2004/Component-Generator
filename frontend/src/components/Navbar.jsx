import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function Navbar({ mode, setMode }) {
  const isDark = mode === 'dark';
  const sectionText = (light, dark) => (isDark ? dark : light);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    navigate('/');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: sectionText('#fff', '#232336'), boxShadow: '0 2px 8px 0 #eaf1ff', borderBottom: '1px solid #eaf1ff', py: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72 }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: sectionText('#18191A', '#fff'), letterSpacing: 1 }}>AccioJobs Playground</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none' }} onClick={() => navigate('/features')}>Features</Button>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none' }} onClick={() => navigate('/playground')}>Playground</Button>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none' }} onClick={() => navigate('/about')}>About</Button>
          
          {isAuthenticated ? (
            <>
              <Button variant="contained" onClick={() => navigate('/playground')} sx={{ borderRadius: 8, bgcolor: '#246bfd', color: '#fff', fontWeight: 700, px: 3, ml: 2, textTransform: 'none', boxShadow: '0 4px 16px 0 #246bfd22', '&:hover': { bgcolor: '#1a4db8' } }}>Playground</Button>
              <IconButton onClick={handleMenu} sx={{ ml: 2 }}>
                <Avatar sx={{ width: 32, height: 32, bgcolor: '#246bfd' }}>
                  {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                </Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    mt: 1,
                    minWidth: 150,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    borderRadius: 2,
                  }
                }}
              >
                <MenuItem onClick={handleClose} disabled>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {user?.name}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose} disabled>
                  <Typography variant="caption" color="text.secondary">
                    {user?.email}
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Typography>Logout</Typography>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button variant="outlined" onClick={() => navigate('/login')} sx={{ borderRadius: 8, borderColor: '#246bfd', color: '#246bfd', fontWeight: 700, px: 3, ml: 2, textTransform: 'none', '&:hover': { bgcolor: '#eaf1ff', borderColor: '#1a4db8', color: '#1a4db8' } }}>Login</Button>
              <Button variant="contained" onClick={() => navigate('/signup')} sx={{ borderRadius: 8, bgcolor: '#246bfd', color: '#fff', fontWeight: 700, px: 3, ml: 1, textTransform: 'none', boxShadow: '0 4px 16px 0 #246bfd22', '&:hover': { bgcolor: '#1a4db8' } }}>Get Started</Button>
            </>
          )}
          
          <IconButton onClick={() => setMode(isDark ? 'light' : 'dark')} sx={{ ml: 2 }} color="inherit">
            {isDark ? <WbSunnyIcon sx={{ color: '#fff' }} /> : <NightlightRoundIcon sx={{ color: '#246bfd' }} />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
} 