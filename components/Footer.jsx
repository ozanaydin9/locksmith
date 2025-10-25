'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Stack,
  Link,
  Divider,
  IconButton
} from '@mui/material'
import { 
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  Schedule,
  Security,
  Facebook,
  Instagram,
  Twitter
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const quickLinks = [
    { label: 'Hizmetler', href: '#services' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Hizmet Bölgesi', href: '#map' },
    { label: 'İletişim', href: '#contact' }
  ]

  const services = [
    'Acil Kapı Açma',
    'Anahtar Kopyalama', 
    'Araç Çilingir',
    'Kasa Açma',
    'Kilit Değişimi',
    'Güvenlik Sistemleri'
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#050A1A',
        color: 'white',
        pt: { xs: 6, md: 8 },
        pb: 2,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #F6B93B 50%, transparent 100%)'
        }
      }}
    >
      <Container maxWidth="lg">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #F6B93B 0%, #F8C471 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mb: 2
                  }}
                >
                  🔑 CEM ANAHTAR
                </Typography>
                
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 3, lineHeight: 1.6 }}
                >
                  Kadıköy merkezli profesyonel çilingir hizmetleri. Ertan Ügüt ile güvenilir ve hızlı çözümler. 
                  Acil durumlarınızda 7/24 yanınızdayız.
                </Typography>

                {/* Contact Info */}
                <Stack spacing={1.5}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ fontSize: 18, color: '#F6B93B', mr: 1.5 }} />
                    <Link
                      href="tel:+905352057513"
                      color="inherit"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': { color: '#F6B93B' }
                      }}
                    >
                      <Typography variant="body2">
                        0535 205 75 13
                      </Typography>
                    </Link>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ fontSize: 18, color: '#F6B93B', mr: 1.5 }} />
                    <Link
                      href="mailto:info@cemanahtar.com"
                      color="inherit"
                      sx={{ 
                        textDecoration: 'none',
                        '&:hover': { color: '#F6B93B' }
                      }}
                    >
                      <Typography variant="body2">
                        info@cemanahtar.com
                      </Typography>
                    </Link>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ fontSize: 18, color: '#F6B93B', mr: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      Caferağa Mah. Bahariye Cad. 37 Dk:40 Kadıköy, İstanbul
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Schedule sx={{ fontSize: 18, color: '#F6B93B', mr: 1.5 }} />
                    <Typography variant="body2" color="text.secondary">
                      7/24 Hizmet
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} sm={6} md={2}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: '#F6B93B',
                    mb: 2
                  }}
                >
                  Hızlı Menü
                </Typography>
                
                <Stack spacing={1}>
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      component="button"
                      onClick={() => scrollToSection(link.href)}
                      color="text.secondary"
                      sx={{
                        textAlign: 'left',
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: '#F6B93B'
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Services */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: '#F6B93B',
                    mb: 2
                  }}
                >
                  Hizmetlerimiz
                </Typography>
                
                <Stack spacing={1}>
                  {services.map((service, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        transition: 'color 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#F6B93B'
                        }
                      }}
                      onClick={() => scrollToSection('#services')}
                    >
                      {service}
                    </Typography>
                  ))}
                </Stack>
              </motion.div>
            </Grid>

            {/* Emergency Contact */}
            <Grid item xs={12} md={3}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: '#F6B93B',
                    mb: 2
                  }}
                >
                  Acil İletişim
                </Typography>
                
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, rgba(246, 185, 59, 0.1) 0%, rgba(15, 27, 60, 0.8) 100%)',
                    border: '1px solid rgba(246, 185, 59, 0.3)',
                    textAlign: 'center',
                    mb: 3
                  }}
                >
                  <Security sx={{ fontSize: 32, color: '#F6B93B', mb: 1 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    Kapıda kaldınız mı? Hemen arayın!
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#F6B93B',
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    15 dk içinde yanınızdayız
                  </Typography>
                  
                  <Stack direction="row" spacing={1} justifyContent="center">
                    <IconButton
                      href="tel:+905352057513"
                      sx={{
                        bgcolor: '#007BFF',
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#0056B3',
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      <Phone />
                    </IconButton>
                    
                    <IconButton
                      href="https://wa.me/905352057513?text=Merhaba%20CEM%20ANAHTAR%20çilingir%20hizmeti%20istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        bgcolor: '#25D366',
                        color: 'white',
                        '&:hover': {
                          bgcolor: '#128C7E',
                          transform: 'scale(1.1)'
                        }
                      }}
                    >
                      <WhatsApp />
                    </IconButton>
                  </Stack>
                </Box>

                {/* Social Media */}
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: 'center' }}
                >
                  Bizi takip edin:
                </Typography>
                
                <Stack direction="row" spacing={1} justifyContent="center">
                  <IconButton
                    href="#" // TODO: Add actual social media links
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: '#F6B93B',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Facebook />
                  </IconButton>
                  
                  <IconButton
                    href="#" // TODO: Add actual social media links
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: '#F6B93B',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Instagram />
                  </IconButton>
                  
                  <IconButton
                    href="#" // TODO: Add actual social media links
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: '#F6B93B',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    <Twitter />
                  </IconButton>
                </Stack>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Divider sx={{ my: 4, borderColor: 'rgba(246, 185, 59, 0.2)' }} />
          
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: { xs: 'center', md: 'left' } }}
              >
                © 2024 CEM ANAHTAR - Ertan Ügüt. Tüm hakları saklıdır.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                spacing={3}
                justifyContent={{ xs: 'center', md: 'flex-end' }}
                flexWrap="wrap"
              >
                <Link
                  href="#"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#F6B93B' }
                  }}
                >
                  Gizlilik Politikası
                </Link>
                <Link
                  href="#"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#F6B93B' }
                  }}
                >
                  Kullanım Şartları
                </Link>
                <Link
                  href="#"
                  color="text.secondary"
                  sx={{
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#F6B93B' }
                  }}
                >
                  KVKK
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer
