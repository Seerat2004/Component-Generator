import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Paper, 
  Stack, 
  Grid, 
  TextField, 
  Button, 
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SupportIcon from '@mui/icons-material/Support';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        px: { xs: 2, sm: 3, md: 4 },
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
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
            mb: 6,
            fontSize: { xs: '2.5rem', md: '4rem' },
            lineHeight: 1.2,
            textShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            Get In Touch
          </Typography>
          <Typography align="center" sx={{ 
            mb: 8, 
            fontSize: { xs: '1.1rem', md: '1.4rem' }, 
            maxWidth: 800,
            lineHeight: 1.6,
            px: 2,
            color: 'rgba(255,255,255,0.9)',
            fontWeight: 300
          }}>
            Have questions, feedback, or need support? We'd love to hear from you. Our team is here to help!
          </Typography>
        </motion.div>

        {/* Contact Form & Info */}
        <Box sx={{ mb: 12, px: 2, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={1}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
              Send us a Message
            </Typography>
          </motion.div>
          
          <Grid container spacing={{ xs: 3, md: 6 }} sx={{ justifyContent: 'center' }}>
            {/* Contact Form */}
            <Grid xs={12} lg={8}>
              <motion.div variants={fadeInUp} custom={2}>
                <Paper elevation={8} sx={{ 
                  p: 6, 
                  borderRadius: 6, 
                  bgcolor: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '800px',
                  display: 'flex',
                  flexDirection: 'column',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #246bfd, #7c3aed)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.5s ease'
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)'
                  }
                }}>
                  <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      mb: 2, 
                      background: 'linear-gradient(135deg, #246bfd, #1a4db8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontSize: { xs: '1.8rem', md: '2.2rem' }
                    }}>
                      Send us a Message
                    </Typography>
                    <Typography color="text.secondary" sx={{ 
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      maxWidth: 600,
                      mx: 'auto'
                    }}>
                      Fill out the form below and we'll get back to you as soon as possible
                    </Typography>
                  </Box>
                  
                  {success && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Alert severity="success" sx={{ 
                        mb: 4,
                        borderRadius: 3,
                        fontSize: '1.1rem',
                        '& .MuiAlert-icon': {
                          fontSize: '1.5rem'
                        }
                      }}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>
                          Message Sent Successfully!
                        </Typography>
                        Thank you for your message! We'll get back to you within 24 hours.
                      </Alert>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Stack spacing={4} sx={{ maxWidth: 600, mx: 'auto', flex: 1, justifyContent: 'space-between', height: '100%' }}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="Enter your full name"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            },
                            '&.Mui-focused': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: '1rem',
                            fontWeight: 500
                          }
                        }}
                      />
                      
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="Enter your email address"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            },
                            '&.Mui-focused': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: '1rem',
                            fontWeight: 500
                          }
                        }}
                      />
                      
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                        placeholder="What is this message about?"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            },
                            '&.Mui-focused': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: '1rem',
                            fontWeight: 500
                          }
                        }}
                      />
                      
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                        placeholder="Tell us more about your inquiry, question, or feedback..."
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 3,
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            },
                            '&.Mui-focused': {
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#246bfd',
                                borderWidth: '2px'
                              }
                            }
                          },
                          '& .MuiInputLabel-root': {
                            fontSize: '1rem',
                            fontWeight: 500
                          }
                        }}
                      />

                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        gap: 2,
                        pt: 2,
                        mt: 'auto'
                      }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          disabled={loading}
                          startIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
                          sx={{
                            background: 'linear-gradient(135deg, #246bfd, #1a4db8)',
                            color: '#fff',
                            fontWeight: 700,
                            px: 8,
                            py: 2.5,
                            borderRadius: 4,
                            fontSize: '1.2rem',
                            boxShadow: '0 8px 25px rgba(36, 107, 253, 0.3)',
                            transition: 'all 0.4s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover': { 
                              background: 'linear-gradient(135deg, #1a4db8, #0f3a8a)',
                              boxShadow: '0 12px 35px rgba(36, 107, 253, 0.4)',
                              transform: 'translateY(-3px) scale(1.02)'
                            },
                            '&:disabled': {
                              background: 'linear-gradient(135deg, #9ca3af, #6b7280)',
                              transform: 'none'
                            }
                          }}
                        >
                          {loading ? 'Sending Message...' : 'Send Message'}
                        </Button>
                        
                        <Typography variant="body2" color="text.secondary" sx={{ 
                          textAlign: 'center',
                          fontSize: '0.9rem',
                          maxWidth: 400
                        }}>
                          By submitting this form, you agree to our privacy policy and terms of service.
                        </Typography>
                      </Box>
                    </Stack>
                  </form>
                </Paper>
              </motion.div>
            </Grid>

            {/* Contact Information */}
            <Grid xs={12} lg={4}>
              <motion.div variants={fadeInUp} custom={3}>
                <Stack spacing={4}>
                  <Paper elevation={8} sx={{ 
                    p: 5, 
                    borderRadius: 6, 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 25px 70px rgba(0,0,0,0.15)'
                    }
                  }}>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 4, color: '#246bfd' }}>
                      Contact Information
                    </Typography>
                    <Stack spacing={4}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <EmailIcon sx={{ color: '#246bfd', fontSize: 40 }} />
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Email</Typography>
                          <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>hello@componentgenerator.com</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <PhoneIcon sx={{ color: '#246bfd', fontSize: 40 }} />
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Phone</Typography>
                          <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>+1 (555) 123-4567</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <LocationOnIcon sx={{ color: '#246bfd', fontSize: 40 }} />
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Location</Typography>
                          <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>Component Generator HQ, Tech City</Typography>
                        </Box>
                      </Box>
                    </Stack>
                  </Paper>

                  <Paper elevation={8} sx={{ 
                    p: 5, 
                    borderRadius: 6, 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 25px 70px rgba(0,0,0,0.15)'
                    }
                  }}>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 4, color: '#7c3aed' }}>
                      Support Hours
                    </Typography>
                    <Stack spacing={3}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Monday - Friday</Typography>
                        <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>9:00 AM - 6:00 PM EST</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Saturday</Typography>
                        <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>10:00 AM - 4:00 PM EST</Typography>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography fontWeight={600} sx={{ fontSize: '1.1rem', mb: 1 }}>Sunday</Typography>
                        <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>Emergency Support Only</Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Quick Contact Options */}
        <Box sx={{ mb: 12, px: 2, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={4}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
              Quick Contact Options
            </Typography>
          </motion.div>
          
          <Grid container spacing={5} sx={{ px: 2, justifyContent: 'center' }}>
            {[
              { 
                icon: <EmailIcon />, 
                title: 'Email Support', 
                desc: 'Get help via email', 
                action: 'hello@componentgenerator.com', 
                color: '#246bfd',
                gradient: 'linear-gradient(135deg, #246bfd, #1a4db8)'
              },
              { 
                icon: <SupportIcon />, 
                title: 'Live Chat', 
                desc: 'Chat with our team', 
                action: 'Start Chat', 
                color: '#7c3aed',
                gradient: 'linear-gradient(135deg, #7c3aed, #5b21b6)'
              },
              { 
                icon: <PhoneIcon />, 
                title: 'Phone Support', 
                desc: 'Call us directly', 
                action: '+1 (555) 123-4567', 
                color: '#10b981',
                gradient: 'linear-gradient(135deg, #10b981, #059669)'
              }
            ].map((option, index) => (
              <Grid xs={12} md={4} key={index}>
                <motion.div
                  variants={fadeInUp}
                  custom={5 + index}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Paper elevation={8} sx={{ 
                    p: 5, 
                    borderRadius: 6, 
                    textAlign: 'center', 
                    bgcolor: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer', 
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
                      background: option.gradient,
                      transform: 'scaleX(0)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:hover::before': {
                      transform: 'scaleX(1)'
                    },
                    '&:hover': { 
                      transform: 'translateY(-12px) scale(1.02)',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.15)'
                    } 
                  }}>
                    <Box sx={{ 
                      width: 80, 
                      height: 80, 
                      borderRadius: '50%', 
                      background: option.gradient,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 3,
                      boxShadow: `0 8px 25px ${option.color}40`
                    }}>
                      <Box sx={{ color: '#fff', fontSize: 36 }}>
                        {option.icon}
                      </Box>
                    </Box>
                    <Typography variant="h5" fontWeight={600} sx={{ 
                      mb: 2, 
                      fontSize: '1.3rem',
                      background: option.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {option.title}
                    </Typography>
                    <Typography color="text.secondary" sx={{ 
                      mb: 3, 
                      fontSize: '1.1rem', 
                      lineHeight: 1.6 
                    }}>
                      {option.desc}
                    </Typography>
                    <Chip label={option.action} sx={{ 
                      bgcolor: option.color, 
                      color: '#fff', 
                      fontWeight: 600,
                      fontSize: '1rem',
                      px: 3,
                      py: 1,
                      borderRadius: 3
                    }} />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ mb: 12, px: 2, width: '100%' }}>
          <motion.div variants={fadeInUp} custom={8}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
              Frequently Asked Questions
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeInUp} custom={9}>
            <Paper elevation={8} sx={{ 
              bgcolor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              {[
                {
                  question: 'How does the AI code generation work?',
                  answer: 'Our AI analyzes your prompts and generates React components using advanced language models. You can refine the output through conversation and see live previews instantly.'
                },
                {
                  question: 'Is my code and data secure?',
                  answer: 'Yes! We use industry-standard encryption and security practices. Your code is stored securely and only accessible to you. We never share your data with third parties.'
                },
                {
                  question: 'Can I export my generated components?',
                  answer: 'Absolutely! You can copy the code directly or download it as a ZIP file containing all the necessary files for your project.'
                },
                {
                  question: 'Do you offer team collaboration features?',
                  answer: 'Yes, we support team collaboration with shared sessions, real-time editing, and project management features for teams.'
                },
                {
                  question: 'What if I need help with the platform?',
                  answer: 'We offer comprehensive support through email, live chat, and documentation. Our team is always ready to help you get the most out of the platform.'
                }
              ].map((faq, index) => (
                <Accordion key={index} sx={{ 
                  '&:before': { display: 'none' },
                  '& .MuiAccordionSummary-root': {
                    px: 4,
                    py: 2
                  },
                  '& .MuiAccordionDetails-root': {
                    px: 4,
                    pb: 3
                  }
                }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600} sx={{ fontSize: '1.1rem' }}>{faq.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '1rem' }}>{faq.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </motion.div>
        </Box>

        {/* Social Media & Follow Us */}
        <Box sx={{ width: '100%' }}>
          <motion.div variants={fadeInUp} custom={10}>
            <Typography variant="h3" align="center" fontWeight={700} sx={{ mb: 8, fontSize: { xs: '2rem', md: '2.5rem' }, color: '#fff' }}>
              Follow Us
            </Typography>
          </motion.div>
          
          <motion.div variants={fadeInUp} custom={11}>
            <Paper elevation={8} sx={{ 
              p: 6, 
              borderRadius: 6, 
              bgcolor: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <Typography color="text.secondary" sx={{ mb: 6, fontSize: '1.2rem', lineHeight: 1.6 }}>
                Stay updated with the latest features, tutorials, and community highlights
              </Typography>
              <Stack direction="row" spacing={4} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
                {[
                  { icon: <TwitterIcon />, label: 'Twitter', color: '#1DA1F2' },
                  { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#0077B5' },
                  { icon: <GitHubIcon />, label: 'GitHub', color: '#333' }
                ].map((social, index) => (
                  <Button
                    key={index}
                    variant="outlined"
                    startIcon={social.icon}
                    sx={{
                      borderColor: social.color,
                      color: social.color,
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': { 
                        bgcolor: social.color, 
                        color: '#fff',
                        transform: 'translateY(-3px)',
                        boxShadow: `0 6px 20px 0 ${social.color}40`
                      }
                    }}
                  >
                    {social.label}
                  </Button>
                ))}
              </Stack>
            </Paper>
          </motion.div>
        </Box>

      </Container>
    </Box>
  );
} 