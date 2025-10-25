'use client'

import { 
  Fab, 
  Box, 
  Typography, 
  Zoom,
  useScrollTrigger,
  Stack,
  Tooltip
} from '@mui/material'
import { 
  WhatsApp, 
  Phone 
} from '@mui/icons-material'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const WhatsAppFAB = () => {
  const [showLabel, setShowLabel] = useState(false)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  // Show label animation on mount and periodically
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(true)
    }, 3000)

    const interval = setInterval(() => {
      setShowLabel(true)
      setTimeout(() => setShowLabel(false), 3000)
    }, 15000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappUrl = 'https://wa.me/905352057513?text=Merhaba%20CEM%20ANAHTAR%20çilingir%20hizmeti%20istiyorum'
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+905352057513'
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, md: 24 },
        right: { xs: 16, md: 24 },
        zIndex: 1000,
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: 2
      }}
    >
      {/* Phone FAB */}
      <Zoom in={trigger} timeout={300}>
        <Box sx={{ position: 'relative' }}>
          <Tooltip title="Hemen Ara" placement="left">
            <Fab
              color="primary"
              onClick={handlePhoneClick}
              sx={{
                bgcolor: '#007BFF',
                '&:hover': {
                  bgcolor: '#0056B3',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease-in-out',
                boxShadow: '0 4px 20px rgba(0, 123, 255, 0.4)',
                width: 56,
                height: 56
              }}
            >
              <Phone sx={{ fontSize: 28 }} />
            </Fab>
          </Tooltip>
        </Box>
      </Zoom>

      {/* WhatsApp FAB with animated label */}
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {/* Animated Label */}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{ marginRight: 12 }}
            >
              <Box
                sx={{
                  bgcolor: '#25D366',
                  color: 'white',
                  px: 2,
                  py: 1,
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.3)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    right: -6,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid #25D366',
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent'
                  }
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap'
                  }}
                >
                  WhatsApp ile Mesaj Gönder
                </Typography>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp FAB */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            delay: 1,
            type: "spring",
            stiffness: 260,
            damping: 20 
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Fab
            color="primary"
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setShowLabel(true)}
            onMouseLeave={() => setShowLabel(false)}
            sx={{
              bgcolor: '#25D366',
              '&:hover': {
                bgcolor: '#128C7E',
                boxShadow: '0 6px 25px rgba(37, 211, 102, 0.5)'
              },
              transition: 'all 0.3s ease-in-out',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
              width: 64,
              height: 64,
              position: 'relative'
            }}
          >
            <WhatsApp sx={{ fontSize: 32 }} />
          </Fab>
        </motion.div>
      </Box>

      {/* Mobile-specific call-to-action */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(8, 18, 41, 0.95)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(246, 185, 59, 0.2)',
          p: 2,
          zIndex: 999
        }}
      >
        <Stack direction="row" spacing={1}>
          <motion.div
            style={{ flex: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Fab
              variant="extended"
              onClick={handlePhoneClick}
              sx={{
                bgcolor: '#007BFF',
                color: 'white',
                width: '100%',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#0056B3'
                }
              }}
            >
              <Phone sx={{ mr: 1 }} />
              Hemen Ara
            </Fab>
          </motion.div>
          
          <motion.div
            style={{ flex: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Fab
              variant="extended"
              onClick={handleWhatsAppClick}
              sx={{
                bgcolor: '#25D366',
                color: 'white',
                width: '100%',
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#128C7E'
                }
              }}
            >
              <WhatsApp sx={{ mr: 1 }} />
              WhatsApp
            </Fab>
          </motion.div>
        </Stack>
      </Box>
    </Box>
  )
}

export default WhatsAppFAB
