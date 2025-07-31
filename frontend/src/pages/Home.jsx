import React from 'react';
import { Typography, Box, Button, Container, Chip, Stack, Avatar, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';
import PreviewIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import StarIcon from '@mui/icons-material/Star';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

export default function Home({ mode }) {
  const isDark = mode === 'dark';
  const sectionBg = (light, dark) => (isDark ? dark : light);
  const sectionText = (light, dark) => (isDark ? dark : light);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleTryPlayground = () => {
    if (isAuthenticated) {
      navigate('/playground');
    } else {
      navigate('/login');
    }
  };

  const handleBookDemo = () => {
    // Open demo booking in new tab or navigate to contact page
    window.open('mailto:demo@componentgenerator.com?subject=Book Demo - Component Generator', '_blank');
  };

  const handleViewComponents = () => {
    if (isAuthenticated) {
      navigate('/playground');
    } else {
      navigate('/login');
    }
  };

  const handleViewPages = () => {
    if (isAuthenticated) {
      navigate('/playground');
    } else {
      navigate('/login');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: sectionBg('#fff', '#18191A'), flex: 1, display: 'flex', alignItems: 'center', minHeight: 'calc(100vh - 80px)', width: '100vw' }}>
        <Container maxWidth="xl" sx={{ width: '100%', flex: 1, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', py: 8 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-start' }, justifyContent: 'center', textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                <Avatar alt="User 1" src="https://randomuser.me/api/portraits/women/44.jpg" sx={{ width: 32, height: 32 }} />
                <Avatar alt="User 2" src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 32, height: 32, ml: -1 }} />
                <Avatar alt="User 3" src="https://randomuser.me/api/portraits/women/65.jpg" sx={{ width: 32, height: 32, ml: -1 }} />
                <Chip label={<b>35k+ Happy Users</b>} sx={{ bgcolor: '#eaf1ff', color: '#246bfd', fontWeight: 600, fontSize: 15, borderRadius: 2, ml: 1 }} />
              </Stack>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1}>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, fontSize: { xs: '2.2rem', md: '3.2rem' }, letterSpacing: -1, lineHeight: 1.1 }}>
                The <span style={{ background: 'linear-gradient(90deg, #246bfd, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AI</span> React Component &<br />Multi-Component <span style={{ background: 'linear-gradient(90deg, #246bfd, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Generator</span>
              </Typography>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={2}>
              <Typography sx={{ color: isDark ? '#fff' : '#222', mb: 4, fontSize: { xs: '1.1rem', md: '1.3rem' }, maxWidth: 600 }}>
                Build, preview, and export React components or full pages with AI. All chat history and code edits are preserved across logins. Iterate, tweak, and export your micro-frontends with ease.
              </Typography>
            </motion.div>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4, justifyContent: { xs: 'center', md: 'flex-start' }, width: { xs: '100%', md: 'auto' } }}>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={3}>
                <Button 
                  variant="contained" 
                  size="large" 
                  onClick={handleTryPlayground}
                  sx={{ borderRadius: 8, fontWeight: 700, bgcolor: '#246bfd', color: '#fff', px: 4, boxShadow: '0 4px 16px 0 #246bfd22', '&:hover': { bgcolor: '#1a4db8' } }}
                >
                  Try Playground
                </Button>
              </motion.div>
              <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={4}>
                <Button 
                  variant="outlined" 
                  size="large" 
                  onClick={handleBookDemo}
                  sx={{ borderRadius: 8, fontWeight: 700, px: 4, bgcolor: '#fff', borderColor: '#246bfd', color: '#246bfd', '&:hover': { bgcolor: '#eaf1ff', borderColor: '#1a4db8', color: '#1a4db8' } }}
                >
                  Book a Demo
                </Button>
              </motion.div>
            </Stack>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={5}>
              <Paper elevation={4} sx={{ p: 3, borderRadius: 4, mb: 3, minWidth: 280, maxWidth: 340, background: 'linear-gradient(135deg, #246bfd 60%, #7c3aed 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>COMPONENTS</Typography>
                <Typography sx={{ mb: 2 }}>Generate, preview, and export React components instantly!</Typography>
                <Button 
                  variant="contained" 
                  onClick={handleViewComponents}
                  sx={{ bgcolor: '#fff', color: '#246bfd', fontWeight: 700, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#eaf1ff' } }}
                >
                  View Components
                </Button>
              </Paper>
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={6}>
              <Paper elevation={4} sx={{ p: 3, borderRadius: 4, minWidth: 280, maxWidth: 340, background: 'linear-gradient(135deg, #7c3aed 60%, #246bfd 100%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>PAGES</Typography>
                <Typography sx={{ mb: 2 }}>Build full pages with AI and export them for your projects!</Typography>
                <Button 
                  variant="contained" 
                  onClick={handleViewPages}
                  sx={{ bgcolor: '#fff', color: '#7c3aed', fontWeight: 700, borderRadius: 2, boxShadow: 'none', '&:hover': { bgcolor: '#f3e6fa' } }}
                >
                  View Pages
                </Button>
              </Paper>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Trusted logos/testimonials placeholder */}
      <Box sx={{ bgcolor: sectionBg('#246bfd', '#232336'), py: 6, width: '100vw' }}>
        <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2, fontWeight: 600 }}>
            Trusted by 20,000+ developers and teams.
          </Typography>
          <Stack direction="row" spacing={6} justifyContent="center" alignItems="center" sx={{ flexWrap: 'wrap' }}>
                            <motion.img src="https://dummyimage.com/100x40/8e44ad/fff&text=ComponentGenerator" alt="Component Generator" style={{ opacity: 0.9 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} />
            <motion.img src="https://dummyimage.com/100x40/0984e3/fff&text=React" alt="React" style={{ opacity: 0.9 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} />
            <motion.img src="https://dummyimage.com/100x40/e84393/fff&text=OpenAI" alt="OpenAI" style={{ opacity: 0.9 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} />
            <motion.img src="https://dummyimage.com/100x40/273c75/fff&text=MongoDB" alt="MongoDB" style={{ opacity: 0.9 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 0.9, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} />
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ bgcolor: sectionBg('#fff', '#18191A'), width: '100vw' }}>
        <Container maxWidth="xl" sx={{ width: '100%', py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, letterSpacing: -0.5, color: sectionText('#18191A', '#fff'), textAlign: 'center' }}>
            Elevate your workflow with powerful features
          </Typography>
          <Grid container columns={12} spacing={4} justifyContent="center" alignItems="center">
            {[{
              icon: <CodeIcon sx={{ fontSize: 48, color: '#246bfd', mb: 2 }} />, title: 'AI Code Generation', desc: 'Generate React components or full pages instantly with AI-driven prompts.'
            }, {
              icon: <ChatIcon sx={{ fontSize: 48, color: '#7c3aed', mb: 2 }} />, title: 'Conversational UI', desc: 'Chat with the AI to iteratively refine, tweak, and improve your components.'
            }, {
              icon: <PreviewIcon sx={{ fontSize: 48, color: '#246bfd', mb: 2 }} />, title: 'Live Preview', desc: 'See your generated components rendered live in a secure, isolated sandbox.'
            }, {
              icon: <DownloadIcon sx={{ fontSize: 48, color: '#7c3aed', mb: 2 }} />, title: 'Export & Download', desc: 'Copy or download your code as a .zip file for easy integration into your projects.'
            }].map((feature, i) => (
              <Grid sx={{ gridColumn: 'span 6', display: 'flex', justifyContent: 'center' }} key={feature.title}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={i} style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}>
                  <Paper elevation={3} sx={{ p: 4, borderRadius: 4, textAlign: 'center', minHeight: 200, boxShadow: isDark ? '0 4px 24px 0 rgba(0,0,0,0.3)' : '0 4px 24px 0 #eaf1ff', bgcolor: sectionBg('#fff', '#232336'), color: sectionText('#18191A', '#fff'), display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `4px solid ${i % 2 === 0 ? '#246bfd' : '#7c3aed'}` }}>
                    {feature.icon}
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: sectionText('#18191A', '#fff') }}>{feature.title}</Typography>
                    <Typography color={sectionText('#636e72', '#eaf1ff')}>{feature.desc}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ bgcolor: sectionBg('#246bfd', '#232336'), py: 10, width: '100vw', display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth="md" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, letterSpacing: -0.5, color: '#fff', textAlign: 'center' }}>
            How It Works
          </Typography>
          <Paper elevation={4} sx={{ p: { xs: 3, md: 6 }, borderRadius: 6, bgcolor: sectionBg('#fff', '#232336'), maxWidth: 600, width: '100%', boxShadow: isDark ? '0 8px 32px 0 rgba(36, 107, 253, 0.2)' : '0 8px 32px 0 #246bfd33', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {[{
              icon: <AutoAwesomeIcon sx={{ fontSize: 36, color: '#246bfd' }} />, title: 'Start a Session', desc: 'Sign up or log in to create a new session or resume previous work.'
            }, {
              icon: <ChatIcon sx={{ fontSize: 36, color: '#7c3aed' }} />, title: 'Chat & Generate', desc: 'Describe your component or page, and let the AI generate code for you.'
            }, {
              icon: <PreviewIcon sx={{ fontSize: 36, color: '#246bfd' }} />, title: 'Preview & Refine', desc: 'Preview the result, chat to refine, and tweak until it\'s perfect.'
            }, {
              icon: <DownloadIcon sx={{ fontSize: 36, color: '#7c3aed' }} />, title: 'Export & Use', desc: 'Export your code and use it in your own projects, hassle-free.'
            }].map((step, i, arr) => (
              <Box key={step.title} sx={{ width: '100%', display: 'flex', alignItems: 'center', mb: i < arr.length - 1 ? 4 : 0 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 3 }}>
                  {step.icon}
                  {i < arr.length - 1 && <Box sx={{ width: 4, height: 40, bgcolor: '#eaf1ff', borderRadius: 2, mt: 1 }} />}
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: sectionText('#18191A', '#fff'), mb: 0.5 }}>{step.title}</Typography>
                  <Typography sx={{ color: sectionText('#636e72', '#eaf1ff'), fontSize: 15 }}>{step.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Paper>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: sectionBg('#fff', '#18191A'), py: 10, width: '100vw' }}>
        <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 6, letterSpacing: -0.5, color: sectionText('#18191A', '#fff'), textAlign: 'center' }}>
            Trusted by Developers
          </Typography>
          <Grid container columns={12} spacing={4} justifyContent="center" alignItems="center">
            {[1, 2, 3].map((i) => (
              <Grid sx={{ gridColumn: 'span 4', display: 'flex', justifyContent: 'center' }} key={i}>
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={i} style={{ width: '100%', maxWidth: 380, margin: '0 auto' }}>
                  <Paper elevation={3} sx={{ p: 4, borderRadius: 4, minHeight: 200, boxShadow: isDark ? '0 4px 24px 0 rgba(0,0,0,0.3)' : '0 4px 24px 0 #eaf1ff', bgcolor: sectionBg('#fff', '#232336'), color: sectionText('#18191A', '#fff'), display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '4px solid #246bfd' }}>
                    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2, justifyContent: 'center' }}>
                      <Avatar src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, textAlign: 'center', color: sectionText('#18191A', '#fff') }}>{`John Doe ${i}`}</Typography>
                        <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center">
                          <StarIcon sx={{ color: '#246bfd', fontSize: 18 }} />
                          <Typography sx={{ fontWeight: 600, color: sectionText('#18191A', '#fff') }}>5.0</Typography>
                        </Stack>
                      </Box>
                    </Stack>
                    <Typography color={sectionText('#636e72', '#eaf1ff')} sx={{ textAlign: 'center' }}>
                      "This playground made building and iterating on React components so much faster. The live preview and export features are a game changer!"
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 