import React from 'react';
import { Box, Typography, Container, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';
import PreviewIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const features = [
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: '#246bfd', mb: 2 }} />, title: 'AI-Driven Generation', desc: 'Generate React components and pages with natural language prompts.'
  },
  {
    icon: <PreviewIcon sx={{ fontSize: 48, color: '#7c3aed', mb: 2 }} />, title: 'Live Preview', desc: 'See your components rendered instantly as micro-frontends.'
  },
  {
    icon: <ChatIcon sx={{ fontSize: 48, color: '#246bfd', mb: 2 }} />, title: 'Conversational UI', desc: 'Chat with the AI to iteratively refine, tweak, and improve your components.'
  },
  {
    icon: <DownloadIcon sx={{ fontSize: 48, color: '#7c3aed', mb: 2 }} />, title: 'Export & Download', desc: 'Copy or download your code as a .zip for easy integration.'
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: 48, color: '#246bfd', mb: 2 }} />, title: 'Session Persistence', desc: 'All chat and code history is saved and resumes on login.'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 48, color: '#7c3aed', mb: 2 }} />, title: 'Modern UI/UX', desc: 'Sleek, responsive design with light/dark mode, gradients, and glassmorphism.'
  },
];

export default function Features() {
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.default', py: { xs: 6, md: 10 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h3" align="center" fontWeight={800} gutterBottom sx={{ background: 'linear-gradient(90deg, #8e44ad, #e84393, #246bfd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: { xs: 3, md: 4 }, fontSize: { xs: '2rem', md: '3rem' } }}>
            Features
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: { xs: 4, md: 6 }, fontSize: { xs: '1rem', md: '1.2rem' }, maxWidth: 700, px: { xs: 2, md: 0 } }}>
            The Component Generator is a stateful, AI-driven micro-frontend platform. Authenticated users can generate, preview, tweak, and export React components or full pages. All chat history and code edits are preserved across logins.
          </Typography>
        </motion.div>
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="center">
          {features.map((f, i) => (
            <Grid xs={12} md={6} lg={4} sx={{ display: 'flex', justifyContent: 'center' }} key={f.title}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ width: '100%', maxWidth: 420, margin: '0 auto' }}
              >
                <Paper elevation={4} sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, minHeight: { xs: 180, md: 200 }, bgcolor: 'background.paper', color: 'text.primary', display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: `4px solid ${i % 2 === 0 ? '#246bfd' : '#7c3aed'}` }}>
                  {f.icon}
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>{f.title}</Typography>
                  <Typography align="center" color="text.secondary">{f.desc}</Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 