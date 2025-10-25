'use client'

import { useState, useEffect } from 'react'
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { 
  Phone, 
  WhatsApp, 
  Menu as MenuIcon,
  KeyboardArrowDown 
} from '@mui/icons-material'
import { motion, useAnimation } from 'framer-motion'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// Simple Lottie Header Logo
const AnimatedHeaderLogo = () => (
  <DotLottieReact
    src="/assets/l2.lottie"
    loop={true}
    autoplay={true}
    style={{ 
      width: '68px', 
      height: '68px'
    }}
  />
)

// Perfect Animated Key and Lock SVG Components - Optimized Positioning
const AnimatedKey = ({ isUnlocking }) => (
  <motion.svg
    width="220"
    height="220"
    viewBox="0 0 220 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ x: -80, rotate: 0, opacity: 0 }}
    animate={{ 
      x: isUnlocking ? 25 : 0, 
      rotate: isUnlocking ? 30 : 0,
      opacity: 1
    }}
    transition={{ 
      duration: 2, 
      ease: "easeInOut",
      delay: 1,
      opacity: { duration: 0.8, delay: 0.5 }
    }}
  >
    {/* Key shaft - centered */}
    <motion.rect
      x="55"
      y="105"
      width="80"
      height="15"
      rx="8"
      fill="url(#keyGradient)"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    />
    
    {/* Key head (circular part) - centered */}
    <motion.circle
      cx="65"
      cy="112"
      r="28"
      fill="none"
      stroke="url(#keyStrokeGradient)"
      strokeWidth="6"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    />
    
    {/* Inner circle detail */}
    <motion.circle
      cx="65"
      cy="112"
      r="16"
      fill="none"
      stroke="#F8C471"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    
    {/* Key teeth - perfectly positioned */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
    >
      <rect x="130" y="95" width="12" height="12" rx="2" fill="#F6B93B" />
      <rect x="130" y="110" width="16" height="10" rx="2" fill="#F6B93B" />
      <rect x="130" y="123" width="10" height="6" rx="2" fill="#F6B93B" />
      <rect x="142" y="98" width="6" height="8" rx="1" fill="#D4AC0D" />
    </motion.g>
    
    {/* Beautiful sparkle effects - contained within bounds */}
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isUnlocking ? [0, 1, 0] : 0,
        scale: isUnlocking ? [0, 1.2, 0] : 0,
        rotate: isUnlocking ? [0, 360] : 0
      }}
      transition={{ 
        duration: 2, 
        repeat: isUnlocking ? Infinity : 0,
        repeatDelay: 0.5
      }}
    >
      <circle cx="160" cy="80" r="3" fill="#F8C471" />
      <circle cx="170" cy="140" r="2.5" fill="#F8C471" />
      <circle cx="150" cy="160" r="2" fill="#F8C471" />
      <circle cx="180" cy="100" r="2" fill="#FFD700" />
      <circle cx="140" cy="70" r="1.5" fill="#FFD700" />
    </motion.g>
    
    {/* Perfect centered glow effect */}
    <motion.circle
      cx="65"
      cy="112"
      r="35"
      fill="none"
      stroke="#F6B93B"
      strokeWidth="2"
      opacity="0"
      initial={{ scale: 1 }}
      animate={{ 
        scale: isUnlocking ? [1, 1.2, 1] : 1,
        opacity: isUnlocking ? [0, 0.4, 0] : 0
      }}
      transition={{ 
        duration: 1.5, 
        repeat: isUnlocking ? Infinity : 0,
        delay: 2
      }}
    />
    
    {/* Outer glow ring */}
    <motion.circle
      cx="65"
      cy="112"
      r="50"
      fill="none"
      stroke="#F6B93B"
      strokeWidth="1"
      opacity="0"
      initial={{ scale: 1 }}
      animate={{ 
        scale: isUnlocking ? [1, 1.4, 1] : 1,
        opacity: isUnlocking ? [0, 0.2, 0] : 0
      }}
      transition={{ 
        duration: 2, 
        repeat: isUnlocking ? Infinity : 0,
        delay: 2.2
      }}
    />
    
    {/* Gradient definitions */}
    <defs>
      <linearGradient id="keyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F6B93B" />
        <stop offset="50%" stopColor="#F8C471" />
        <stop offset="100%" stopColor="#D4AC0D" />
      </linearGradient>
      <linearGradient id="keyStrokeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F6B93B" />
        <stop offset="100%" stopColor="#FFD700" />
      </linearGradient>
    </defs>
  </motion.svg>
)

const AnimatedLock = ({ isUnlocking }) => (
  <motion.svg
    width="160"
    height="200"
    viewBox="0 0 160 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2 }}
  >
    {/* Lock body - centered */}
    <motion.rect
      x="40"
      y="90"
      width="80"
      height="90"
      rx="15"
      fill="url(#lockGradient)"
      stroke="#F6B93B"
      strokeWidth="3"
      initial={{ y: 105 }}
      animate={{ y: 90 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
    
    {/* Lock body shadow/depth */}
    <motion.rect
      x="45"
      y="95"
      width="70"
      height="80"
      rx="12"
      fill="rgba(8, 18, 41, 0.8)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    />
    
    {/* Lock shackle - centered */}
    <motion.path
      d="M55 90 C55 50, 105 50, 105 90"
      fill="none"
      stroke="url(#shackleGradient)"
      strokeWidth="8"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ 
        pathLength: 1,
        rotate: isUnlocking ? [0, 6, -6, 0] : 0
      }}
      transition={{ 
        pathLength: { duration: 1.2, delay: 0.8 },
        rotate: { 
          duration: 0.6, 
          delay: isUnlocking ? 2.5 : 0,
          repeat: isUnlocking ? 3 : 0
        }
      }}
    />
    
    {/* Keyhole - centered */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <circle cx="80" cy="125" r="12" fill="#F6B93B" />
      <rect x="74" y="125" width="12" height="18" fill="#F6B93B" />
      <circle cx="80" cy="125" r="8" fill="#FFD700" />
      <rect x="76" y="125" width="8" height="14" fill="#FFD700" />
    </motion.g>
    
    {/* Lock mechanism details */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.8 }}
    >
      <rect x="50" y="95" width="20" height="4" rx="2" fill="#F6B93B" opacity="0.6" />
      <rect x="90" y="95" width="20" height="4" rx="2" fill="#F6B93B" opacity="0.6" />
      <rect x="50" y="155" width="60" height="3" rx="1.5" fill="#F6B93B" opacity="0.4" />
    </motion.g>
    
    {/* Unlock indicator - enhanced */}
    <motion.text
      x="80"
      y="195"
      textAnchor="middle"
      fill="#4CAF50"
      fontSize="16"
      fontWeight="bold"
      initial={{ opacity: 0, y: 200 }}
      animate={{ 
        opacity: isUnlocking ? 1 : 0,
        y: isUnlocking ? 195 : 200,
        scale: isUnlocking ? [1, 1.2, 1] : 1
      }}
      transition={{ 
        duration: 0.6, 
        delay: 3,
        scale: { duration: 0.4, repeat: 2 }
      }}
    >
      AÇILDI! ✓
    </motion.text>
    
    {/* Success glow */}
    <motion.circle
      cx="80"
      cy="130"
      r="60"
      fill="none"
      stroke="#4CAF50"
      strokeWidth="3"
      opacity="0"
      initial={{ scale: 0 }}
      animate={{ 
        scale: isUnlocking ? [0, 1.2, 0] : 0,
        opacity: isUnlocking ? [0, 0.6, 0] : 0
      }}
      transition={{ 
        duration: 1, 
        delay: isUnlocking ? 3 : 0
      }}
    />
    
    {/* Gradient definitions */}
    <defs>
      <linearGradient id="lockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F1B3C" />
        <stop offset="50%" stopColor="#1B2951" />
        <stop offset="100%" stopColor="#081229" />
      </linearGradient>
      <linearGradient id="shackleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F6B93B" />
        <stop offset="50%" stopColor="#FFD700" />
        <stop offset="100%" stopColor="#F6B93B" />
      </linearGradient>
    </defs>
  </motion.svg>
)

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [isUnlocking, setIsUnlocking] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const controls = useAnimation()

  useEffect(() => {
    // Start the unlocking animation after component mounts
    const timer = setTimeout(() => {
      setIsUnlocking(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    handleMenuClose()
  }

  const menuItems = [
    { label: 'Hizmetler', id: 'services' },
    { label: 'Hakkımızda', id: 'about' },
    { label: 'Hizmet Bölgesi', id: 'map' },
    { label: 'İletişim', id: 'contact' },
  ]

  return (
    <>
      {/* Clean Professional Header */}
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{
          background: 'rgba(8, 18, 41, 0.98)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(246, 185, 59, 0.2)'
        }}
      >
        <Toolbar sx={{ py: 1.5 }}>
          {/* Beautiful Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <Box sx={{ marginRight: '16px' }}>
              <AnimatedHeaderLogo />
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ position: 'relative' }}
              >
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #F6B93B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: '0.5px',
                      display: 'inline-block'
                    }}
                  >
                    CEM ANAHTAR
                  </Typography>
                  
                  <Typography 
                    variant="caption" 
                    component="span"
                    sx={{ 
                      position: 'absolute',
                      bottom: '-15px',
                      right: '-15px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                      letterSpacing: '0.2px',
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase'
                    }}
                  >
                    Ertan Ügüt
                  </Typography>
                </Box>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                <Typography 
                  variant="caption" 
                  sx={{ 
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.9)',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap'
                  }}
                >
                  7/24 Hizmet • 0535 205 75 13
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
          
          {/* Navigation Menu */}
          {isMobile ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{
                  background: 'rgba(246, 185, 59, 0.1)',
                  border: '1px solid rgba(246, 185, 59, 0.3)',
                  '&:hover': {
                    background: 'rgba(246, 185, 59, 0.2)',
                  }
                }}
              >
                <MenuIcon sx={{ color: '#F6B93B' }} />
              </IconButton>
            </motion.div>
          ) : (
            <Stack direction="row" spacing={1}>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <Button
                    color="inherit"
                    onClick={() => scrollToSection(item.id)}
                    sx={{ 
                      color: 'white',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-100%',
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(90deg, transparent, rgba(246, 185, 59, 0.2), transparent)',
                        transition: 'left 0.5s ease'
                      },
                      '&:hover': {
                        color: '#F6B93B',
                        background: 'rgba(246, 185, 59, 0.1)',
                        '&::before': {
                          left: '100%'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Stack>
          )}
          
          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            PaperProps={{
              sx: {
                background: 'linear-gradient(135deg, #0F1B3C 0%, #081229 100%)',
                border: '1px solid rgba(246, 185, 59, 0.3)',
                borderRadius: 2,
                mt: 1
              }
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem 
                key={item.id} 
                onClick={() => scrollToSection(item.id)}
                sx={{
                  color: 'white',
                  '&:hover': {
                    background: 'rgba(246, 185, 59, 0.1)',
                    color: '#F6B93B'
                  }
                }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #081229 0%, #0F1B3C 50%, #081229 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 70%, rgba(246, 185, 59, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none',
          }
        }}
      >
        <Container maxWidth="lg" sx={{ overflow: 'visible' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 4, md: 8 },
              py: { xs: 8, md: 12 }
            }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ position: 'relative', marginBottom: '3rem' }}
              >
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                      background: 'linear-gradient(135deg, #FFFFFF 0%, #F6B93B 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      display: 'inline-block'
                    }}
                  >
                    CEM ANAHTAR
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      position: 'absolute',
                      bottom: { xs: '-15px', md: '-20px' },
                      right: { xs: '-20px', md: '-25px' },
                      fontSize: { xs: '1.3rem', md: '1.5rem' },
                      fontWeight: 600,
                      color: 'rgba(255, 255, 255, 0.9)',
                      letterSpacing: '0.3px',
                      whiteSpace: 'nowrap',
                      textTransform: 'uppercase'
                    }}
                  >
                    Ertan Ügüt
                  </Typography>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    mb: 3,
                    color: 'text.secondary',
                    fontWeight: 400
                  }}
                >
                  Hızlı, Güvenilir ve Profesyonel Çözümler
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    maxWidth: '500px',
                    mx: { xs: 'auto', md: 0 }
                  }}
                >
                  Kadıköy merkezli profesyonel çilingir hizmetleri. 
                  Kapı açma, anahtar kopyalama, araç çilingir ve güvenlik sistemleri.
                </Typography>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    mb: 4
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Phone />}
                    href="tel:+905352057513"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      minWidth: '200px'
                    }}
                  >
                    Hemen Ara
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsApp />}
                    href="https://wa.me/905352057513?text=Merhaba%20CEM%20ANAHTAR%20çilingir%20hizmeti%20istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      minWidth: '200px',
                      borderColor: '#25D366',
                      color: '#25D366',
                      '&:hover': {
                        borderColor: '#128C7E',
                        backgroundColor: 'rgba(37, 211, 102, 0.1)'
                      }
                    }}
                  >
                    WhatsApp
                  </Button>
                </Stack>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Stack
                  direction="row"
                  spacing={4}
                  sx={{ 
                    justifyContent: { xs: 'center', md: 'flex-start' },
                    flexWrap: 'wrap',
                    gap: 2
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#F6B93B', fontWeight: 700 }}>
                      15 dk
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Ortalama Varış
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#F6B93B', fontWeight: 700 }}>
                      7/24
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Hizmet
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ color: '#F6B93B', fontWeight: 700 }}>
                      %100
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Memnuniyet
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Box>

            {/* Right Content - Animated Key & Lock */}
            <Box 
              sx={{ 
                flex: 1, 
                display: 'flex', 
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                minHeight: { xs: '400px', md: '500px' },
                width: '100%',
                overflow: 'visible' // Allow animation to overflow
              }}
            >
              <Box 
                sx={{ 
                  position: 'relative',
                  width: { xs: '360px', md: '450px' },
                  height: { xs: '360px', md: '450px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  overflow: 'visible' // Allow animation to overflow
                }}
              >
                {/* Lock - perfectly centered */}
                <Box sx={{ 
                  position: 'absolute', 
                  right: { xs: '40px', md: '60px' }, 
                  top: { xs: '60px', md: '80px' },
                  zIndex: 1
                }}>
                  <AnimatedLock isUnlocking={isUnlocking} />
                </Box>
                
                {/* Key - perfectly aligned with lock */}
                <Box sx={{ 
                  position: 'absolute', 
                  zIndex: 2,
                  left: { xs: '20px', md: '40px' },
                  top: { xs: '80px', md: '100px' }
                }}>
                  <AnimatedKey isUnlocking={isUnlocking} />
                </Box>

                {/* Background glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  transition={{ duration: 2, delay: 1 }}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(246, 185, 59, 0.2) 0%, transparent 70%)',
                    zIndex: 0
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              textAlign: 'center'
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <KeyboardArrowDown 
                sx={{ 
                  fontSize: '2rem', 
                  color: '#F6B93B',
                  cursor: 'pointer'
                }}
                onClick={() => scrollToSection('services')}
              />
            </motion.div>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'text.secondary',
                mt: 1,
                cursor: 'pointer'
              }}
              onClick={() => scrollToSection('services')}
            >
              Hizmetlerimizi Keşfedin
            </Typography>
          </motion.div>
        </Container>
      </Box>
    </>
  )
}

export default Hero
