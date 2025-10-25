'use client'

import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Stack,
  Alert,
  CircularProgress,
  Divider
} from '@mui/material'
import { 
  Send,
  Phone,
  WhatsApp,
  Email,
  LocationOn,
  Schedule
} from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const ContactForm = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    consent: false
  })
  
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  })

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.message) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Lütfen tüm alanları doldurun.'
      })
      return
    }

    if (!formData.consent) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Lütfen kişisel verilerin işlenmesine izin verin.'
      })
      return
    }

    setFormStatus({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus({
          loading: false,
          success: true,
          error: null
        })
        setFormData({
          name: '',
          phone: '',
          message: '',
          consent: false
        })
      } else {
        throw new Error(result.error || 'Bir hata oluştu')
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: error.message || 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '0535 205 75 13',
      href: 'tel:+905352057513',
      description: '7/24 acil çilingir hattı'
    },
    {
      icon: WhatsApp,
      title: 'WhatsApp',
      value: '0535 205 75 13',
      href: 'https://wa.me/905352057513?text=Merhaba%20CEM%20ANAHTAR%20çilingir%20hizmeti%20istiyorum',
      description: 'Hızlı mesajlaşma'
    },
    {
      icon: Email,
      title: 'E-posta',
      value: 'info@cemanahtar.com',
      href: 'mailto:info@cemanahtar.com',
      description: 'Genel bilgi ve sorular'
    },
    {
      icon: LocationOn,
      title: 'Adres',
      value: 'Caferağa Mah. Bahariye Cad. 37 Dk:40 Kadıköy',
      href: '#map',
      description: 'Hizmet bölgemiz'
    }
  ]

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #0F1B3C 0%, #081229 50%, #0F1B3C 100%)',
        position: 'relative'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F6B93B 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                mb: 2
              }}
            >
              İletişim
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                fontWeight: 400
              }}
            >
              Acil durumda hemen arayın veya mesaj gönderin
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Stack spacing={3}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Card
                      component="a"
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      sx={{
                        textDecoration: 'none',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 25px rgba(246, 185, 59, 0.2)'
                        }
                      }}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #F6B93B 0%, #D4AC0D 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mr: 3,
                              flexShrink: 0
                            }}
                          >
                            <info.icon sx={{ fontSize: 24, color: '#081229' }} />
                          </Box>
                          <Box sx={{ flexGrow: 1 }}>
                            <Typography
                              variant="h6"
                              gutterBottom
                              sx={{ fontWeight: 600, mb: 0.5 }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{ 
                                color: '#F6B93B', 
                                fontWeight: 600,
                                mb: 0.5
                              }}
                            >
                              {info.value}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            >
                              {info.description}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Emergency Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, rgba(244, 67, 54, 0.1) 0%, rgba(15, 27, 60, 0.8) 100%)',
                      border: '2px solid rgba(244, 67, 54, 0.3)',
                      textAlign: 'center'
                    }}
                  >
                    <Schedule sx={{ fontSize: 40, color: '#F44336', mb: 1 }} />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: '#F44336', fontWeight: 600 }}
                    >
                      Acil Durum?
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Kapıda kaldınız mı? Hemen arayın, 15 dakikada yanınızdayız!
                    </Typography>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Phone />}
                      href="tel:+905352057513"
                      sx={{
                        bgcolor: '#F44336',
                        '&:hover': {
                          bgcolor: '#D32F2F'
                        }
                      }}
                    >
                      ACİL ARAMA
                    </Button>
                  </Box>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} lg={7}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: '#F6B93B',
                      mb: 3
                    }}
                  >
                    Mesaj Gönderin
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Adınız Soyadınız"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                        />
                      </Grid>
                      
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Telefon Numaranız"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          variant="outlined"
                          placeholder="+90 5XX XXX XX XX"
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Mesajınız"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          multiline
                          rows={4}
                          variant="outlined"
                          placeholder="Hangi hizmete ihtiyacınız var? Adresiniz nedir? Acil durumu kısaca açıklayın..."
                        />
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="consent"
                              checked={formData.consent}
                              onChange={handleInputChange}
                              required
                              sx={{
                                color: '#F6B93B',
                                '&.Mui-checked': {
                                  color: '#F6B93B'
                                }
                              }}
                            />
                          }
                          label={
                            <Typography variant="body2" color="text.secondary">
                              Kişisel verilerimin işlenmesine ve iletişim kurulmasına izin veriyorum. 
                              <strong> (KVKK uyarınca gereklidir)</strong>
                            </Typography>
                          }
                        />
                      </Grid>

                      {/* Form Status Messages */}
                      {formStatus.error && (
                        <Grid item xs={12}>
                          <Alert severity="error">
                            {formStatus.error}
                          </Alert>
                        </Grid>
                      )}

                      {formStatus.success && (
                        <Grid item xs={12}>
                          <Alert severity="success">
                            Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                          </Alert>
                        </Grid>
                      )}
                      
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={formStatus.loading}
                          startIcon={
                            formStatus.loading ? (
                              <CircularProgress size={20} />
                            ) : (
                              <Send />
                            )
                          }
                          sx={{
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600
                          }}
                        >
                          {formStatus.loading ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {/* Quick Contact Buttons */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ textAlign: 'center', mb: 2 }}
                  >
                    Acil durumda hemen ulaşın:
                  </Typography>
                  
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                  >
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<Phone />}
                      href="tel:+905352057513"
                      sx={{
                        borderColor: '#007BFF',
                        color: '#007BFF',
                        '&:hover': {
                          borderColor: '#0056B3',
                          backgroundColor: 'rgba(0, 123, 255, 0.1)'
                        }
                      }}
                    >
                      Hemen Ara
                    </Button>
                    
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      startIcon={<WhatsApp />}
                      href="https://wa.me/905352057513?text=Merhaba%20CEM%20ANAHTAR%20çilingir%20hizmeti%20istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
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
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactForm
