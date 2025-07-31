import React from 'react';
import { AppBar, Toolbar, Typography, Stack, Button, IconButton, Avatar, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Divider, Box } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

export default function Navbar({ mode, setMode }) {
  const isDark = mode === 'dark';
  const sectionText = (light, dark) => (isDark ? dark : light);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuthStore();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ bgcolor: sectionText('#fff', '#232336'), boxShadow: '0 2px 8px 0 #eaf1ff', borderBottom: '1px solid #eaf1ff', py: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="h6" sx={{ 
            fontWeight: 700, 
            color: sectionText('#18191A', '#fff'), 
            letterSpacing: 1,
            fontSize: { xs: '1.1rem', sm: '1.25rem' }
          }}>
            Component Generator
          </Typography>
        </Stack>
        {/* Desktop Navigation */}
        <Stack direction="row" spacing={{ xs: 1, md: 2 }} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none', fontSize: { xs: '0.8rem', md: '1rem' } }} onClick={() => navigate('/')}>Home</Button>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none', fontSize: { xs: '0.8rem', md: '1rem' } }} onClick={() => navigate('/features')}>Features</Button>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none', fontSize: { xs: '0.8rem', md: '1rem' } }} onClick={() => navigate('/about')}>About</Button>
          <Button sx={{ color: '#246bfd', fontWeight: 600, textTransform: 'none', fontSize: { xs: '0.8rem', md: '1rem' } }} onClick={() => navigate('/contact')}>Contact</Button>
          
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

        {/* Mobile Menu Button */}
        <IconButton 
          sx={{ display: { xs: 'flex', md: 'none' }, color: sectionText('#18191A', '#fff') }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: sectionText('#fff', '#232336'),
            color: sectionText('#18191A', '#fff'),
          }
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#246bfd' }}>
            Menu
          </Typography>
          
          <List>
            <ListItem button onClick={() => handleNavigation('/')}>
              <ListItemText primary="Home" sx={{ '& .MuiListItemText-primary': { fontWeight: 600 } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/features')}>
              <ListItemText primary="Features" sx={{ '& .MuiListItemText-primary': { fontWeight: 600 } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/about')}>
              <ListItemText primary="About" sx={{ '& .MuiListItemText-primary': { fontWeight: 600 } }} />
            </ListItem>
            <ListItem button onClick={() => handleNavigation('/contact')}>
              <ListItemText primary="Contact" sx={{ '& .MuiListItemText-primary': { fontWeight: 600 } }} />
            </ListItem>
          </List>

          <Divider sx={{ my: 2 }} />

          {isAuthenticated ? (
            <>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={() => handleNavigation('/playground')} 
                sx={{ 
                  mb: 2,
                  borderRadius: 2, 
                  bgcolor: '#246bfd', 
                  color: '#fff', 
                  fontWeight: 700, 
                  py: 1.5,
                  textTransform: 'none', 
                  boxShadow: '0 4px 16px 0 #246bfd22', 
                  '&:hover': { bgcolor: '#1a4db8' } 
                }}
              >
                Playground
              </Button>
              
              <Box sx={{ mb: 2, p: 2, bgcolor: sectionText('#f5f5f5', '#2a2a3a'), borderRadius: 2 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {user?.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {user?.email}
                </Typography>
              </Box>
              
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={handleLogout}
                sx={{ 
                  borderRadius: 2, 
                  borderColor: '#246bfd', 
                  color: '#246bfd', 
                  fontWeight: 600, 
                  py: 1.5,
                  textTransform: 'none', 
                  '&:hover': { bgcolor: '#eaf1ff', borderColor: '#1a4db8', color: '#1a4db8' } 
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button 
                fullWidth 
                variant="outlined" 
                onClick={() => handleNavigation('/login')} 
                sx={{ 
                  mb: 2,
                  borderRadius: 2, 
                  borderColor: '#246bfd', 
                  color: '#246bfd', 
                  fontWeight: 700, 
                  py: 1.5,
                  textTransform: 'none', 
                  '&:hover': { bgcolor: '#eaf1ff', borderColor: '#1a4db8', color: '#1a4db8' } 
                }}
              >
                Login
              </Button>
              <Button 
                fullWidth 
                variant="contained" 
                onClick={() => handleNavigation('/signup')} 
                sx={{ 
                  borderRadius: 2, 
                  bgcolor: '#246bfd', 
                  color: '#fff', 
                  fontWeight: 700, 
                  py: 1.5,
                  textTransform: 'none', 
                  boxShadow: '0 4px 16px 0 #246bfd22', 
                  '&:hover': { bgcolor: '#1a4db8' } 
                }}
              >
                Get Started
              </Button>
            </>
          )}

          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => setMode(isDark ? 'light' : 'dark')} color="inherit">
              {isDark ? <WbSunnyIcon sx={{ color: '#fff' }} /> : <NightlightRoundIcon sx={{ color: '#246bfd' }} />}
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
} 