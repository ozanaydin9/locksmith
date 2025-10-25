'use client'

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F6B93B', // Gold accent
      light: '#F8C471',
      dark: '#D4AC0D',
      contrastText: '#081229',
    },
    secondary: {
      main: '#081229', // Dark navy
      light: '#1B2951',
      dark: '#050A1A',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#081229', // Dark navy background
      paper: '#0F1B3C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
    error: {
      main: '#F44336',
    },
    warning: {
      main: '#FF9800',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#4CAF50',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(246, 185, 59, 0.3)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #F6B93B 0%, #D4AC0D 100%)',
          color: '#081229',
          '&:hover': {
            background: 'linear-gradient(135deg, #F8C471 0%, #F6B93B 100%)',
          },
        },
        outlinedPrimary: {
          borderColor: '#F6B93B',
          color: '#F6B93B',
          '&:hover': {
            borderColor: '#F8C471',
            backgroundColor: 'rgba(246, 185, 59, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#0F1B3C',
          border: '1px solid rgba(246, 185, 59, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 32px rgba(246, 185, 59, 0.2)',
            borderColor: 'rgba(246, 185, 59, 0.3)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(8, 18, 41, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(246, 185, 59, 0.1)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': {
              borderColor: 'rgba(246, 185, 59, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(246, 185, 59, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#F6B93B',
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #F6B93B 0%, #D4AC0D 100%)',
          color: '#081229',
          '&:hover': {
            background: 'linear-gradient(135deg, #F8C471 0%, #F6B93B 100%)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

export default theme
