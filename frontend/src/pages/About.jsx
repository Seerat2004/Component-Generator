import React from 'react';
import { Box, Typography, Container, Paper, Stack, Grid, Avatar, Chip, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

export default function About({ mode }) {
  const isDark = mode === 'dark';
  return (
    <Box sx={{ 
      width: '100%', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      py: { xs: 6, md: 12 }, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
      }} />
      
      <Container maxWidth="xl" sx={{ 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        px: { xs: 2, sm: 3, md: 4 }
      }}>
        
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          custom={0}
        >
          <Typography variant="h2" align="center" fontWeight={800} gutterBottom sx={{ 
            background: 'linear-gradient(90deg, #ffffff, #f0f8ff)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent', 
            mb: { xs: 4, md: 6 },
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4rem' },
            lineHeight: 1.2,
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            About Component Generator
          </Typography>
          <Typography align="center" sx={{ 
            mb: { xs: 6, md: 8 }, 
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.4rem' }, 
            maxWidth: 800,
            lineHeight: 1.6,
            px: { xs: 1, sm: 2 },
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 300
          }}>
            Empowering developers to build React components and pages with AI-driven innovation, modern design, and seamless user experience.
          </Typography>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: 'rgba(255,255,255,0.2)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
                borderRadius: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 600,
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.3)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
                }
              }}
            >
              Explore Our Platform
            </Button>
          </motion.div>
        </motion.div>

        {/* Mission & Vision */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 1, sm: 2 }, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={1}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ 
              mb: { xs: 6, md: 8 }, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
              color: '#fff' 
            }}>
              Our Mission & Vision
            </Typography>
          </motion.div>
          
          <Grid container spacing={{ xs: 3, md: 6 }}>
            <Grid xs={12} md={6}>
              <motion.div variants={fadeInUp} custom={2}>
                <Paper elevation={8} sx={{ 
                  p: { xs: 4, md: 6 }, 
                  borderRadius: { xs: 4, md: 6 }, 
                  bgcolor: 'rgba(255,255,255,0.95)', 
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)', 
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-12px) scale(1.02)' },
                    boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                  }
                }}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: { xs: 2, md: 3 },
                      position: 'relative'
                    }}>
                      <Box sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        borderRadius: '50%',
                        bgcolor: 'linear-gradient(135deg, #246bfd, #1a4db8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(36, 107, 253, 0.3)',
                        mb: 2
                      }}>
                        <PsychologyIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#fff' }} />
                      </Box>
                      <Typography variant="h4" fontWeight={700} sx={{ 
                        background: 'linear-gradient(135deg, #246bfd, #1a4db8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}>
                        Our Mission
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ 
                      lineHeight: 1.8, 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 400
                    }}>
                      To democratize React development by providing an AI-powered platform that enables developers of all skill levels to rapidly build, preview, and export high-quality React components and pages. We believe in making development faster, more intuitive, and more accessible.
                    </Typography>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
            <Grid xs={12} md={6}>
              <motion.div variants={fadeInUp} custom={3}>
                <Paper elevation={8} sx={{ 
                  p: { xs: 4, md: 6 }, 
                  borderRadius: { xs: 4, md: 6 }, 
                  bgcolor: 'rgba(255,255,255,0.95)', 
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)', 
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.4s ease',
                  border: '1px solid rgba(255,255,255,0.2)',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-12px) scale(1.02)' },
                    boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                  }
                }}>
                  <Stack spacing={{ xs: 3, md: 5 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: { xs: 2, md: 3 },
                      position: 'relative'
                    }}>
                      <Box sx={{
                        width: { xs: 60, md: 80 },
                        height: { xs: 60, md: 80 },
                        borderRadius: '50%',
                        bgcolor: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 25px rgba(124, 58, 237, 0.3)',
                        mb: 2
                      }}>
                        <TrendingUpIcon sx={{ fontSize: { xs: 30, md: 40 }, color: '#fff' }} />
                      </Box>
                      <Typography variant="h4" fontWeight={700} sx={{ 
                        background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '1.5rem', md: '2rem' }
                      }}>
                        Our Vision
                      </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ 
                      lineHeight: 1.8, 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 400
                    }}>
                      To become the leading AI-powered development platform that revolutionizes how developers create React applications. We envision a future where AI and human creativity work together seamlessly to build amazing digital experiences.
                    </Typography>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Key Features */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 1, sm: 2 }, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={4}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ 
              mb: { xs: 6, md: 8 }, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
              color: '#fff' 
            }}>
              Key Features
            </Typography>
          </motion.div>
          
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ px: { xs: 1, sm: 2 }, justifyContent: 'center' }}>
            {[
              { 
                icon: <CodeIcon />, 
                title: 'AI Code Generation', 
                desc: 'Generate React components instantly with advanced AI prompts',
                color: '#246bfd',
                gradient: 'linear-gradient(135deg, #246bfd, #1a4db8)'
              },
              { 
                icon: <SpeedIcon />, 
                title: 'Live Preview', 
                desc: 'See your components rendered in real-time with instant updates',
                color: '#10b981',
                gradient: 'linear-gradient(135deg, #10b981, #059669)'
              },
              { 
                icon: <SecurityIcon />, 
                title: 'Session Persistence', 
                desc: 'All your work is saved and can be resumed anytime',
                color: '#f59e0b',
                gradient: 'linear-gradient(135deg, #f59e0b, #d97706)'
              },
              { 
                icon: <GroupIcon />, 
                title: 'Collaborative Design', 
                desc: 'Share and collaborate on components with your team',
                color: '#7c3aed',
                gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)'
              }
            ].map((feature, index) => (
              <Grid xs={12} sm={6} md={3} key={index}>
                <motion.div
                  variants={fadeInUp}
                  custom={5 + index}
                  whileHover={{ y: { xs: 0, md: -10 }, scale: { xs: 1.02, md: 1.05 } }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper elevation={8} sx={{ 
                    p: { xs: 3, md: 5 }, 
                    borderRadius: { xs: 4, md: 6 }, 
                    textAlign: 'center', 
                    height: '100%', 
                    transition: 'all 0.4s ease',
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: feature.gradient,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)'
                    },
                    '&:hover': { 
                      transform: { xs: 'translateY(-8px)', md: 'translateY(-12px) scale(1.02)' },
                      boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                    } 
                  }}>
                    <Box sx={{ 
                      width: { xs: 60, md: 80 }, 
                      height: { xs: 60, md: 80 }, 
                      borderRadius: '50%', 
                      background: feature.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: { xs: 2, md: 3 },
                      boxShadow: `0 8px 25px ${feature.color}40`
                    }}>
                      <Box sx={{ color: '#fff', fontSize: { xs: 28, md: 36 } }}>
                        {feature.icon}
                      </Box>
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ 
                      mb: { xs: 2, md: 3 }, 
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      background: feature.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary" variant="body1" sx={{ 
                      lineHeight: 1.7,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      fontWeight: 400
                    }}>
                      {feature.desc}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Technology Stack */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 1, sm: 2 }, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={9}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ 
              mb: { xs: 6, md: 8 }, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
              color: '#fff' 
            }}>
              Technology Stack
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeInUp} custom={10}>
            <Paper elevation={8} sx={{ 
              p: { xs: 4, md: 8 }, 
              borderRadius: { xs: 4, md: 6 }, 
              bgcolor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(90deg, #246bfd, #7c3aed, #10b981)',
                transform: 'scaleX(0)',
                transition: 'transform 0.5s ease'
              },
              '&:hover::before': {
                transform: 'scaleX(1)'
              }
            }}>
              <Grid container spacing={{ xs: 4, md: 6 }} sx={{ justifyContent: 'center' }}>
                <Grid xs={12} md={6}>
                  <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      mb: { xs: 4, md: 6 }, 
                      background: 'linear-gradient(135deg, #246bfd, #1a4db8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' }
                    }}>
                      Frontend
                    </Typography>
                    <Stack spacing={{ xs: 2, md: 4 }} alignItems="center" sx={{ width: '100%' }}>
                      {['React 19', 'Material-UI', 'Framer Motion', 'Vite', 'Zustand'].map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <Chip label={tech} sx={{ 
                            bgcolor: 'rgba(36, 107, 253, 0.1)', 
                            color: '#246bfd', 
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            px: { xs: 3, md: 5 },
                            py: { xs: 1, md: 2 },
                            borderRadius: 4,
                            border: '2px solid rgba(36, 107, 253, 0.2)',
                            boxShadow: '0 4px 15px rgba(36, 107, 253, 0.15)',
                            transition: 'all 0.4s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'translateY(-4px) scale(1.05)',
                              boxShadow: '0 8px 25px rgba(36, 107, 253, 0.25)',
                              bgcolor: 'rgba(36, 107, 253, 0.15)',
                              border: '2px solid rgba(36, 107, 253, 0.4)'
                            }
                          }} />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                  <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      mb: { xs: 4, md: 6 }, 
                      background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.2rem' }
                    }}>
                      Backend
                    </Typography>
                    <Stack spacing={{ xs: 2, md: 4 }} alignItems="center" sx={{ width: '100%' }}>
                      {['Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'RESTful APIs'].map((tech, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                          <Chip label={tech} sx={{ 
                            bgcolor: 'rgba(124, 58, 237, 0.1)', 
                            color: '#7c3aed', 
                            fontWeight: 700,
                            fontSize: { xs: '1rem', md: '1.2rem' },
                            px: { xs: 3, md: 5 },
                            py: { xs: 1, md: 2 },
                            borderRadius: 4,
                            border: '2px solid rgba(124, 58, 237, 0.2)',
                            boxShadow: '0 4px 15px rgba(124, 58, 237, 0.15)',
                            transition: 'all 0.4s ease',
                            cursor: 'pointer',
                            '&:hover': {
                              transform: 'translateY(-4px) scale(1.05)',
                              boxShadow: '0 8px 25px rgba(124, 58, 237, 0.25)',
                              bgcolor: 'rgba(124, 58, 237, 0.15)',
                              border: '2px solid rgba(124, 58, 237, 0.4)'
                            }
                          }} />
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </motion.div>
        </Box>

        {/* Statistics */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 1, sm: 2 }, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={11}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ 
              mb: { xs: 6, md: 8 }, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
              color: '#fff' 
            }}>
              Platform Statistics
            </Typography>
          </motion.div>
          
          <Grid container spacing={{ xs: 2, md: 5 }} sx={{ px: { xs: 1, sm: 2 }, justifyContent: 'center' }}>
            {[
              { number: '35K+', label: 'Happy Users', color: '#246bfd', gradient: 'linear-gradient(135deg, #246bfd, #1a4db8)' },
              { number: '100K+', label: 'Components Generated', color: '#7c3aed', gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)' },
              { number: '99.9%', label: 'Uptime', color: '#10b981', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
              { number: '24/7', label: 'Support', color: '#f59e0b', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' }
            ].map((stat, index) => (
              <Grid xs={6} sm={6} md={3} key={index}>
                <motion.div
                  variants={fadeInUp}
                  custom={12 + index}
                  whileHover={{ y: { xs: 0, md: -10 }, scale: { xs: 1.02, md: 1.05 } }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper elevation={8} sx={{ 
                    p: { xs: 3, md: 5 }, 
                    borderRadius: { xs: 3, md: 6 }, 
                    textAlign: 'center', 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: stat.gradient,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)'
                    },
                    '&:hover': { 
                      transform: { xs: 'translateY(-6px)', md: 'translateY(-12px) scale(1.02)' },
                      boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                    } 
                  }}>
                    <Typography variant="h2" fontWeight={800} sx={{ 
                      background: stat.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 2, 
                      fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                      textShadow: '0 4px 8px rgba(0,0,0,0.1)'
                    }}>
                      {stat.number}
                    </Typography>
                    <Typography color="text.secondary" fontWeight={600} sx={{ 
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      lineHeight: 1.4
                    }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Team Section */}
        <Box sx={{ mb: { xs: 8, md: 12 }, px: { xs: 1, sm: 2 }, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={16}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ 
              mb: { xs: 6, md: 8 }, 
              fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
              color: '#fff' 
            }}>
              Meet Our Team
            </Typography>
          </motion.div>
          
          <Grid container spacing={{ xs: 3, md: 5 }} sx={{ px: { xs: 1, sm: 2 }, justifyContent: 'center' }}>
            {[
              { 
                name: 'Muskan', 
                role: 'Full Stack Developer', 
                avatar: 'https://randomuser.me/api/portraits/women/44.jpg', 
                skills: ['React', 'Node.js', 'AI Integration'],
                gradient: 'linear-gradient(135deg, #246bfd, #1a4db8)'
              },
              { 
                name: 'Srishti', 
                role: 'UI/UX Designer', 
                avatar: 'https://randomuser.me/api/portraits/women/65.jpg', 
                skills: ['Design Systems', 'User Research', 'Prototyping'],
                gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)'
              },
              { 
                name: 'Component Generator', 
                role: 'Development Team', 
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg', 
                skills: ['Innovation', 'Quality', 'Support'],
                gradient: 'linear-gradient(135deg, #10b981, #059669)'
              }
            ].map((member, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={fadeInUp}
                  custom={17 + index}
                  whileHover={{ y: { xs: 0, md: -10 }, scale: { xs: 1.02, md: 1.05 } }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper elevation={8} sx={{ 
                    p: { xs: 3, md: 5 }, 
                    borderRadius: { xs: 4, md: 6 }, 
                    textAlign: 'center', 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: member.gradient,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)'
                    },
                    '&:hover': { 
                      transform: { xs: 'translateY(-8px)', md: 'translateY(-12px) scale(1.02)' },
                      boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                    } 
                  }}>
                    <Avatar src={member.avatar} sx={{ 
                      width: { xs: 80, md: 120 }, 
                      height: { xs: 80, md: 120 }, 
                      mx: 'auto', 
                      mb: { xs: 2, md: 3 }, 
                      border: '4px solid rgba(255,255,255,0.3)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                    }} />
                    <Typography variant="h5" fontWeight={700} sx={{ 
                      mb: 2, 
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      background: member.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {member.name}
                    </Typography>
                    <Typography color="text.secondary" sx={{ 
                      mb: { xs: 2, md: 3 }, 
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 500
                    }}>
                      {member.role}
                    </Typography>
                    <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ gap: { xs: 1, md: 1.5 } }}>
                      {member.skills.map((skill, skillIndex) => (
                        <Chip key={skillIndex} label={skill} size="medium" sx={{ 
                          bgcolor: 'rgba(36, 107, 253, 0.1)', 
                          color: '#246bfd',
                          fontWeight: 600,
                          fontSize: { xs: '0.8rem', md: '0.9rem' },
                          border: '1px solid rgba(36, 107, 253, 0.2)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            bgcolor: 'rgba(36, 107, 253, 0.2)',
                            transform: 'translateY(-2px)'
                          }
                        }} />
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Timeline */}
        <motion.div variants={fadeInUp} custom={7} style={{ width: '100%' }}>
          <Typography variant="h3" align="center" fontWeight={700} sx={{ 
            mb: { xs: 6, md: 8 }, 
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.5rem' }, 
            color: 'text.primary' 
          }}>
            Our Journey
          </Typography>
          <Paper elevation={4} sx={{ 
            p: { xs: 4, md: 6 }, 
            borderRadius: { xs: 3, md: 4 }, 
            bgcolor: 'background.paper',
            boxShadow: isDark ? '0 8px 32px 0 rgba(36, 107, 253, 0.2)' : '0 8px 32px 0 #246bfd15',
            textAlign: 'center'
          }}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              {[
                { year: '2024', title: 'Project Inception', desc: 'Started with the vision to revolutionize React development', icon: <SchoolIcon /> },
                { year: '2024', title: 'MVP Development', desc: 'Built the core platform with AI integration', icon: <CodeIcon /> },
                { year: '2024', title: 'Beta Launch', desc: 'Released to early adopters and gathered feedback', icon: <WorkIcon /> },
                { year: '2024', title: 'Public Launch', desc: 'Opened the platform to all developers worldwide', icon: <TrendingUpIcon /> }
              ].map((milestone, index) => (
                <Box key={index} className="timeline-card" sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' },
                  alignItems: { xs: 'center', md: 'center' }, 
                  gap: { xs: 2, md: 4 }, 
                  p: { xs: 2, md: 3 }, 
                  borderRadius: 3, 
                  bgcolor: isDark ? '#2a2a3a' : '#fafbff', 
                  transition: 'all 0.3s ease', 
                  border: isDark ? '1px solid #3a3a4a' : '1px solid #eaf1ff',
                  textAlign: { xs: 'center', md: 'left' },
                  '&:hover': { 
                    transform: { xs: 'translateY(-5px)', md: 'translateX(10px)' },
                    boxShadow: isDark ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(36, 107, 253, 0.1)',
                    bgcolor: isDark ? '#232336' : '#f0f4ff'
                  } 
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    minWidth: { xs: 'auto', md: 100 },
                    mb: { xs: 1, md: 0 }
                  }}>
                    <Box sx={{ color: '#246bfd', mb: 2, fontSize: { xs: 30, md: 40 } }}>
                      {milestone.icon}
                    </Box>
                    <Typography variant="h5" fontWeight={700} color="primary" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                      {milestone.year}
                    </Typography>
                  </Box>
                  <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography variant="h6" fontWeight={600} sx={{ 
                      mb: 2, 
                      fontSize: { xs: '1.1rem', md: '1.2rem' }, 
                      color: 'text.primary' 
                    }}>
                      {milestone.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ 
                      lineHeight: 1.6, 
                      fontSize: { xs: '1rem', md: '1.1rem' } 
                    }}>
                      {milestone.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Paper>
        </motion.div>

      </Container>
    </Box>
  );
} 