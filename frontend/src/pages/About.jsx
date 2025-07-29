import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <Box sx={{ width: '100vw', bgcolor: 'background.default', py: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h3" align="center" fontWeight={800} gutterBottom sx={{ background: 'linear-gradient(90deg, #8e44ad, #e84393, #246bfd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mb: 4 }}>
            About
          </Typography>
          <Typography align="center" color="text.secondary" sx={{ mb: 6, fontSize: '1.2rem', maxWidth: 700 }}>
            Learn more about the AccioJobs React Playground, our mission, and the team behind it.
          </Typography>
        </motion.div>
        <Paper elevation={4} sx={{ p: 5, borderRadius: 4, bgcolor: 'background.paper', boxShadow: '0 4px 24px 0 #246bfd22', maxWidth: 700, width: '100%' }}>
          <Stack spacing={4}>
            <Box>
              <Typography variant="h5" fontWeight={700} color="primary" sx={{ mb: 1 }}>Our Mission</Typography>
              <Typography color="text.secondary">
                To empower developers to rapidly build, preview, and export React components and pages using the power of AI, with a focus on modern design, seamless user experience, and stateful session persistence.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="primary" sx={{ mb: 1 }}>Platform Overview</Typography>
              <Typography color="text.secondary">
                The AccioJobs Playground is a stateful, AI-driven micro-frontend platform. Authenticated users can generate, preview, tweak, and export React components or full pages. All chat history and code edits are preserved across logins. The platform features a conversational UI, live preview, code export, and session persistence, all wrapped in a modern, responsive design.
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" fontWeight={700} color="primary" sx={{ mb: 1 }}>Credits</Typography>
              <Typography color="text.secondary">
                Inspired by the Workik React Code Generator. Built with the MERN stack, Material UI, Framer Motion, and a passion for developer experience.
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
} 