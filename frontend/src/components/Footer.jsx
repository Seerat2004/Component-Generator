import React from 'react';
import { Box, Container, Grid, Stack, Typography, Button } from '@mui/material';

export default function Footer({ mode }) {
  const isDark = mode === 'dark';
  const sectionBg = (light, dark) => (isDark ? dark : light);

  return (
    <Box sx={{ bgcolor: sectionBg('#246bfd', '#232336'), color: '#fff', py: 8, mt: 'auto', width: '100vw' }}>
      <Container maxWidth="xl" sx={{ width: '100%' }}>
        <Grid container columns={12} spacing={4}>
          <Grid sx={{ gridColumn: 'span 4' }}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', letterSpacing: 1 }}>
                Component Generator
              </Typography>
              <Typography sx={{ color: '#eaf1ff', fontSize: 15 }}>
                Build, preview, and export React components with AI. All your work, always saved.
              </Typography>
              <Typography sx={{ color: '#eaf1ff', fontSize: 13 }}>
                © {new Date().getFullYear()} Component Generator. All rights reserved.
              </Typography>
            </Stack>
          </Grid>
          <Grid sx={{ gridColumn: 'span 2' }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Pages</Typography>
              <Button color="inherit" sx={{ color: '#fff', textTransform: 'none', justifyContent: 'flex-start' }}>Home</Button>
              <Button color="inherit" sx={{ color: '#fff', textTransform: 'none', justifyContent: 'flex-start' }}>Features</Button>
              <Button color="inherit" sx={{ color: '#fff', textTransform: 'none', justifyContent: 'flex-start' }}>Playground</Button>
            </Stack>
          </Grid>
          <Grid sx={{ gridColumn: 'span 2' }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Company</Typography>
              <Button color="inherit" sx={{ color: '#fff', textTransform: 'none', justifyContent: 'flex-start' }}>About</Button>
              <Button color="inherit" sx={{ color: '#fff', textTransform: 'none', justifyContent: 'flex-start' }}>Contact</Button>
            </Stack>
          </Grid>
          <Grid sx={{ gridColumn: 'span 4' }}>
            <Stack spacing={1}>
              <Typography sx={{ fontWeight: 700, color: '#fff', mb: 1 }}>Contact Us</Typography>
              <Typography sx={{ color: '#fff', fontSize: 15 }}>contact@componentgenerator.com</Typography>
              <Typography sx={{ color: '#fff', fontSize: 15 }}>+91 8595563221</Typography>
              <Stack direction="row" spacing={1} mt={1}>
                <Button sx={{ minWidth: 0, p: 0 }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" 
                    alt="LinkedIn" 
                    style={{ width: 24, height: 24, filter: 'invert(1)' }} 
                  />
                </Button>
                <Button sx={{ minWidth: 0, p: 0 }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" 
                    alt="Twitter" 
                    style={{ width: 24, height: 24, filter: 'invert(1)' }} 
                  />
                </Button>
                <Button sx={{ minWidth: 0, p: 0 }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" 
                    alt="Facebook" 
                    style={{ width: 24, height: 24, filter: 'invert(1)' }} 
                  />
                </Button>
                <Button sx={{ minWidth: 0, p: 0 }}>
                  <img 
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
                    alt="Instagram" 
                    style={{ width: 24, height: 24, filter: 'invert(1)' }} 
                  />
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
} 